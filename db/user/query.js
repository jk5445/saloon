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
			serve(err, null);
		}
		hash = res;
	});
	db.query(
		'INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
		[userName, firstName, lastName, email, hash],
		(error, results) => {
	   		if (error) {
				serve(error, null);
			}
			
			const user = {};
			user.user_id = results.rows[0]['user_id'];
	   		serve(null, user);
	 	}
	);
}

//email and password in body
//issue token
function logIn (email, password, serve) {
	db.query(
		'SELECT password_hash FROM user WHERE email=$1',
		[email],
		(error, results) => {
			if (error) {
				serve(error, null);
			}
			if(results.rowCount < 1){
				return false;
			}

			const hash = results.rows[0]['password_hash'];
			let valid;
			bcrypt.compare(password, hash, (err, res) => {
				if(err){
					serve(err, null);
				}
				serve(null, valid);
			});
		}
	)
}

//TODO: add user history to user object
function getUserById (user_id, serve) {

	db.query(
	  'SELECT user_name, first_name, last_name, email FROM users WHERE user_ID = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
      		serve(error, null);
		}
		
		const user = {};
		user.user_name = results.rows[0]['user_name'];
		user.first_name = results.rows[0]['first_name'];
		user.last_name = results.rows[0]['last_name'];
		user.email = results.rows[0]['email'];
    	serve(null, user);
  	  }
  	);
}

function getUserName(user_id, serve) {
	db.query(
	  'SELECT user_name FROM users WHERE user_ID = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
			serve(error, null);
    	}
    	serve(null, results.rows[0]['user_name']);
  	  }
  	);
}