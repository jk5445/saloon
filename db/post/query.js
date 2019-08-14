const db = require('../queries');

//a user needs to be part of a conversation to post
const createPost = async (convo_id, contributor_id, post) => {
	//with auth contributor_id will come from JWT
	/*const {post, contributor_id, convo_id} = request.body;
	*/

	const authorized = false;
	try {
		authorized = await authorize(convo_id, contributor_id);
	}
	catch(error){
		throw error;
	}

	if (authorized) {
		db.query(
			'INSERT INTO post (convo_id, post, contributor_id) VALUES ($1, $2, $3)',
			[convo_id, post, contributor_id],
			(error, _results) => {
			  	if (error){
					throw error;
				}
				response.status(201).send();
				db.query(
					'UPDATE convo SET posts = posts + 1 WHERE convo_id = $1',
					[convo_id],
					(error, _results) => {
						if (error) {
							throw error;
						}
						return;
					}
				);
			}
		);
	}
}

const getPosts = async (convo_id) => {
	posts = [];
	db.query('SELECT post, contributor_id, created_at FROM post WHERE convo_id = $1',
		[convo_id],
		(error, results) => {
			if (error) {
				throw error;
			}
			var i;
			for (i = 0; i < results.rowCount; i++) {
				post = {};
				post.post = results.rows[i]['post'];
				post.created_at = results.rows[i]['created_at'];
				db.query(
					'SELECT user_name FROM user WHERE user_id = $1',
					[results.rows[i]['contributor_id']],
					(error, result) => {
						if (error) {
							throw error;
						}
						post.contributor = result.rows[0]['user_name'];
						posts.push(post);
					}
				);
			}
			return posts;
		}
	);
}

const authorize = async (convo_id, contributor_id) => {
	//verify
	var authorized = false; 
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				throw error;
			}
			//true if record is found
			authorized = await (results.rowCount > 0);
			return authorized;
		}
	);
}

modules.exports(createPost, getPosts);