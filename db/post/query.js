const db = require('../queries');

//a user needs to be part of a conversation to post
const createPost = (request, response) => {

	//with auth contributor_ID will come from JWT
	const {post, contributor_ID, convo_ID} = request.body;
	var post_count;
	var authorized = false;

	//verify 
	db.query(
	  'SELECT 1 FROM contributors WHERE convo_ID = $1 AND contributor_ID = $2',
	  [convo_ID, contributor],
	  (error, results) => {
	  	if(error) {
	  		throw error;
	  	}
	  	//true if record is found
	  	authorized = (results.rowCount > 0);
	  }
	);

	if(authorized){
		db.query(
		  'SELECT post_count FROM conversations WHERE convo_ID = $1 FOR UPDATE',
		  [convo_ID],
		  (error, results) => {
		  	if(error) {
		  		throw error;
		  	}
		  	post_count = result+1;
		  	db.query(
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