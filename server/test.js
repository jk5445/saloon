const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kishk',
  host: 'localhost',
  database: 'saloon',
  password: 'juki2345',
  port: 5432,
});


const create = () => {
	console.log("create");
  pool.query('INSERT INTO users (user_name, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING user_ID',
	["sheep", "first", "last", "test@email.com", "xxhashxx"],
	(error, results) => {
		if (error){
			throw error;
		}
		console.log(results.rows[0]["user_id"]);
		clear();
	}
);
}

const clear = () => {
  pool.query("DELETE FROM users WHERE user_name = $1", ["sheep"], (err, res)=> {
	if (err){
		throw err;
	}
	console.log("deleted");
	select();
});
}


create();


const select = () => {console.log("querying");
pool.query('SELECT * FROM users',
	(err, res) => {
		if(err){
			console.log(err);
			throw err;
		}
		console.log(res.rowCount);
		console.log("query completed");
		end();
	}
);
}



const end = () => {console.log("killing pool");
pool.end();
console.log("pool has been killed");}