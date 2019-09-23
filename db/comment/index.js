//COMMENTS

modules.exports = app => {
    //get comments
    app.get('/api/v1/comment/:convo_id', (request, response) => {
        //TODO: implement method
    })

    //make base comment
    //auth
    app.post('/api/v1/comment/:convo_id', (request, response) => {
        //TODO: implement method
    })

    //comment as reply to prev comment
    //auth
    app.post('/api/v1/comment/:convo_id/:comment_id', (request, response) => {
        //TODO: implement method
    })

    //vote on comment
    //auth
    app.put('/api/v1/comment/vote/:comment_id/:vote', (request, response) => {
        //TODO: implement method
    })
}