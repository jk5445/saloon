const db = require('../queries')
const user = require('../user/query')
const moment = require('moment')

module.exports = { 
	createPost, 
	getPosts, 
	authorize
}

//a user needs to be part of a conversation to post
//this check should happen at server level
function createPost (convo_id, contributor_id, post, serve) {
	db.getClient((error, client, done) => {
		if(error) {
			console.error('Error connecting client', error)
			return serve (true, "Error connecting client")
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

			let query = 'INSERT INTO post (convo_id, contributor_id, post) VALUES ($1, $2, $3)'
			client.query(query, [convo_id, contributor_id,  post], error => {
				if(abort(error)) return serve (true, "Error inserting post")

				query = 'UPDATE convo SET (posts, last_post_at) = (posts + 1, NOW()) WHERE convo_id = $1'
				client.query(query, [convo_id], error => {
					if(abort(error)) return serve (true, "Error updating post count")

					client.query('COMMIT', err => {
						if(abort(err)) return serve (true, "Error commiting transaction")
						done()
						return serve (null, true)
					})
				})
			})
		})
	})
}

function getPosts (convo_id, serve) {
	const query = 'SELECT post.post, post.created_at, users.username FROM post ' +
				'INNER JOIN users ON post.contributor_id = users.user_id ' +
				'WHERE convo_id = $1 ORDER BY created_at ASC'
	db.query(query,
		[convo_id],
		(error, results) => {
			if (error) {
				console.error('select post failed', error)
				return serve (true, "select post failed")
			} else if (results.rowCount < 1) {
				console.error('Conversation has no posts', 'Contrived Error')
				return serve (true, "convo has no post")
			}

			let posts = []
			let i
			for (i = 0; i < results.rowCount; i++) {
				const post = {}
				post.post = results.rows[i]['post']
				post.created_at = results.rows[i]['created_at']
				post.contributor = results.rows[i]['username']
				
				const post_at = moment.utc(results.rows[i]['created_at'], moment.ISO_8601)
				post.age = moment(post_at).fromNow()

				posts.push(post)
			}
			return serve (null, posts)
		}
	)
}

//call directly from server
function authorize (convo_id, contributor_id, serve) {
	//verify
	let authorized = false 
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2 and accepted_at IS NOT NULL',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				console.error('Select contributor failed', error)
				return serve (true, "select contributor failed")
			}
			//true if record is found
			authorized = (results.rowCount > 0)
			return serve (null, authorized)
		}
	)
}