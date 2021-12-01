CREATE TABLE users (
  _id bigserial PRIMARY KEY NOT NULL,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  user_name varchar NOT NULL,
  linkedin_url varchar NOT NULL,
  cohort smallint NOT NULL CHECK (cohort > 0),
  location varchar NOT NULL
);

CREATE TABLE posts (
  _id bigserial PRIMARY KEY NOT NULL,
  author varchar NOT NULL,
  title varchar NOT NULL,
  post_content varchar NOT NULL,
  date_created varchar NOT NULL,
  likes integer NOT NULL DEFAULT 0
);​ 

CREATE TABLE hashtags (
  _id bigserial PRIMARY KEY NOT NULL,
  hashtag_title varchar NOT NULL
);

CREATE TABLE comments (
  _id bigserial PRIMARY KEY NOT NULL,
  body varchar NOT NULL,
  date varchar NOT NULL
);

-- Association tables
CREATE TABLE user_posts (
  _id bigserial PRIMARY KEY NOT NULL,
  user_id int REFERENCES users (_id),
  post_id int REFERENCES posts (_id)
);

CREATE TABLE post_hashtags (
  _id bigserial PRIMARY KEY NOT NULL,
  post_id int REFERENCES posts (_id),
  hashtag_id int REFERENCES users (_id)
);

CREATE TABLE post_comments (
  _id bigserial PRIMARY KEY NOT NULL,
  post_id int REFERENCES posts (_id),
  comment_id int REFERENCES comments (_id)
);

CREATE TABLE user_comments (
  _id bigserial PRIMARY KEY NOT NULL,
  user_id bigserial REFERENCES users (_id),
  comment_id bigserial REFERENCES comments (_id)
);