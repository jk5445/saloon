const db = require('./query')
const {createToken, authenticate} = require('../auth')
const validate =require('validator')

//USERS

module.exports = app => {
    //signup
    //info in the body
    app.post('/api/v1/user/signup', (request, response) => {
        const username = request.body.username + '';
        const first_name = request.body.first_name + '';
        const last_name = request.body.last_name + '';
        const email = request.body.email + '';
        const password = request.body.password + '';

        if(!validate.isLength(username, {min: 5, max: 20})){
            return response.staus(400).send("Username must contain at least 5 characters and at most 20 characters");
        }
        if(!validate.isLength(first_name, {min: 5, max: 20})){
            return response.staus(400).send("First name must contain at least 5 characters and at most 20 characters");
        }
        if(!validate.isLength(last_name, {min: 5, max: 20})){
            return response.staus(400).send("Last name must contain at least 5 characters and at most 20 characters");
        }
        if(!validate.isEmail(email) || !validate.isLength(email, {max: 255})){
            return response.status(404).send("Invalid email");
        }
        if(!validate.isLength(password, {min: 8, max: 50})){
            return response.status(400).send("Password length must be between 8 and 50 characters");
        }


        db.createUser(username, first_name, last_name, email, password, (err, user_id) => {
            if(err) {
                return response.status(400).send('Query failed')
            }

            createToken(user_id, response);
        }); 
    });

    //login
    //info in the body
    app.post('/api/v1/user/login', (request, response) => {
        const email = request.body.email + '';
        const password = request.body.password + '';

        if(!validate.isEmail(email) || !validate.isLength(email, {max: 255})){
            return response.status(400).send("Invalid email");
        }
        if(!validate.isLength(password, {min: 8, max: 50})){
            return response.status(400).send("Password length must be between 8 and 50 characters");
        }

        db.logIn(email, password, (err, user_id) => {
            if(err) {
                return response.status(400).send("Log in failed")
            }

            if(user_id){
                createToken(user_id, response);
            } else {
                response.status(400);
            }
        });
    });

    //get user info
    //auth
    app.get('/api/v1/user', authenticate, (request, response) => {
        const user_id = request.body.user_id
        db.getUserById(user_id, (err, res) => {
            if(err){
                return response.status(400).send("Get user failed")
            }
            return response.status(200).json(res);
        })
    })

    //edit user
    //auth
    /*
    app.put('/api/v1/user', authenticate, (request, response) => {
        //TODO: implement method
        response.end();
    });

    //delete user - not necessary
    //auth
    app.delete('/api/v1/user', authenticate, (request, response) => {
        //TODO: implement method
        response.end();
    });
    */
}