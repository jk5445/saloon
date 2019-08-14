const db = require('./query');

//USERS

module.exports = app => {
    //signup
    //info in the body
    app.post('/api/v1/signup', async (request, response) => {
        const user_name = request.body.user_name;
        const first_name = request.body.first_name;
        const last_name = request.body.last_name;
        const email = request.body.email;
        const password = request.body.password;

        let user;
        try {
            user = await db.createUser(user_name, first_name, last_name, email, password);
        } catch(err) {
            throw err;
        }

        response.status(201).json(user);
    });

    //login
    //info in the body
    app.get('/api/v1/login', async (request, response) => {
        const email = request.body.email;
        const password = request.body.password;

        let valid;
        try {
            valid = await db.logIn(email, password);
        } catch(err) {
            throw err;
        }

        if(valid){
            response.status(200).json({loggedIn: true});
        } else {
            response.status(400).json({loggedIn: false});
        }
    });

    //get user info
    //auth
    app.get('/api/v1/user', (request, response) => {
        //TODO: implement method
        response.end();
    });

    //edit user
    //auth
    app.put('/api/v1/user', (request, response) => {
        //TODO: implement method
        response.end();
    });

    //delete user - not necessary
    //auth
    app.delete('/api/v1/user', (request, response) => {
        //TODO: implement method
        response.end();
    });
}