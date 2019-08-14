//USERS

modules.exports = app => {
    //signup
    //info in the body
    app.post('/apiv1/signup', (request, response) => {
        //TODO: implement method
    });

    //login
    //info in the body
    app.get('/apiv1/login', (request, response) => {
        //TODO: implement method
    });

    //get user info
    //auth
    app.get('/apiv1/user', (request, response) => {
        //TODO: implement method
    });

    //edit user
    //auth
    app.put('/apiv1/user', (request, response) => {
        //TODO: implement method
    });

    //delete user - not necessary
    //auth
    app.delete('/apiv1/user', (request, response) => {
        //TODO: implement method
    });
}