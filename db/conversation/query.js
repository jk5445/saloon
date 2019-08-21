const db = require('../queries');
const {getPosts, createPost} = require('../post/query');

module.exports = {
	createConvo, 
	getConvo 
};

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
//title and post is verified by server
function createConvo (user_id, title, post, serve) {
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

			let query = 'INSERT INTO convo (title, last_post_at, posts, contributors) VALUES ($1, NOW(), 1, 1) RETURNING convo_id'
			client.query(query, [title], (error, results) => {
				if(abort(error)) return serve(error, "Error inserting convo")
				const convo = {}
				convo.convo_id = results.rows[0]['convo_id']
				
				query = 'INSERT INTO contributor (convo_id, contributor_id, inviter_id, accepted_at) VALUES ($1, $2, $2, NOW())'
				client.query(query, [convo.convo_id, user_id], error => {
					if(abort(error)) return serve(error, "Error inserting contributor")

					query = 'INSERT INTO post (convo_id, contributor_id, post) VALUES ($1, $2, $3)'
					client.query(query, [convo.convo_id, user_id, post], error => {
						if(abort(error)) return serve(error, "Error inserting post")

						client.query('COMMIT', err => {
							if(abort(err)) return serve(err, "Error commiting transaction")
							done()
							return serve(null, convo)
						})
					})
				})
			})
		})
	})
}

//returns an object containing all the convo information
//see api documentation for structure
function getConvo (convo_id, serve) {
	db.query(
		'UPDATE convo SET views = views + 1 WHERE convo_id = $1',
		[convo_id],
		(error, _result) => {
			if (error) {
				return serve(error, "update convo views failed");
			}
		}
	);
	const query = "SELECT convo.*, users.user_name " +  
	"FROM convo INNER JOIN contributor ON convo.convo_id=contributor.convo_id " +
	"INNER JOIN users ON contributor.contributor_id=users.user_id " + 
	"WHERE convo.convo_id=$1";
	db.query(
		query,
		[convo_id],
		(error, results) => {
			if (error) {
				return serve(error, "select convo failed");
			}
			const convo = {};
			convo.convo_id = convo_id
			convo.title = results.rows[0]['title'];
			convo.contributorCount = results.rows[0]['contributors'];
			convo.postCount = results.rows[0]['posts'];
			convo.views = results.rows[0]['views'];
			convo.votes = results.rows[0]['votes'];
			convo.commentCount = results.rows[0]['comments'];

			let i;
			convo.contributors = [];
			for(i = 0; i < results.rowCount; i++){
				convo.contributors.push(results.rows[i]['user_name']);
			}

			//get posts
			getPosts(convo_id, (err, res) => {
				if (err) {
					return serve(err, res);
				}
				convo.posts = res;

				return serve (null, convo);
			});
		}
	);
}