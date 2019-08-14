const db = require('../queries');
const user = require('../user/query.js');

const inviteContributor = async (convo_id, contributor_id, inviter_id) => {
	db.query(
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id, ) VALUES ($1, $2, $3)',
		[convo_id, contributor_id, inviter_id],
		(error, _results) => {
	  		if(error){
	  			throw error;
			}
			return;
		}
	);
}

const acceptInvite = async (convo_id, contributor_id) => {
	db.query(
		'UPDATE contributor SET  accepted_at=NOW() WHERE convo_id=$1 AND contributor_id=$2',
		[convo_id, contributor_id],
		(error, _results) => {
	  		if(error){
	  			throw error;
	  		}
		}
	);
}

const getContributors = async (convo_id) => {
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

modules.exports(inviteContributor, acceptInvite, getContributors);