CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
	user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	username varchar(20) NOT NULL UNIQUE,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(255) NOT NULL UNIQUE,
	password_hash varchar(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS convo (
	convo_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	title varchar(150),
	contributors integer DEFAULT 0,
	posts integer DEFAULT 0,
	views integer DEFAULT 0,
	votes integer DEFAULT 0,
	comments integer DEFAULT 0,
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
	last_post_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post (
	post_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	convo_id UUID REFERENCES convo (convo_id) NOT NULL,
	post text NOT NULL,
	contributor_id UUID REFERENCES users (user_id) NOT NULL,
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contributor (
	convo_id UUID REFERENCES convo (convo_id) NOT NULL,
	contributor_id UUID REFERENCES users (user_id) NOT NULL,
	inviter_id UUID REFERENCES users (user_id) NOT NULL,
	invited_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
	accepted_at timestamp WITH TIME ZONE DEFAULT NULL,
	
	CONSTRAINT contributor_key PRIMARY KEY(convo_id, contributor_id)
);