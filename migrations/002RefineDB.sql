ALTER TABLE users ALTER COLUMN password_hash TYPE text;

ALTER TABLE conversations ADD COLUMN title varchar(100) NOT NULL;

ALTER TABLE conversations RENAME COLUMN author to creator;

CREATE TABLE IF NOT EXISTS contributors (
	convo_ID REFERENCES conversations (convo_ID) NOT NULL,
	contributor_ID REFERENCES users (user_ID) NOT NULL,
	status varchar(8) NOT NULL,
	moderator boolean NOT NULL,
	
	CONSTRAINT contributor_key PRIMARY KEY(convo_ID, contributor_ID)
);