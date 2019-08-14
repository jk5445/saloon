const db = require('../queries');
const contributor = require('../contributor/query');
const post = require('../post/query');

module.exports = {
	createConvo, 
	getConvo 
};

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
//title and post is verified by server
function createConvo (user_id, title, post, serve) {
	//create convo
	db.query(
		'INSERT INTO  convo (title) VALUES ($1) RETURNING convo_id',
		[title],
		(error, results) => {
			if(error) {
				serve(error, null);
			}
			const convo_id = results.rows[0]['convo_id'];
			
			//add user as contributor
			contributor.inviteContributor (convo_id, user_id, user_id, (err, _res) => {
				if(err) {
					serve(error, null);
				}
			});
			contributor.acceptInvite (convo_id, user_id, (err, _res) => {
				if(err) {
					serve(error, null);
				}
			});

			//create first post
			post.createPost(convo_id, user_id, post, (err, _res) => {
				if(err) {
					serve(error, null);
				}
			});

			const convo = {};
			convo.convo_id = convo_id;
			serve (null, convo);
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
				serve(error, null);
			}
		}
	);

	db.query(
		'SELECT * FROM convo WHERE convo_id=$1',
		[convo_id],
		(error, result) => {
			if (error) {
				serve(error, null);
			}
			const convo = {};
			convo.title = result.rows[0]['title'];
			convo.contributorCount = results.rows[0]['contributors'];
			convo.postCount = results.rows[0]['posts'];
			convo.views = results.rows[0]['views'];
			convo.votes = results.rows[0]['votes'];
			convo.commentCount = results.rows[0]['comments'];
			
			//get contributors
			contributor.getContributors(convo_id, (err, res) => {
				if (error) {
					serve(error, null);
				}
				convo.contributors = res;
			});

			//get posts
			post.getPosts(convo_id, (err, res) => {
				if (error) {
					serve(error, null);
				}
				convo.posts = res;
			});

			serve (null, convo);
		}
	)
}