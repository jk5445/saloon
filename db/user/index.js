const db = require('./query')
const {createToken, authenticate} = require('../auth')
const validate =require('validator')

//USERS

module.exports = app => {
    //signup
    //info in the body
    app.post('/api/v1/user/signup', (request, response) => {
        const username = request.body.username
        const first_name = request.body.first_name
        const last_name = request.body.last_name
        const email = request.body.email
        const password = request.body.password

        if(!username || !validate.isLength(username, {min: 5, max: 20})){
            return response.status(400).send({ message: "Username must contain at least 5 characters and at most 20 characters" })
        }
        if(!first_name || !validate.isLength(first_name, {min: 2, max: 20})){
            return response.status(400).send({ message: "First name must contain at least 2 characters and at most 20 characters" })
        }
        if(!last_name || !validate.isLength(last_name, {min: 2, max: 20})){

            return response.status(400).send({ message: "Last name must contain at least 2 characters and at most 20 characters" })
        }
        if(!email || !validate.isEmail(email) || !validate.isLength(email, {max: 255})){
            return response.status(404).send({ message: "Invalid email" })
        }
        if(!password || !validate.isLength(password, {min: 8, max: 50})){
            return response.status(400).send({ message: "Password length must be between 8 and 50 characters" })
        }

        db.createUser(username, first_name, last_name, email, password, (err, user_id) => {
            if(err) {
                return response.status(400).send({ message: 'Query failed' })
            }

            createToken(user_id, (err, res) => {
                if(!err)
                    response.status(201).send({ token: res })
                else 
                    response.status(400).send({ message: res })
            })
        }) 
    })

    //login
    //info in the body
    app.post('/api/v1/user/login', (request, response) => {
        const email = request.body.email
        const password = request.body.password

        if(!email || !validate.isEmail(email) || !validate.isLength(email, {max: 255})){
            return response.status(400).send({ message: "Invalid email" })
        }
        if(!password || !validate.isLength(password, {min: 8, max: 50})){
            return response.status(400).send({ message: "Password length must be between 8 and 50 characters" })
        }

        db.logIn(email, password, (err, user) => {
            if(err) {
                response.status(400).send({ message: "Log in failed" })
            } else if (user) {
                createToken(user.id, (err, res) => {
                    if(!err)
                        response.status(200).send({
                            token: res,
                            username: user.username,
                            first: user.first_name,
                            last: user.last_name
                        })
                    else
                        response.status(400).send({ message: res })
                })
            } else {
                response.status(400).end()
            }
        })
    })

    //get user info
    //auth
    app.get('/api/v1/user', authenticate, (request, response) => {
        const user_id = request.body.user_id
        db.getUserById(user_id, (err, res) => {
            if(err){
                return response.status(400).send({ message: "Get user failed" })
            }
            return response.status(200).json(res)
        })
    })

    //edit user
    //auth
    /*
    app.put('/api/v1/user', authenticate, (request, response) => {
        //TODO: implement method
        response.end()
    })

    //delete user - not necessary
    //auth
    app.delete('/api/v1/user', authenticate, (request, response) => {
        //TODO: implement method
        response.end()
    })
    */
}