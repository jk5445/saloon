const db = require('./query');
const {authenticate} = require('../auth');
const validate = require('validator');

//CONVERSATIONS
//for now users can not edit or delete conversations

module.exports = app => {
    //create conversation
    //auth
    app.post('/api/v1/convo', authenticate, (request, response) => {
        const title = request.body.title;
        const post = request.body.post;
        const user_id = request.body.user_id;

        if(!validate.isLength(title, {min: 5, max: 150})){
            return response.status(400).send("Title must contain more than 5 characters and less than 150 characters");
        }

        if(!validate.isLength(post, {min: 10, max: undefined})){
            return response.status(400).send("Post must contain at least 10 characters");
        }

        db.createConvo(user_id, title, post, (err, res) => {
            if(err){
                console.log(res);
                throw(err);
            } else if (res){
                return response.json(res);
            }
        });
    });

    //get conversation
    app.get('/api/v1/convo/:convo_id', (request, response) => {
        const convo_id = request.params.convo_id;

        if(!validate.isInt(convo_id + '')){
            return response.status(400).send("Invalid convo_id")
        }

        db.getConvo(convo_id, (err, res) => {
            if(err){
                console.log(res);
                throw err;
            }
            return response.json(res);
        });
    });

    //vote on conversation
    //auth
    app.put('/api/v1/convo/vote/:convo_id/:vote', authenticate, (request, response) => {
        //TODO: implement method
        response.end();
    });
}