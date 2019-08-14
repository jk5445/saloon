const db = require('../queries');
const user = require('../user/query.js');

module.exports = {
	inviteContributor, 
	acceptInvite, 
	getContributors,
	authorize
};

async function inviteContributor (convo_id, contributor_id, inviter_id) {
	db.query(
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id) VALUES ($1, $2, $3)',
		[convo_id, contributor_id, inviter_id],
		(error, _results) => {
	  		if(error){
	  			throw error;
			}
			return;
		}
	);
}

async function acceptInvite (convo_id, contributor_id) {
	db.query(
		'UPDATE contributor SET accepted_at = NOW() WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, _results) => {
	  		if(error){
	  			throw error;
			}
			db.query(
				'UPDATE convo SET contributors = contributors + 1 WHERE convo_id = $1',
				[convo_id],
				(error, _results) => {
					if(error){
						throw error;
					}
					return;
				}
			);
		}
	);
}

async function getContributors (convo_id) {
	db.query(
		'SELECT contributor_id FROM contributor WHERE convo_id=$1 and accepted_at!=NULL',
		[convo_id],
		(error, results) => {
			if (error) {
				throw error;
			}

			let i;
			let contributors = [];

			for(i = 0; i < results.rowCount; i++) {
				const contributor_id = results.rows[i]["contributor_id"]
				const name = await user.getUserName(contributor_id);
				contributors.push(name);
			}

			return contributors;
		}
	);
}

async function authorize (convo_id, contributor_id) {
	//verify
	let authorized = false; 
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				throw error;
			}
			//true if record is found
			authorized = (results.rowCount > 0);
			return authorized;
		}
	);
}