const db = require('../queries');

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
//title and post is verified by server
const createConversation = (request, response) => {
	const {title, post} = request.body;
	//user_id should come from token
	const user_id = parseInt(request.params.id);

	db.query(
	  'INSERT INTO  convo (title, creator) VALUES ($1, $2) RETURNING convo_id',
	  [title, user_id],
	  (error, results) => {
	  	if(error) {
	  		throw error;
		}
		const convo_id = results.rows[0][convo_id];
		
		//add user as contributor
		db.query(
		  'INSERT INTO contributor (convo_id, contributor_id, accepted_at) VALUES ($1, $2, CURRENT_TIMESTAMP)',
		  [convo_id, user_id],
		  (error, _results) => {
			if (error){
				throw error;
			}

			//create first post
			db.query(
			  'INSERT INTO post (convo_id, post, contributor_id) VALUES ($1, $2, $3)',
			  [convo_id, post, user_id],
			  (error, _results) => {
				if (error){
					throw error;
				}
				response.status(201).send();
			  }
			);
		  }
		);
	  }
	);
}