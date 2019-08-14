const db = require('../queries');
const user = require('../user/query');

module.exports = { 
	createPost, 
	getPosts, 
	authorize
};

//a user needs to be part of a conversation to post
//this check should happen at server level
async function createPost (convo_id, contributor_id, post) {
	//with auth contributor_id will come from JWT
	/*const {post, contributor_id, convo_id} = request.body;
	*/

	db.query(
		'INSERT INTO post (convo_id,contributor_id, post) VALUES ($1, $2, $3)',
		[convo_id, contributor_id,  post],
		(error, _results) => {
		  	if (error){
				throw error;
			}
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

async function getPosts (convo_id) {
	posts = [];
	db.query('SELECT post, contributor_id, created_at FROM post WHERE convo_id = $1',
		[convo_id],
		(error, results) => {
			if (error) {
				throw error;
			}
			let i;
			for (i = 0; i < results.rowCount; i++) {
				post = {};
				post.post = results.rows[i]['post'];
				post.created_at = results.rows[i]['created_at'];

				try {
					const user_id = results.rows[i]['user_id']
					post.contributor = await user.getUserName(user_id);
				} catch(error) {
					throw error;
				}

				posts.push(post);
			}
			return posts;
		}
	);
}

//call directly from server
async function authorize (convo_id, contributor_id) {
	//verify
	let authorized = false; 
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				throw error;
			}
			//true if record is found
			authorized = (results.rowCount > 0);
			return authorized;
		}
	);
}