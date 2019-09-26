//All queries will run through the pool connection in this file
//this will enable us to have a central file for db access
//keep your db credentials in a seperate file

const Pool = require('pg').Pool

const pool = new Pool({
  /*
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
  */
  connectionString: "postgres://palkrehiiurigq:4c032c2d34213b26ecd2fbf0a4a3a8a0b4c1321f765ca7a7e9fcb12b206a1668@ec2-174-129-227-80.compute-1.amazonaws.com:5432/dd1r3e1124fevi",
  ssl: true
})

module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback)
  },

  getClient: (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done)
    })
  },

  /*
  end: async () => {
    await pool.end();
    console.log("pool killed")
    return("pool killed")
  }
  */
}