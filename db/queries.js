//All queries will run through the pool connection in this file
//this will enable us to have a central file for db access
//keep your db credentials in a seperate file

const Pool = require('pg').Pool

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: false}
})

console.log("Pool established")
console.log(pool)

module.exports = {
	query: (text, params, callback) => {
    console.log("DB.query called: ", text)
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