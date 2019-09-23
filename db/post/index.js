const db = require('./query')
const {authenticate} = require('../auth')
const validate = require('validator')

//Posts
//subcomponents of conversations
//for now users can not edit or delete posts

module.exports = app => {
    //create post
    //auth
    app.post('/api/v1/post', authenticate, (request, response) => {
        const user_id = request.body.user_id
        const convo_id = request.body.convo_id
        const post = request.body.post

        if(!convo_id || !validate.isUUID(convo_id, 4)) {
            return response.status(400).send({ message: "Invalid convo_id" })
        }
        if(!post || !validate.isLength(post, {min: 10, max: undefined})) {
            return response.status(400).send({ message: "Post must contain at least 10 characters" })
        }
        
        db.authorize(convo_id, user_id, (err, res) => {
            if (err) {
                return response.status(400).send({ message: "Post failed" })
            }
            else if(res) {
                db.createPost(convo_id, user_id, post, (err, _res) => {
                    if(err) {
                        return response.status(400).send({ message: "Post failed" })
                    }
                    return response.status(201).end("Post failed")
                })
            } else {
                return response.status(400).end("Post failed")
            }
        })
    })

    //get post
    //secondary priority
    /*
    app.get('/api/v1/post/:convo_id/:postNumber', (request, response) => {
        //TODO: implement method
        response.end()
    })
    */
}