const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hash = (password, response) => {
	bcrypt.hash(password, saltRounds, (err, hash) => {
		if (err){
			throw error;
		}
		res(false, hash);
	});
}

exports.compare = (password, hash, response) => {
	bcrypt.compare(password, hash, (err, result) => {
		if (err){
			throw err;
		}
		response(false, result);
	});
}