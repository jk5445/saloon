const db = require('../server/queries');

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
const createConversation = (request, response) => {
	const {title, invities, post} = request.body;
	const creator_ID = parseInt(request.params.id);
	var convo_ID;

	db.query(
	  'INSERT INTO  conversations (title, creator, post_count) VALUES ($1, $2, $3) RETURNING convo_ID',
	  [title, creator_ID, 0],
	  (error, results) => {
	  	if(error) {
	  		throw error;
	  	}
	  	response.status(201).send(results.rows[0]);

	  	//createContributor();
	  	//contributor needs to be created before the post as each post references a contributor
	  	//createPost();
	  }
	);
}