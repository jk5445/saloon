const db = require('../queries')
const user = require('../user/query.js')

module.exports = {
	inviteContributor, 
	acceptInvite, 
	getContributors,
	authorize
}

function inviteContributor (convo_id, contributor_username, inviter_id, serve) {
	db.query(
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id) VALUES ($1, (SELECT user_id FROM users WHERE user_name=$2), $3)',
		[convo_id, contributor_username, inviter_id],
		(error, _results) => {
	  		if(error){
	  			return serve(error, "invite failed")
			}
			return serve(null, true)
		}
	)
}

function acceptInvite (convo_id, contributor_id, serve) {
	db.query(
		'UPDATE contributor SET accepted_at = NOW() WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, _results) => {
	  		if(error){
	  			return serve(error, "accept failed")
			}
			db.query(
				'UPDATE convo SET contributors = contributors + 1 WHERE convo_id = $1',
				[convo_id],
				(error, _results) => {
					if(error){
						return serve(error, "count failed")
					}
					return serve(null, true)
				}
			)
		}
	)
}

function getContributors (convo_id, serve) {
	const query = "SELECT users.user_name FROM contributor " + 
		"INNER JOIN users ON users.user_id=contributor.contributor_id " + 
		"WHERE convo_id=$1 and accepted_at IS NOT NULL"
	db.query( 
		query, [convo_id], 
		(error, results) => {
			if (error) {
				return serve(error, "select contributor fail");
			} else if (results.rowCount < 1){
				return serve(true, "convo has no contributors");
			}

			let i = 0
			let contributors = [];
			for(i; i < results.rowCount; i++) {
				const contributorName = results.rows[i]["user_name"];
				contributors.push(contributorName)
			}
			return serve(null, contributors);
		}
	)
}

function authorize (convo_id, contributor_id, serve) {
	//verify
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				return serve(error, "select contributor failed")
			}
			//true if record is found
			const authorized = (results.rowCount > 0)
			return serve(null, authorized)
		}
	)
}