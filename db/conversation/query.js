const db = require('../queries');
const contributor = require('../contributor/query');
const post = require('../post/query');

//to create a conversation a user must provide a title, and a post
//As these requirements are for all conversations, the whole process flows through this method
//however it may be better to split this up at the server level
//title and post is verified by server
const createConvo = async (user_id, title, post) => {
	/*const {title, post} = request.body;
	//user_id should come from token
	const user_id = parseInt(request.params.id);
	*/

	db.query(
	  'INSERT INTO  convo (title) VALUES ($1) RETURNING convo_id',
	  [title],
	  (error, results) => {
	  	if(error) {
	  		throw error;
		}
		const convo_id = results.rows[0]['convo_id'];
		
		//add user as contributor
		db.query(
		  'INSERT INTO contributor (convo_id, contributor_id, accepted_at) VALUES ($1, $2, CURRENT_TIMESTAMP)',
		  [convo_id, user_id],
		  (error, _results) => {
			if (error){
				throw error;
			}

			//create first post
			post.createPost(convo_id, contributor_id, post, (error, _results) => {
				if (error){
					throw error;
				}
				convo = {};
				convo.convo_id = convo_id;
				return convo;
			  }
			);
		  }
		);
	  }
	);
}

//returns an object containing all the convo information via callback
//callback: response(object)
const getConvo = (convo_id, response) => {
	db.query(
		'SELECT * FROM convo WHERE convo_id=$1',
		[convo_id],
		(error, result) => {
			if (error) {
				throw error;
			}
			var obj = {};
			obj.title = result.rows[0]['title'];
			obj.contributorCount = results.rows[0]['contributors'];
			obj.postCount = results.rows[0]['posts'];
			obj.views = results.rows[0]['views'];
			obj.votes = results.rows[0]['votes'];
			obj.commentCount = results.rows[0]['comments'];
			obj.contributors;
			contributor.getContributors(convo_id, 
			  (error, result) => {
				if (error) {
					throw error;
				}
				obj.contributors = result;
				obj.posts;
				post.getPosts(convo_id, obj.postCount, 
				  (error, result) => {
					if (error) {
						throw error;
					}
					obj.posts = result;
					response(obj);
				  }
				);
			  }
			);
		}
	)
}

modules.exports(createConvo, getConvo);