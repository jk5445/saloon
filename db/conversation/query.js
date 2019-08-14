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
async function createConvo (user_id, title, post) {
	//create convo
	db.query(
		'INSERT INTO  convo (title) VALUES ($1) RETURNING convo_id',
		[title],
		(error, results) => {
			if(error) {
				throw error;
			}
			const convo_id = results.rows[0]['convo_id'];
			
			//add user as contributor
			try {
				await contributor.inviteContributor (convo_id, user_id, user_id);
				await contributor.acceptInvite (convo_id, user_id);
			} catch (error) {
				throw error;
			}

			//create first post
			try {
				await post.createPost(convo_id, user_id, post);
			} catch(error) {
				throw error;
			}

			const convo = {};
			convo.convo_id = convo_id;
			return convo;
		}
	);
}

//returns an object containing all the convo information
//see api documentation for structure
async function getConvo (convo_id) {
	db.query(
		'SELECT * FROM convo WHERE convo_id=$1',
		[convo_id],
		(error, result) => {
			if (error) {
				throw error;
			}
			const obj = {};
			obj.title = result.rows[0]['title'];
			obj.contributorCount = results.rows[0]['contributors'];
			obj.postCount = results.rows[0]['posts'];
			obj.views = results.rows[0]['views'];
			obj.votes = results.rows[0]['votes'];
			obj.commentCount = results.rows[0]['comments'];
			
			//get contributors
			try {
				obj.contributors = await contributor.getContributors(convo_id);
			} catch(error) {
				throw error;
			}

			//get posts
			try {
				obj.posts = await post.getPosts(convo_id, obj.postCount);
			} catch (error) {
				throw error;
			}

			return obj;
		}
	)
}