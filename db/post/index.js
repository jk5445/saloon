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
        const user_id = request.body.user_id;
        const convo_id = request.body.convo_id;
        const post = request.body.post + '';

        if(!validate.isInt(convo_id + '')) {
            return response.status(400).send("Invalid convo_id");
        }
        if(!validate.isLength(post, {min: 10, max: undefined})) {
            return response.status(400).send("Post must contain at least 10 characters");
        }
        
        db.authorize(convo_id, user_id, (err, res) => {
            if (err) {
                return response.status(400).send("Post failed");
            }
            else if(res) {
                db.createPost(convo_id, user_id, post, (err, _res) => {
                    if(err) {
                        return response.status(400).send("Post failed");
                    }
                    return response.status(201).end("Post failed");
                });
            } else {
                return response.status(400).end("Post failed");
            }
        });
    });

    //get post
    //secondary priority
    /*
    app.get('/api/v1/post/:convo_id/:postNumber', (request, response) => {
        //TODO: implement method
        response.end();
    });
    */
}