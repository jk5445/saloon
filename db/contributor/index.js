const db = require('./query')
const {authenticate} = require('../auth')
const validate = require('validator')
//CONTRIBUTORS

module.exports = app => {
    //get contributors
    /*
    app.get('/api/v1/contributor/:convo_id', (request, response) => {
        //TODO: implement method
        response.end()
    })
    */

    //invite contributor
    //auth
    app.post('/api/v1/contributor', authenticate, (request, response) => {
        const inviter_id = request.body.user_id
        const contributor_username = request.body.invite
        const convo_id = request.body.convo_id

        if(!contributor_username || !validate.isAlphanumeric(contributor_username)){
            return response.status(400).send({ message: "Invalid contributor username" })
        }
        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).send({ message: "Invalid convo_id" })
        }

        db.authorize(convo_id, inviter_id, (err, res) => {
            if (err) {
                return response.status(401).send({ message: "Authorization failed" })
            }
            else if (res) {
                db.inviteContributor(convo_id, contributor_username, inviter_id, (err, _res) => {
                    if(err) {
                        return response.status(400).send({ message: "Invite failed" })
                    }
                    return response.status(201).send({ message: "Invite success"})
                })
            } else {
                return response.status(401).end("Authorization failed")
            }
        })
    })

    //accept invite
    app.put('/api/v1/contributor', authenticate, (request, response) => {
        const contributor_id = request.body.user_id
        const convo_id = request.body.convo_id

        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).send({ message: "Invalid convo_id" })
        }

        db.acceptInvite(convo_id, contributor_id, (err, res) => {
            if(err) {
                return response.status(400).send({ message: "Accept invite failed" })
            }
            return response.status(200).end()
        })
    })
}