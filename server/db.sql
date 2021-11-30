SET client_encoding = 'UTF8';
SELECT pg_catalog.set_config('search_path', '', false); 
-- SET check_function_bodies = false;
-- SET row_security = off;
​
CREATE TABLE users (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "user_name" varchar NOT NULL,
  "linkedin_url" varchar NOT NULL,
  "cohort" smallint NOT NULL CHECK (cohort > 0),
  "location" varchar NOT NULL,
); 
​
CREATE TABLE posts (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "author" varchar NOT NULL,
  "title" varchar NOT NULL,
  "post_content" varchar NOT NULL,
  "author" varchar NOT NULL,
  "date_created" varchar NOT NULL,
  "likes" integer NOT NULL CHECK (likes > 0),
);​
​
CREATE TABLE hashtags (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "hashtag_title" varchar NOT NULL,
);

CREATE TABLE comments (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "body" varchar NOT NULL,
  "user" bigserial FOREIGN KEY NOT NULL,
  "date" varchar NOT NULL,
);

-- Association tables
CREATE TABLE user_posts (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "user_id" bigserial REFERENCES users ("_id"),
  "post_id" bigserial REFERENCES posts ("_id"),
);

CREATE TABLE post_hashtags (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "post_id" bigserial REFERENCES posts ("_id"),
  "hashtag_id" bigserial REFERENCES users ("_id"),
);

​CREATE TABLE post_comments (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "post_id" bigserial REFERENCES posts ("_id"),
  "comment_id" bigserial REFERENCES comments ("_id"),
);

CREATE TABLE user_comments (
  "_id" bigserial PRIMARY KEY NOT NULL,
  "user_id" bigserial REFERENCES users ("_id"),
  "comment_id" bigserial REFERENCES comments ("_id"),
);

INSERT INTO users VALUES (1, 'Cole', 'Smith', 'aCoder', 'https://linkedin.com/u/willsentanace', 46, 'Madagascar');
​
-- Remove all below here
-- INSERT INTO ingredients VALUES (1, 'Bun', NULL);
-- INSERT INTO ingredients VALUES (2, 'Patty', 2);
-- INSERT INTO ingredients VALUES (3, 'Lettuce', NULL);
-- INSERT INTO ingredients VALUES (4, 'American Cheese', NULL);
-- INSERT INTO ingredients VALUES (5, 'raw Beef meat', NULL);
-- INSERT INTO ingredients VALUES (6, 'salt', NULL);
-- ​
-- INSERT INTO recipes VALUES (1, 'double cheeseburger', 1, '1. get ingredients\n 2. put it together');
-- INSERT INTO recipes VALUES (2, 'Patty', 1, 'mixed in the meat and salt then grill');
-- ​
-- INSERT INTO makings VALUES (1, 1, 1, 1, 'item');
-- INSERT INTO makings VALUES (2, 1, 2, 2, 'item');
-- INSERT INTO makings VALUES (3, 1, 3, 1, 'item');
-- INSERT INTO makings VALUES (4, 1, 4, 1, 'slice');
-- ​
-- INSERT INTO makings VALUES (5, 2, 5, 10, 'grams');
-- INSERT INTO makings VALUES (6, 2, 6, 1, 'tablespoon');
-- ​
-- INSERT INTO likes VALUES (1, 1, 1);
-- ​
-- ​
-- select setval('users__id_seq', 2, false);
-- select setval('ingredients__id_seq', 7, false);
-- select setval('recipes__id_seq', 3, false);
-- select setval('makings__id_seq', 7, false);
-- select setval('likes__id_seq', 2, false);