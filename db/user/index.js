const db = require('./query')
const {createToken, validate} = require('../auth')

//USERS

module.exports = app => {
    //signup
    //info in the body
    app.post('/api/v1/user/signup', (request, response) => {
        const user_name = request.body.user_name;
        const first_name = request.body.first_name;
        const last_name = request.body.last_name;
        const email = request.body.email;
        const password = request.body.password;

        db.createUser(user_name, first_name, last_name, email, password, (err, user_id) => {
            if(err) {
                console.log(res);
                throw err;
            }

            createToken(user_id, response);
        }); 
    });

    //login
    //info in the body
    app.post('/api/v1/user/login', (request, response) => {
        const email = request.body.email;
        const password = request.body.password;

        db.logIn(email, password, (err, user_id) => {
            if(err) {
                console.log(user_id);
                throw err;
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
    app.get('/api/v1/user', validate, (request, response) => {
        const user_id = request.body.user_id;
        db.getUserById(user_id, (err, res) => {
            if(err){
                console.log(res);
                throw err;
            }
            response.status(200).json(res);
        })
    });

    //edit user
    //auth
    app.put('/api/v1/user', validate, (request, response) => {
        //TODO: implement method
        response.end();
    });

    //delete user - not necessary
    //auth
    app.delete('/api/v1/user', validate, (request, response) => {
        //TODO: implement method
        response.end();
    });
}