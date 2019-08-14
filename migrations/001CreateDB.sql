CREATE TABLE IF NOT EXISTS user (
	user_id serial PRIMARY KEY,
	user_name varchar(20) NOT NULL UNIQUE,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(255) NOT NULL UNIQUE,
	password_hash varchar(60) NOT NULL,
);

CREATE TABLE IF NOT EXISTS convo (
	convo_id serial PRIMARY KEY,
	title varchar(150),
	contributors integer DEFAULT 0,
	posts integer DEFAULT 0,
	views integer DEFAULT 0,
	votes integer DEFAULT 0,
	comments integer DEFAULT 0,
	last_post_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post (
	post_id serial PRIMARY KEY,
	convo_id integer REFERENCES convo (convo_id) NOT NULL,
	post text NOT NULL,
	contributor_id integer REFERENCES user (user_id) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contributor (
	convo_id REFERENCES convo (convo_id) NOT NULL,
	contributor_id REFERENCES users (user_id) NOT NULL,
	inviter_id REFERENCES user (user_id) NOT NULL,
	invited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
	accepted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
	
	CONSTRAINT contributor_key PRIMARY KEY(convo_id, contributor_id)
);

CREATE TABLE IF NOT EXISTS comment (
	comment_id serial PRIMARY KEY,
	convo_id integer REFERENCES convo (convo_id),
	prev_id integer REFERENCES comment (comment_id) DEFAULT NULL, 
	comment_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);