const db = require('./query');
const {authenticate} = require('../auth');
const validate = require('validator');
//CONTRIBUTORS

module.exports = app => {
    //get contributors
    /*
    app.get('/api/v1/contributor/:convo_id', (request, response) => {
        //TODO: implement method
        response.end();
    });
    */

    //invite contributor
    //auth
    app.post('/api/v1/contributor', authenticate, (request, response) => {
        const inviter_id = request.body.user_id;
        const contributor_username = request.body.invite + '';
        const convo_id = request.body.convo_id;

        if(!validate.isAlphanumeric(contributor_username)){
            return response.status(400).send("Invalid contributor username");
        }
        if(!validate.isInt(convo_id + '')){
            return response.status(400).send("Invalid convo_id");
        }

        db.authorize(convo_id, inviter_id, (err, res) => {
            if (err) {
                return response.status(401).send("Authorization failed")
            }
            if(res) {
                db.inviteContributor(convo_id, contributor_username, inviter_id, (err, _res) => {
                    if(err) {
                        return response.status(400).send("Invite failed")
                    }
                    return response.status(201).end();
                });
            } else {
                return response.status(401).end("Authorization failed");
            }
        });
    });

    //accept invite
    app.put('/api/v1/contributor/:convo_id', authenticate, (request, response) => {
        const contributor_id = request.body.user_id;
        const convo_id = request.params.convo_id;

        if(!validate.isInt(convo_id + '')){
            return response.status(400).send("Invalid convo_id");
        }

        db.acceptInvite(convo_id, contributor_id, (err, res) => {
            if(err) {
                return response.status(400).send("Accept invite failed");
            }
            return response.status(200).end();
        });
    });
}