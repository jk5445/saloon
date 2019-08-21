const db = require('../queries');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	createUser, 
	logIn, 
	getUserName,
	getUserById
};

function createUser (userName, firstName, lastName, email, password, serve) {
	
	let hash;
	bcrypt.hash(password, saltRounds, (err, res) => {
		if (err){
			return serve(err, "bcrypt hash failed");
		}
		hash = res;
		db.query(
			'INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
			[userName, firstName, lastName, email, hash],
			(error, results) => {
				if (error) {
					return serve(error, "insert user failed");
				} else if (results.rowCount < 1) {
					return serve(true, "user_id not returned");
				}
				
				serve(error, results.rows[0]['user_id']);
			}
		);
	});
}

//email and password in body
//issue token
function logIn (email, password, serve) {
	db.query(
		'SELECT user_id, password_hash FROM users WHERE email=$1',
		[email],
		(error, results) => {
			if (error) {
				return serve(error, "select user failed");
			} else if(results.rowCount < 1){
				return serve(true, "email is not valid");
			}

			const hash = results.rows[0]['password_hash'];
			bcrypt.compare(password, hash, (err, res) => {
				if(err){
					return serve(err, "bcrypt compare failed");
				}
				const user_id = results.rows[0]['user_id'];
				return serve(err, user_id);
			});
		}
	)
}

//TODO: add user history to user object
function getUserById (user_id, serve) {
	db.query(
	  'SELECT user_name, first_name, last_name, email FROM users WHERE user_id = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
      		return serve(error, "select user failed");
		} else if (results.rowCount < 1) {
			return serve(true, "user_id " + user_id + " is not valid");
		}

		const user = results.rows[0]
		return serve(error, user);
  	  }
  	);
}

function getUserName(user_id, serve) {
	db.query(
	  'SELECT user_name FROM users WHERE user_id = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
			return serve(error, "select user failed");
    	} else if (results.rowCount < 1) {
			return serve(true, "user_id is not valid");
		}
		return serve(null, results.rows[0]['user_name']);
  	  }
  	);
}