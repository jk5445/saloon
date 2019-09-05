const jwt = require('jsonwebtoken')
const {isJWT} = require('validator')

const secret = process.env.JWT_SECRET
const expIn = process.env.JWT_EXP
const issuer = process.env.JWT_ISSUER

module.exports = {
	createToken,
	authenticate,
	optAuth
}


function createToken (user_id, response){
	console.log(secret)
	jwt.sign({sub: user_id, iss: issuer}, secret, {expiresIn: expIn}, (err, token) => {
		if(err){
			console.log("Error creating token", err)
			return response.status(400).send("Error creating token")
		}
		return response.send(token)
	})
}

function authenticate (request, response, next){
	const token = request.headers['authorization']

	if(!isJWT(token)){
		return response.sendStatus(401)
	}

	request.body.user_id = null
	if (token == undefined){
		return response.sendStatus(401)
	}

	jwt.verify(token, secret, {issuer: issuer}, (err, decoded) => {
		if (err){
			return response.sendStatus(401)
		}

		request.body.user_id = decoded['sub']
		return next()
	})
}

function optAuth (request, response, next){
	const token = request.headers['authorization']
	request.body.user_id = null

	if(token == undefined || !isJWT(token)){
		return next()
	}

	jwt.verify(token, secret, {issuer: issuer}, (err, decoded) => {
		if (err) return next()
		
		request.body.user_id = decoded['sub']
		return next()
	})
}