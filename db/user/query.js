const db = require('../queries');
const bcrypt = require('bcrypt');

const createUser = (request, response) => {
	const {userName, firstName, lastName, email, password} = request.body;

  	bcrypt.hash(password, saltRounds, (error, hash) => {
		if (error){
			throw error;
		}
		db.query(
		  'INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_ID',
		  [userName, firstName, lastName, email, hash],
		  (error, results) => {
	    	if (error) {
	    		throw error;
	    	}
	    	response.status(201).send(results.rows[0]);
	  	  }
	  	);
	});
}

//email and password in body
//issue token
const logIn = (request, response) => {

}

const getUserByID = (request, response) => {
	const id = parseInt(request.params.id);
	//implement auth
	//id will be extracted form JWT

	db.query(
	  'SELECT user_name, first_name, last_name, email FROM users WHERE user_ID = $1',
	  [id],
	  (error, results) => {
		if (error) {
      		throw error;
    	}
    	response.status(200).json(results.rows[0]);
  	  }
  	);
}