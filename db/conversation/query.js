const db = require('../queries');
const contributor = require('../contributor/query');
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
	//create convo;
	const convo = {};
	db.query(
		'INSERT INTO convo (title) VALUES ($1) RETURNING convo_id',
		[title],
		(error, results) => {
			if(error) {
				return serve(error, "insert convo failed");
			}
			convo.convo_id = results.rows[0]['convo_id'];

			db.query(
				'INSERT INTO contributor (convo_id, contributor_id, inviter_id, accepted_at) VALUES ($1, $2, $2, NOW())',
				[convo.convo_id, user_id],
				(error, _results) => {
					if (error){
						return serve(error, "insert contributor failed");
					}

					//create first post
					createPost (convo.convo_id, user_id, post, (err, res) => {
					if(err) {
						return (err, res);;
					}
		
					return serve (null, convo);
					});

				}
			)
			
			
		}
	);
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

	db.query(
		'SELECT * FROM convo WHERE convo_id=$1',
		[convo_id],
		(error, results) => {
			if (error) {
				return serve(error, "select convo failed");
			}
			const convo = {};
			convo.title = results.rows[0]['title'];
			convo.contributorCount = results.rows[0]['contributors'];
			convo.postCount = results.rows[0]['posts'];
			convo.views = results.rows[0]['views'];
			convo.votes = results.rows[0]['votes'];
			convo.commentCount = results.rows[0]['comments'];
			
			//get contributors
			contributor.getContributors(convo_id, (err, res) => {
				if (err) {
					return serve(err, res);
				}
				convo.contributors = res;

				//get posts
				getPosts(convo_id, (err, res) => {
					if (err) {
						return serve(err, res);
					}
					convo.posts = res;

					return serve (null, convo);
				});
			});
		}
	);
}