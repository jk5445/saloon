//COMMENTS

modules.exports = app => {
    //get comments
    app.get('/api/comments/:convo_id', (request, response) => {
        //TODO: implement method
    });

    //make base comment
    //auth
    app.post('/api/comments/:convo_id', (request, response) => {
        //TODO: implement method
    });

    //comment as reply to prev comment
    //auth
    app.put('/api/comments/:comment_id', (request, response) => {
        //TODO: implement method
    });

    //vote on comment
    //auth
    app.put('/api/comments/vote/:comment_id/:vote', (request, response) => {
        //TODO: implement method
    });
}