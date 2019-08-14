const db = require('./query');

//Posts
//subcomponents of conversations
//for now users can not edit or delete posts

module.exports = app => {
    //create post
    //auth
    app.post('/api/v1/post', (request, response) => {
        const user_id = request.body.user_id;
        const convo_id = request.body.convo_id;
        const post = request.body.post;

        let authorized = false;
        db.authorize(convo_id, user_id, (err, res) => {
            if (err) {
                throw err;
            }
            authorized = res;
        });

        if(authorized) {
            db.createPost(convo_id, user_id, post, (err, _res) => {
                if(err) {
                    throw err;
                }
            response.status(201).end();
            });
        } else {
            response.status(400).end();
        }
    });

    //get post
    //secondary priority
    
    app.get('/api/v1/post/:convo_id/:postNumber', (request, response) => {
        //TODO: implement method
        response.end();
    });
    
}