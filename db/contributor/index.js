const db = require('./query');
//CONTRIBUTORS

module.exports = app => {
    //get contributors
    app.get('/api/v1/contributor/:convo_id', (request, response) => {
        //TODO: implement method
        response.end();
    });

    //invite contributor
    //auth
    app.post('/api/v1/contributor', validate, (request, response) => {
        const inviter_id = request.body.user_id;
        const contributor_id = request.body.invite;
        const convo_id = request.body.convo_id;

        db.authorize(convo_id, inviter_id, (err, res) => {
            if (err){
                console.log("ERROR LOG: " + res);
                throw err;
            }
            if(res) {
                db.inviteContributor(convo_id, contributor_id, inviter_id, (err, _res) => {
                    if(err) {
                        console.log("ERROR LOG: " + res);
                        throw err;
                    }
                    response.status(201).end();
                });
            } else {
                response.status(400).end();
            }
        });
    });

    //accept invite
    app.put('/api/v1/contributor/:convo_id', validate, (request, response) => {
        const contributor_id = request.body.user_id;
        const convo_id = request.params.convo_id;

        db.acceptInvite(convo_id, contributor_id, (err, res) => {
            if(err) {
                console.log("ERROR LOG: " + res);
                throw err;
            }
            response.status(200).end();
        });
    });
}