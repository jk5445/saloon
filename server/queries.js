//All queries will run through the pool connection in this file
//this will enable us to have a central file for db access
//keep your db credentials in a seperate file

require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback);
	},
}