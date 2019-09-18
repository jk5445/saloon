CREATE TABLE IF NOT EXISTS convo_vote (
    vote_id UUID DEFAULT uuid_generate_v1() PRIMARY KEY,
    convo_id UUID REFERENCES convo (convo_id) NOT NULL,
    user_id UUID REFERENCES users (user_id) NOT NULL,
    vote integer NOT NULL,
    vote_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS comment (
    comment_id UUID DEFAULT uuid_generate_v1() PRIMARY KEY,
    comment text NOT NULL,
    convo_id UUID REFERENCES convo (convo_id) NOT NULL,
    user_id UUID REFERENCES users (user_id) NOT NULL,
    comment_at timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
    votes integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comment_vote (
    vote_id UUID DEFAULT uuid_generate_v1() PRIMARY KEY,
    comment_id UUID REFERENCES comment (comment_id) NOT NULL,
    user_id UUID REFERENCES users (user_id) NOT NULL,
    vote integer NOT NULL,
    vote_at timestamp WITH time zone NOT NULL DEFAULT NOW()
);