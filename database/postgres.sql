DROP DATABASE IF EXISTS website_data;
CREATE DATABASE website_data;
-- USE website_data;
\c related_products

CREATE TABLE interaction (
  date VARCHAR (30) NOT NULL,
  link VARCHAR (30) NOT NULL
);

CREATE TABLE stats (
  link VARCHAR (30) NOT NULL,
  count VARCHAR smallint
);

-- psql postgres < database/postgres.sql
-- psql website_data