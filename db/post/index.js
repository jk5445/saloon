//Posts
//subcomponents of conversations
//for now users can not edit or delete posts

modules.exports = app => {
    //create post
    //auth
    app.post('/apiv1/post', (request, response) => {
        //TODO: implement method
    });

    //get post
    app.get('/apiv1/post/:convo_id/:postNumber', (request, response) => {
        //TODO: implement method
    });
}