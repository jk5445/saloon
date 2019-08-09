//CONTRIBUTORS

modules.exports = app => {
    //get contributors
    app.get('/api/contributors/:convo_id', (request, response) => {
        //TODO: implement method
    });

    //invite contributor
    //auth
    app.post('/api/contributors/:convo_id/:invite', (request, response) => {
        //TODO: implement method
    });

    //accept invite
    app.put('/api/contributos/:convo_id', (request, response) => {
        //TODO: implement method
    });
}