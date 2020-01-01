const db = require('./query')
const {authenticate, optAuth} = require('../auth')
const validate = require('validator')

//CONVERSATIONS
//for now users can not edit or delete conversations

module.exports = app => {
    //create conversation
    //auth
    app.post('/api/v1/convo', authenticate, (request, response) => {
        const title = request.body.title
        const post = request.body.post
        const user_id = request.body.user_id

        if(!title || !validate.isLength(title, {min: 5, max: 150})){
            return response.status(400).send({ message: "Title must contain more than 5 characters and less than 150 characters" })
        }

        if(!post || !validate.isLength(post, {min: 10, max: undefined})){
            return response.status(400).send({ message: "Post must contain at least 10 characters" })
        }

        db.createConvo(user_id, title, post, (err, res) => {
            if(err){
                return response.status(400).send({ message: 'Query failed' })
            }
            return response.json(res)
        })
    })

    //get conversation
    app.get('/api/v1/convo/:convo_id', optAuth, (request, response) => {
        const convo_id = request.params.convo_id
        const user_id = request.body.user_id

        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).send({ message: "Invalid convo_id" })
        }

        db.getConvo(convo_id, user_id, (err, res) => {
            if(err){
                return response.status(400).send({ message: 'Query failed' })
            }
            return response.json(res)
        })
    })

    //vote on conversation
    //auth
    app.put('/api/v1/convo/:convo_id/vote/:vote', authenticate, (request, response) => {
        const vote = request.params.vote
        const convo_id = request.params.convo_id
        const user_id = request.body.user_id
        
        if(!validate.isInt(vote + '', {min: -1, max: 1})){
            return response.status(400).send({ message: 'Invalid vote' })
        }
        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).send({ message: 'Invalid convo_id' })
        }

        db.vote(convo_id, user_id, vote, (err, res) => {
            if(err){
                return response.status(400).send({ message: 'Query failed' })
            }

            return response.status(200).send({ message: res })
        })
    })
}