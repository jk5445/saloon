const db = require('./query');

//CONVERSATIONS
//for now users can not edit or delete conversations

module.exports = app => {
    //create conversation
    //auth
    app.post('/api/v1/convo', async (request, response) => {
        const title = request.body.title;
        const post = request.body.first_post;
        const user_id = request.body.user_id;

        let convo;
        try {
            convo = await db.createConvo(user_id, title, post);
        } catch (err) {
            throw err;
        }

        response.json(convo);
    });

    //get conversation
    app.get('/api/v1/convo/:convo_id', async (request, response) => {
        const convo_id = request.params.convo_id;
        
        let convo;
        try{
            convo = await db.getConvo(convo_id);
        } catch (err) {
            throw err;
        }

        response.json(convo);
    });

    //vote on conversation
    //auth
    app.put('/api/v1/convo/vote/:convo_id/:vote', (request, response) => {
        //TODO: implement method
        response.end();
    });
}