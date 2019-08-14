//CONVERSATIONS
//for now users can not edit or delete conversations

modules.exports = app => {
    //create conversation
    //auth
    app.post('/apiv1/convo', (request, response) => {
        //TODO: implement method
    });

    //get conversation
    app.get('/apiv1/convo/:convo_id', (request, response) => {
        //TODO: implement method
    });

    //vote on conversation
    //auth
    app.put('/apiv1/convo/vote/:convo_id/:vote', (request, response) => {
        //TODO: implement method
    });
}