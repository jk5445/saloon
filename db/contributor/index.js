//CONTRIBUTORS

modules.exports = app => {
    //get contributors
    app.get('/apiv1/contributor/:convo_id', (request, response) => {
        //TODO: implement method
    });

    //invite contributor
    //auth
    app.post('/apiv1/contributor/:convo_id/:invite', (request, response) => {
        //TODO: implement method
    });

    //accept invite
    app.put('/apiv1/contributor/:convo_id', (request, response) => {
        //TODO: implement method
    });
}