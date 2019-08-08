const db = require('../server/queries');

const inviteContributor = (convo_ID, contributor, status, moderator, response) => {
	db.query(
	  'INSERT INTO contributors (convo_ID, contributor_ID, status, moderator) VALUES ($1, $2, $3, $4) RETURNING contributor_key',
	  [convo_ID, contributor, status, moderator],
	  (error, results) => {
	  	if(error){
	  		throw error;
	  	}
	  	response.status(201).send(results.rows[0]);
	  }
	);
}

const inviteContributor = (request, response) => {
	const {convo_ID, contributor, status, moderator} = request.body;
	const inviter_ID = parseInt(request.params.id);

	//if inviter is in conversation
	db.query(
	  'SELECT 1 FROM contributors WHERE convo_ID = $1 AND inviter_ID = $2',
	  [convo_ID, inviter_ID],
	  (error, results) => {
	  	if (error){
	  		throw error;
	  	}
	  	if (response.rowCount > 0){
	  		inviteContributor(convo_ID, contributor, status, moderator, response);
	  	}
	  	else{
	  		response.status(401).send(`User is not authorized to invite contributor`);
	  	}
	  }
	);
}