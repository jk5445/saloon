const Pool = require('pg').Pool;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const pool = new Pool({
  user: 'kishk',
  host: 'localhost',
  database: 'saloon',
  password: 'juki2345',
  port: 5432,
});

const createUser = (request, response) => {
	const {userName, firstName, lastName, email, password} = request.body;

  	bcrypt.hash(password, saltRounds, (error, hash) => {
		if (error){
			throw error;
		}
		pool.query(
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

const getUserByID = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query(
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

const createConversation = (request, response) => {
	const {title, invities, post} = request.body;
	const creator_ID = parseInt(request.params.id);
	var convo_ID;

	pool.query(
	  'INSERT INTO  conversations (title, creator, post_count) VALUES ($1, $2, $3) RETURNING convo_ID',
	  [title, creator_ID, 0],
	  (error, results) => {
	  	if(error) {
	  		throw error;
	  	}
	  	response.status(201).send(results.rows[0]);

	  	//createContributor();
	  	//createPost();
	  }
	);
}

const createPost = (request, response) => {
	const {post, contributor, convo_ID} = request.body;
	var post_count;
	var authorized = false;
	pool.query(
	  'SELECT FROM contributors WHERE convo_ID = $1 AND contributor_ID = $2',
	  [convo_ID, contributor],
	  (error, results) => {
	  	if(error) {
	  		throw error;
	  	}
	  	//make sure result comes back as boolean
	  	authorized = results;
	  }
	);
	if(authorized){
		pool.query(
		  'SELECT post_count FROM conversations WHERE convo_ID = $1 FOR UPDATE',
		  [convo_ID],
		  (error, results) => {
		  	if(error) {
		  		throw error;
		  	}
		  	post_count = result+1;
		  	pool.query(
		  	  'INSERT INTO posts (post, contributor, convo_ID, post_order) VALUES ($1, $2, $3, $4)',
		  	  [post, contributor, convo_ID, post_count],
		  	  (error, results) => {
		  		if(error) {
		  			throw error;
		  		}
		  		//response success

		  	  }
			);
		  }
		);
	} else {
		//contributor is not authorized
	}
}

const inviteContributor = (convo_ID, contributor, status, moderator, response) => {
	pool.query(
	  'INSERT INTO contributors (convo_ID, contributor_ID, status, moderator) VALUES ($1, $2, $3, $4) RETURNING contributor_key',
	  [convo_ID, contributor, status, moderator],
	  (error, results) => {
	  	if(error){
	  		throw error;
	  	}
	  	response.status(201).send(results.rows[0]);
	  }
}

const inviteContributor = (request, response) => {
	const {convo_ID, contributor, status, moderator} = request.body;
	const inviter_ID = parseInt(request.params.id);

	//if inviter is in conversation
	pool.query(
	  'SELECT 1 FROM contributors WHERE convo_ID = $1 AND inviter_ID = $2',
	  [convo_ID, inviter_ID],
	  (error, results) => {
	  	if (error){
	  		throw error;
	  	}
	  	if (response.rowCount > 0){
	  		inviteContributor(convo_ID, contributor, status, moderator, response);
	  	}
	  	else{
	  		response.status(401).send(`User is not authorized to invite contributor`);
	  	}
	  }
	);
}