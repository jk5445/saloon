const db = require('./query')
const {authenticate} = require('../auth')
const validate = require('validator')

//COMMENTS

module.exports = app => {
    //get comments
    app.get('/api/v1/comment/:convo_id', (request, response) => {
        const convo_id = request.params.convo_id

        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).json({ message: "Invalid convo_id" })
        }

        db.getComment(convo_id, (err, res) => {
            if(err)
                return response.status(400).json({ message: res })
            return response.status(200).json(res)
        })
    })

    //make base comment
    //auth
    app.post('/api/v1/comment/:convo_id', authenticate, (request, response) => {
        const user_id = request.body.user_id
        const convo_id = request.params.convo_id
        const comment = request.body.comment

        if(!validate.isUUID(convo_id, 4)) {
            return response.status(400).json({ message: "Invalid convo_id" })
        }

        if(!comment || !validate.isLength(comment, {min: 1, max: undefined})) {
            return response.status(400).send({ message: "Comment must contain at least 1 characters" })
        }

        db.createComment(convo_id, user_id, comment, (err, res) => {
            if(err)
                return response.status(400).json({ message: res })
            return response.status(201).json({ message: res })
        })
    })

    //comment as reply to prev comment
    //auth
    app.post('/api/v1/comment/:convo_id/:comment_id', (request, response) => {
        //TODO: implement method
        response.json({ message: "not yet implemented"})
    })

    //vote on comment
    //auth
    app.put('/api/v1/comment/vote/:comment_id/:vote', (request, response) => {
        //TODO: implement method
        response.json({ message: "not yet implemented"})
    })
}