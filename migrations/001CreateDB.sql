CREATE TABLE IF NOT EXISTS user (
	user_id serial PRIMARY KEY,
	user_name varchar(20) NOT NULL,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(255) NOT NULL UNIQUE,
	password_hash varchar(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS conversation (
	convo_id serial PRIMARY KEY,
	title varchar(150),
	votes integer,
	post_count integer NOT NULL
);

CREATE TABLE IF NOT EXISTS convo_tally (
	convo_id integer REFERENCES conversations (convo_id) PRIMARY KEY,
	contributors integer NOT NULL,
	posts integer NOT NULL,
	votes integer,
	comment integer
);

CREATE TABLE IF NOT EXISTS post (
	post_id serial PRIMARY KEY,
	post text NOT NULL,
	contributor integer REFERENCES users (user_id) NOT NULL,
	convo_id integer REFERENCES conversations (convo_id) NOT NULL,
	post_order integer NOT NULL
);

CREATE TABLE IF NOT EXISTS contributors (
	convo_id REFERENCES conversations (convo_id) NOT NULL,
	contributor_id REFERENCES users (user_id) NOT NULL,
	accepted BOOLEAN,
	
	CONSTRAINT contributor_key PRIMARY KEY(convo_id, contributor_id)
);