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
	db.getClient((error, client, done) => {
		if(error) return serve(error, "Error connecting client")

		const abort = err => {
			if(err){
				console.error("Error in transaction", err)
				client.query('ROLLBACK', err => {
					if(err){
						console.error("Error rolling back client", err)
					}
					done()
				})
			}
			return !!err
		}

		client.query('BEGIN', err => {
			if(abort(err)) return serve(err, "Error beginning transaction")

			let query = 'INSERT INTO post (convo_id, contributor_id, post) VALUES ($1, $2, $3)'
			client.query(query, [convo_id, contributor_id,  post], error => {
				if(abort(error)) return serve(error, "Error inserting post")

				query = 'UPDATE convo SET (posts, last_post_at) = (posts + 1, NOW()) WHERE convo_id = $1'
				client.query(query, [convo_id], error => {
					if(abort(error)) return serve(error, "Error updating post count")

					client.query('COMMIT', err => {
						if(abort(err)) return serve(err, "Error commiting transaction")
						done()
						return serve(err, true)
					})
				})
			})
		})
	})
}

function getPosts (convo_id, serve) {
	db.query('SELECT post, contributor_id, created_at FROM post WHERE convo_id = $1',
		[convo_id],
		(error, results) => {
			if (error) {
				return (error, "select post failed");
			} else if (results.rowCount < 1) {
				return serve(true, "convo has no post");
			}

			let posts = [];
			let i;
			let count = 0;
			for (i = 0; i < results.rowCount; i++) {
				const post = {};
				post.post = results.rows[i]['post'];
				post.created_at = results.rows[i]['created_at'];

				const user_id = results.rows[i]['contributor_id']
				user.getUserName(user_id, (err, res) => {
					if(err){
						return serve(err, res);
					}

					post.contributor = res;
					posts.push(post);
					count++;
					
					if(count >= results.rowCount){
						return serve(err, posts);
					}
				});
			}
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
				return serve(error, "select contributor failed");
			}
			//true if record is found
			authorized = (results.rowCount > 0);
			return serve(error, authorized);
		}
	);
}