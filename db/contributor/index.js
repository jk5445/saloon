//CONTRIBUTORS

modules.exports = app => {
    //get contributors
    app.get('/api/contributors/:convo_ID', (request, response) => {
        //TODO: implement method
    });

    //invite contributor
    //auth
    app.post('/api/contributors/:convo_ID/:invite', (request, response) => {
        //TODO: implement method
    });

    //accept invite
    app.put('/api/contributos/:convo_ID', (request, response) => {
        //TODO: implement method
    });
}