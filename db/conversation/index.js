const db = require('./query');
const {validate} = require('../auth');

//CONVERSATIONS
//for now users can not edit or delete conversations

module.exports = app => {
    //create conversation
    //auth
    app.post('/api/v1/convo', validate, (request, response) => {
        const title = request.body.title;
        const post = request.body.post;
        const user_id = request.body.user_id;

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
    app.put('/api/v1/convo/vote/:convo_id/:vote', validate, (request, response) => {
        //TODO: implement method
        response.end();
    });
}