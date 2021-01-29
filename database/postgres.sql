DROP DATABASE IF EXISTS website_data;
CREATE DATABASE website_data;
-- USE website_data;
\c website_data

CREATE TABLE interaction (
  date VARCHAR (70) NOT NULL,
  link VARCHAR (30) NOT NULL
);

CREATE TABLE stats (
  link VARCHAR (30) NOT NULL,
  count smallint NOT NULL
);

-- psql postgres < database/postgres.sql
-- psql website_data