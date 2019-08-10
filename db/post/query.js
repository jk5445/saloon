const db = require('../queries');

//a user needs to be part of a conversation to post
const createPost = (convo_id, contributor_id, post, response) => {
	//with auth contributor_id will come from JWT
	/*const {post, contributor_id, convo_id} = request.body;
	*/

	authorize(convo_id, contributor_id, 
	  (authorized) => {
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
							response();
						}
					)
				}
			);
		}
	  }
	);
}

const getPosts = (convo_id, response) => {
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
				)
			}
			response(posts);
		}
	)
}

const authorize = (convo_id, contributor_id, response) => {
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
			authorized = (results.rowCount > 0);
			response(authorized);
		}
	);
}

modules.exports(createPost, getPosts);