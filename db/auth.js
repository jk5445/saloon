module.exports = {
	createToken,
	validate
}

const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET
const expIn = process.env.JWT_EXP
const issuer = process.env.JWT_ISSUER


function createToken (user_id, response){
	jwt.sign({sub: user_id, iss: issuer}, secret, {expiresIn: expIn}, (err, token) => {
		if(err){
			console.log(err)
			throw err
		}
		return response.send(token)
	})
}

function validate (request, response, next){
	const token = request.headers['authorization']

	request.body.user_id = null
	if (token == undefined){
		console.log("token undefined")
		return response.sendStatus(401)
	}

	jwt.verify(token, secret, {issuer: issuer}, (err, decoded) => {
		if (err){
			console.log(err)
			return response.sendStatus(401)
		}

		request.body.user_id = decoded['sub']
		return next()
	})
}