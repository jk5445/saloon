//USERS

modules.exports = app => {
    //signup
    //info in the body
    app.post('/api/signup', (request, response) => {
        //TODO: implement method
    });

    //login
    //info in the body
    app.get('/api/login', (request, response) => {
        //TODO: implement method
    });

    //get user info
    //auth
    app.get('/api/user', (request, response) => {
        //TODO: implement method
    });

    //edit user
    //auth
    app.put('/api/user', (request, response) => {
        //TODO: implement method
    });

    //delete user - not necessary
    //auth
    app.delete('/api/user', (request, response) => {
        //TODO: implement method
    });
}