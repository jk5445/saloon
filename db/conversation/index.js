//CONVERSATIONS
//for now users can not edit or delete conversations

modules.exports = app => {
    //create conversation
    //auth
    app.post('/api/convo', (request, response) => {
        //TODO: implement method
    });

    //get conversation
    app.get('/api/convo/:convo_ID', (request, response) => {
        //TODO: implement method
    });

    //vote on conversation
    //auth
    app.put('/api/convo/vote/:convo_ID', (request, response) => {
        //TODO: implement method
    });
}