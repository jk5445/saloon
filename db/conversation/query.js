const db = require('../queries')
const {getPosts, createPost} = require('../post/query')
const moment = require('moment')

module.exports = {
	createConvo, 
	getConvo,
	vote 
}

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
//title and post is verified by server
function createConvo (user_id, title, post, serve) {
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

			let query = 'INSERT INTO convo (title, last_post_at, posts, contributors) VALUES ($1, NOW(), 1, 1) RETURNING convo_id'
			client.query(query, [title], (error, results) => {
				if(abort(error)) return serve (true, "Error inserting convo")
				const convo = {}
				convo.convo_id = results.rows[0]['convo_id']
				
				query = 'INSERT INTO contributor (convo_id, contributor_id, inviter_id, accepted_at) VALUES ($1, $2, $2, NOW())'
				client.query(query, [convo.convo_id, user_id], error => {
					if(abort(error)) return serve (true, "Error inserting contributor")

					query = 'INSERT INTO post (convo_id, contributor_id, post) VALUES ($1, $2, $3) RETURNING post_id'
					client.query(query, [convo.convo_id, user_id, post], (error, results) => {
						if(abort(error)) return serve (true, "Error inserting post")
						else if(results.rowCount < 1) return serve(true, 'Error inserting post')

						query = 'UPDATE convo SET first_post = $2 WHERE convo_id = $1'
						client.query(query, [convo.convo_id, results.rows[0]['post_id']], error => {
							if(abort(error)) return serve (true, 'Error setting firstPost')

							client.query('COMMIT', err => {
								if(abort(err)) return serve (true, "Error commiting transaction")
								done()
								convo.isContributor = true
								return serve (null, convo)
							})
						})
					})
				})
			})
		})
	})
}

//returns an object containing all the convo information
//see api docs for structure
function getConvo (convo_id, user_id, serve) {
	db.query(
		'UPDATE convo SET views = views + 1 WHERE convo_id = $1',
		[convo_id],
		(error, _result) => {
			if (error) {
				console.error('Update views falied', error)
				return serve (true, "update convo views failed")
			}
		}
	)

	const convo = {}
	convo.vote = 0

	if(user_id){
		db.query(
			'SELECT vote FROM convo_vote WHERE user_id = $1 AND convo_id = $2 ORDER BY vote_at DESC',
			[user_id, convo_id],
			(error, results) => {
				if(error) console.error('Error getting vote', error)
				
				if (results.rowCount > 0){
					convo.vote = results.rows[0]['vote']
				}
			}
		)
	}

	const query = "SELECT convo.*, users.username, users.user_id, contributor.accepted_at " +  
	"FROM convo INNER JOIN contributor ON convo.convo_id=contributor.convo_id " +
	"INNER JOIN users ON contributor.contributor_id=users.user_id " + 
	"WHERE convo.convo_id=$1"
	db.query(
		query,
		[convo_id],
		(error, results) => {
			if (error) {
				console.error('Select convo failed', error)
				return serve (true, "select convo failed")
			} else if (results.rowCount < 1){
				console.error('Select convo failed')
				return serve (true, "select convo failed")
			}
			convo.convo_id = results.rows[0]['convo_id']
			convo.title = results.rows[0]['title']
			convo.contributorCount = results.rows[0]['contributors']
			convo.postCount = results.rows[0]['posts']
			convo.views = results.rows[0]['views']
			convo.votes = results.rows[0]['votes']
			convo.commentCount = results.rows[0]['comments']
			
			const last_post = moment.utc(results.rows[0]['last_post_at'], moment.ISO_8601)
			convo.age = moment(last_post).fromNow()

			let i
			convo.contributors = []
			convo.invites = []
			for(i = 0; i < results.rowCount; i++){
				if(results.rows[i]['accepted_at'] == null)
					convo.invites.push(results.rows[i]['username'])
				else
					convo.contributors.push(results.rows[i]['username'])

				if(user_id && user_id === results.rows[i]['user_id'])
					convo.isContributor = true
			}

			//get posts
			getPosts(convo_id, (err, res) => {
				if (err) {
					return serve (err, res)
				}
				convo.posts = res

				return serve (null, convo)
			})
		}
	)
}

function vote(convo_id, user_id, vote, serve){

	db.getClient((error, client, done) => {
		if(error) {
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
			if(abort(err)) return serve (true, 'Error beginning transaction')

			let query = 'SELECT vote FROM convo_vote ' + 
				'WHERE convo_id = $1 AND user_id = $2 ' + 
				'ORDER BY vote_at DESC'
			client.query(query, [convo_id, user_id], (error, results) => {
				if(abort(error)) return serve (true, 'Error selecting previous vote')
				
				let oldVote = 0
				if(results.rowCount > 0) oldVote = results.rows[0]['vote']

				query = 'INSERT INTO convo_vote ' + 
					'(convo_id, user_id, vote) VALUES ($1, $2, $3)'
				client.query(query, [convo_id, user_id, vote], error => {
					if(abort(error)) return serve (true, 'Error inserting vote')

					let voteDiff = vote - oldVote
					query = 'UPDATE convo SET votes = votes + $2 WHERE convo_id = $1'
					client.query(query, [convo_id, voteDiff], error => {
						if(abort(error)) return serve (true, 'Error updating vote count')

						client.query('COMMIT', err => {
							if(abort(err)) return serve (true, "Error commiting transaction")
							done()
							return serve (null, true)
						})
					})
				})
			})
		})
	})
}