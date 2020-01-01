const db = require('../queries')
const {getFeedById, getInviteFeed} = require('../feed/query')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
	createUser, 
	logIn, 
	getUserName,
	getUserById
}

function createUser (userName, firstName, lastName, email, password, serve) {
	
	let hash
	bcrypt.hash(password, saltRounds, (err, res) => {
		if (err){
			console.error('Bcrypt hash failed', err)
			return serve (true, "bcrypt hash failed")
		}
		hash = res
		db.query(
			'INSERT INTO users (username, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
			[userName, firstName, lastName, email, hash],
			(error, results) => {
				if (error) {
					console.error('Insert user failed', error)
					return serve (true, "insert user failed")
				} else if (results.rowCount < 1) {
					console.error('user_id not returned', 'Contrived Error')
					return serve (true, "user_id not returned")
				}
				
				serve (null, results.rows[0]['user_id'])
			}
		)
	})
}

//email and password in body
//issue token
function logIn (email, password, serve) {
	db.query(
		'SELECT user_id, password_hash FROM users WHERE email=$1',
		[email],
		(error, results) => {
			if (error) {
				console.error('Select user failed', error)
				return serve (true, "select user failed")
			} else if(results.rowCount < 1){
				console.error('Incorrect email', 'Contrived Error')
				return serve (true, "Incorrect email")
			}

			const hash = results.rows[0]['password_hash']
			bcrypt.compare(password, hash, (err, res) => {
				if(err){
					console.error('bcrypt compare failed', err)
					return serve (true, "bcrypt compare failed")
				} else if (res) {
					const user_id = results.rows[0]['user_id']
					return serve (null, user_id)
				} else {
					return serve(true, "Incorrect password")
				}
			})
		}
	)
}

//TODO: add user history to user object
function getUserById (user_id, serve) {
	let query = "SELECT username, first_name, last_name, email FROM users " +
		"WHERE user_id = $1"
	db.query(query, [user_id], (error, results) => {
		if (error) {
			console.error('Select user failed', error)
      		return serve (true, "select user failed")
		} else if (results.rowCount < 1) {
			console.error('Invalid user_id', 'Contrived Error')
			return serve (true, 'Invalid user_id')
		}
		const user = results.rows[0]

		query = "SELECT convo_id, contributor_id, post, created_at FROM post " +
			"WHERE contributor_id = $1 ORDER BY created_at DESC"
		db.query(query, [user_id], (error, results) => {
			if(error) {
				console.error('Select posts failed', error)
				return serve (null, user)
			} else if (results.rowCount < 1) {
				return serve (null, user)
			}
			user.posts = results.rows

			getFeedById(user_id, 1, (error, results) => {
				if(error) return serve (error, user)
				user.convos = results.convos
				
				getInviteFeed(user_id, 1, (error, results) => {
					if(error) return serve (error, user)
					user.invites = results.convos
	
					return serve (null, user)
				})
			})
		})
  	  }
  	)
}

function getUserName (user_id, serve) {
	db.query(
		'SELECT username FROM users WHERE user_id = $1',
		[user_id],
		(error, results) => {
			if (error) {
				console.error('Select user failed', error)
				return serve (true, "select user failed")
			} else if (results.rowCount < 1) {
				console.error('Invalid user_id', 'Contrived Error')
				return serve (true, 'Invalid user_id')
			}
			return serve (null, results.rows[0]['username'])
		}
  	)
}