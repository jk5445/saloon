//Posts
//subcomponents of conversations
//for now users can not edit or delete posts

modules.exports = app => {
    //create post
    //auth
    app.post('/api/post', (request, response) => {
        //TODO: implement method
    });

    //get post
    app.get('/api/post/:convo_ID/:postNumber', (request, response) => {
        //TODO: implement method
    });
}