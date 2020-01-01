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
		'INSERT INTO contributor (convo_id, contributor_id, inviter_id) VALUES ($1, (SELECT user_id FROM users WHERE username=$2), $3)',
		[convo_id, contributor_username, inviter_id],
		(error, _results) => {
	  		if(error){
				console.error('Invite Failed', error)
	  			return serve (true, "Invite failed, user may already be invited")
			}
			return serve (null, "Contributor Invited")
		}
	)
}

function acceptInvite (convo_id, contributor_id, serve) {
	let query = 'SELECT accepted_at FROM contributor WHERE convo_id=$1 AND contributor_id=$2'
	db.query(query, [convo_id, contributor_id], (error, results) => {
		if(error) return serve (true, "Error checking invite")
		if(results.rowCount < 1) return serve (true, "Contributor not invited")
		else if (results.rows[0]['accepted_at'] != null) return serve (null, "Already accepted")
		
		db.getClient((err, client, done) => {
			if(err) {
				console.error('Error connecting client', error)
				return serve (true, 'Error connecting client')
			}

			const abort = err => {
				if(err){
					console.error("Error in transaction", err)
					client.query('ROLLBACK', err => {
						if(err){
							console.error("Error rolling back client", err)
						}
						done()
					})
				}
				return !!err
			}

			client.query('BEGIN', err => {
				if(abort(err)) return serve (true, "Error beginning transaction")

				query = 'UPDATE contributor SET accepted_at = NOW() WHERE convo_id=$1 AND contributor_id=$2'
				client.query(query, [convo_id, contributor_id], (error, _results) => {
					if(abort(error)) return serve (true, "Error accepting invite")
					
					query = 'UPDATE convo SET contributors = contributors + 1 WHERE convo_id = $1'
					client.query(query, [convo_id], (error, _results) => {
						if(abort(error)) return serve (true, "Error updating contributor count")

						client.query('COMMIT', err => {
							if(abort(err)) return serve (true, "Error commiting transaction")
							done()
							return serve (null, "Accepted!")
						})
					})
				})
			})
		})
	})
}

function getContributors (convo_id, serve) {
	const query = "SELECT users.username FROM contributor " + 
		"INNER JOIN users ON users.user_id=contributor.contributor_id " + 
		"WHERE convo_id=$1 and accepted_at IS NOT NULL"
	db.query( 
		query, [convo_id], 
		(error, results) => {
			if (error) {
				console.error('Error selecting contributor', error)
				return serve (true, "Error selecting contributor")
			} else if (results.rowCount < 1){
				return serve (true, "Invalid conversation")
			}

			let contributors = results.rows.map(x => x['username'])
			return serve (null, contributors)
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
				console.error('Select contributor failed', error)
				return serve (true, "select contributor failed")
			}
			//true if record is found
			const authorized = (results.rowCount > 0)
			return serve (null, authorized)
		}
	)
}