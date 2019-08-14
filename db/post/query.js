const db = require('../queries');
const user = require('../user/query');

module.exports = { 
	createPost, 
	getPosts, 
	authorize
};

//a user needs to be part of a conversation to post
//this check should happen at server level
function createPost (convo_id, contributor_id, post, serve) {
	//with auth contributor_id will come from JWT
	/*const {post, contributor_id, convo_id} = request.body;
	*/

	db.query(
		'INSERT INTO post (convo_id,contributor_id, post) VALUES ($1, $2, $3)',
		[convo_id, contributor_id,  post],
		(error, _results) => {
		  	if (error){
				serve(error, null);
			}
			db.query(
				'UPDATE convo SET (posts, last_post_at) = (posts + 1, NOW()) WHERE convo_id = $1',
				[convo_id],
				(error, _results) => {
					if (error) {
						serve(error, null);
					}
					serve(null, null);
				}
			);
		}
	);
}

function getPosts (convo_id, serve) {
	db.query('SELECT post, contributor_id, created_at FROM post WHERE convo_id = $1',
		[convo_id],
		(error, results) => {
			if (error) {
				serve(error, null);
			}
			let posts = [];
			let i;
			for (i = 0; i < results.rowCount; i++) {
				const post = {};
				post.post = results.rows[i]['post'];
				post.created_at = results.rows[i]['created_at'];

				const user_id = results.rows[i]['user_id']
				user.getUserName(user_id, (err, res) => {
					if(err){
						serve(error, null);
					}
					post.contributor = res;
				});
				posts.push(post);
			}
			serve(null, posts);
		}
	);
}

//call directly from server
function authorize (convo_id, contributor_id, serve) {
	//verify
	let authorized = false; 
	db.query(
		'SELECT 1 FROM contributor WHERE convo_id = $1 AND contributor_id = $2',
		[convo_id, contributor_id],
		(error, results) => {
			if(error) {
				serve(error, null);
			}
			//true if record is found
			authorized = (results.rowCount > 0);
			serve(null, authorized);
		}
	);
}