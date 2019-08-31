CREATE TABLE IF NOT EXISTS convo_vote (
    vote_id serial PRIMARY KEY,
    convo_id integer REFERENCES convo (convo_id) NOT NULL,
    user_id integer REFERENCES users (user_id) NOT NULL,
    vote integer NOT NULL,
    vote_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS comment (
    comment_id serial PRIMARY KEY,
    comment text NOT NULL,
    convo_id integer REFERENCES convo (convo_id) NOT NULL,
    user_id integer REFERENCES users (user_id) NOT NULL,
    comment_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
    votes integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comment_vote (
    vote_id serial PRIMARY KEY,
    comment_id integer REFERENCES comment (comment_id) NOT NULL,
    user_id integer REFERENCES users (user_id) NOT NULL,
    vote integer NOT NULL,
    vote_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);