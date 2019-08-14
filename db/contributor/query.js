const db = require('../queries');
const user = require('../user/query.js');

module.exports = {
	inviteContributor, 
	acceptInvite, 
	getContributors,
	authorize
};

function inviteContributor (convo_id, contributor_id, inviter_id, serve) {
	db.query(
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id) VALUES ($1, $2, $3)',
		[convo_id, contributor_id, inviter_id],
		(error, _results) => {
	  		if(error){
	  			serve(error, null);
			}
			serve(null, null);
		}
	);
}

function acceptInvite (convo_id, contributor_id, serve) {
	db.query(
		'UPDATE contributor SET accepted_at = NOW() WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, _results) => {
	  		if(error){
	  			serve(error, null);
			}
			db.query(
				'UPDATE convo SET contributors = contributors + 1 WHERE convo_id = $1',
				[convo_id],
				(error, _results) => {
					if(error){
						serve(error, null);
					}
					serve(null, null);
				}
			);
		}
	);
}

function getContributors (convo_id, serve) {
	db.query(
		'SELECT contributor_id FROM contributor WHERE convo_id=$1 and accepted_at!=NULL',
		[convo_id],
		(error, results) => {
			if (error) {
				serve(error, null);
			}

			let i;
			let contributors = [];

			for(i = 0; i < results.rowCount; i++) {
				const contributor_id = results.rows[i]["contributor_id"]
				user.getUserName(contributor_id, (err, res) => {contributors.push(res)});
			}

			serve(null, contributors);
		}
	);
}

function authorize (convo_id, contributor_id, serve) {
	//verify
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				serve(error, null);
			}
			//true if record is found
			const authorized = (results.rowCount > 0);
			serve(null, authorized);
		}
	);
}