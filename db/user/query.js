const db = require('../queries');
const bcrypt = require('bcrypt');

const createUser = async (userName, firstName, lastName, email, password) => {
	
	const hash = await bcrypt.hash(password, saltRounds);
	if (error){
		throw error;
	}
	db.query(
		'INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
		[userName, firstName, lastName, email, hash],
		(error, results) => {
	   		if (error) {
	   			throw error;
			}
			
			const user = {};
			user.user_id = results.rows[0]['user_id'];
	   		return user;
	 	}
	);
}

//email and password in body
//issue token
const logIn = async (email, password) => {
	db.query(
		'SELECT password_hash FROM user WHERE email=$1',
		[email],
		(error, results) => {
			if (error) {
				throw error;
			}
			const hash = results.rows[0]['password_hash'];
			const valid = await bcrypt.compare(password, hash)
			return valid;
		}
	)
}

//TODO: add user history to user object
const getUserByID = async (user_id) => {

	db.query(
	  'SELECT user_name, first_name, last_name, email FROM users WHERE user_ID = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
      		throw error;
		}
		
		const user = {};
		user.user_name = results.rows[0]['user_name'];
		user.first_name = results.rows[0]['first_name'];
		user.last_name = results.rows[0]['last_name'];
		user.email = results.rows[0]['email'];
    	return user;
  	  }
  	);
}

const getUserName = async (user_id) => {
	db.query(
	  'SELECT user_name FROM users WHERE user_ID = $1',
	  [user_id],
	  (error, results) => {
		if (error) {
      		throw error;
    	}
    	return results.rows[0]['user_name'];
  	  }
  	);
}

modeuls.exports(createUser, logIn, getUserName);