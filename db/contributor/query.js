const db = require('../queries');
const user = require('../user/query.js');

module.exports = {
	inviteContributor, 
	acceptInvite, 
	getContributors,
	authorize
};

function inviteContributor (convo_id, contributor_username, inviter_id, serve) {
	db.query(
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id) VALUES ($1, (SELECT user_id FROM users WHERE user_name=$2), $3)',
		[convo_id, contributor_username, inviter_id],
		(error, _results) => {
	  		if(error){
	  			return serve(error, "invite failed");
			}
			return serve(null, true);
		}
	);
}

function acceptInvite (convo_id, contributor_id, serve) {
	db.query(
		'UPDATE contributor SET accepted_at = NOW() WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, _results) => {
	  		if(error){
	  			return serve(error, "accept failed");
			}
			db.query(
				'UPDATE convo SET contributors = contributors + 1 WHERE convo_id = $1',
				[convo_id],
				(error, _results) => {
					if(error){
						return serve(error, "count failed");
					}
					return serve(null, true);
				}
			);
		}
	);
}

function getContributors (convo_id, serve) {
	db.query(
		'SELECT contributor_id FROM contributor WHERE convo_id=$1 and accepted_at IS NOT NULL',
		[convo_id],
		(error, results) => {
			if (error) {
				return serve(error, "select contributor fail");
			} else if (results.rowCount < 1){
				return serve(true, "convo has no contributors");
			}
			let i;
			let count = 0;
			let contributors = [];
			for(i = 0; i < results.rowCount; i++) {
				const contributor_id = results.rows[i]["contributor_id"];
				user.getUserName(contributor_id, (err, res) => {
					if(err){
						return serve(err, res);
					}
					contributors.push(res);
					count++;

					if(count >= results.rowCount){
						return serve(null, contributors);
					}
				});
			}
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
				return serve(error, "select contributor failed");
			}
			//true if record is found
			const authorized = (results.rowCount > 0);
			return serve(null, authorized);
		}
	);
}