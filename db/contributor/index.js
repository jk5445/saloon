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
        const contributor = request.body.invite
        const convo_id = request.body.convo_id
        let contributors = []
        let invalid = []

        if(typeof contributor === "object" && contributor.length > 0)
            contributors = contributor
        else
            contributors = [contributor]

        for(let i = contributors.length - 1; i >= 0; i--) {
            let c = contributors[i]
            if(!c || !validate.isAlphanumeric(c)){
                invalid.push(c)
                contributors.splice(i, 1)
            }
        }

        if(contributors.length === 0)
            return response.status(400).send({message: "All usernames are invalid" })
        if (!validate.isUUID(convo_id, 4))
            return response.status(400).send({ message: "Invalid convo_id" })
        
        let count = 0
        db.authorize(convo_id, inviter_id, (err, res) => {
            if (err) {
                return response.status(401).send({ message: "Authorization failed" })
            }
            else if (res) {
                for(c in contributors) {
                    db.inviteContributor(convo_id, contributors, inviter_id, (err, _res) => {
                        if(err) {
                            invalid.push(c)
                        }
                        count++
                        if(count >= contributors.length) {
                            if (invalid.length > 0)
                                return response.status(400).send({
                                    message: "Failed to invite contributors",
                                    failures: invalid
                                })
                            return response.status(201).send({ message: "Invite success" })
                        }
                    })
                }
            } else {
                return response.status(401).send({ message: "Authorization failed" })
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
            return response.status(200).send({ message: res})
        })
    })
}