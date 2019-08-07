CREATE TABLE IF NOT EXISTS users (
	user_ID serial PRIMARY KEY,
	user_name varchar(20) NOT NULL,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(255) NOT NULL UNIQUE,
	password_hash varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS conversations (
	convo_ID serial PRIMARY KEY,
	author integer REFERENCES users (user_ID) NOT NULL,
	votes integer,
	post_count integer NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
	post_ID serial PRIMARY KEY,
	post text NOT NULL,
	contributor integer REFERENCES users (user_ID) NOT NULL,
	convo_ID integer REFERENCES conversations (convo_ID) NOT NULL,
	post_order integer NOT NULL
);