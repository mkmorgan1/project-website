import { Client, Pool } from 'pg';

const postgres = new Client({
  host: process.env.PG_HOST,//'localhost',
  user: process.env.PG_USER,//'matt',
  password: process.env.PG_PASSWORD,
  database: 'website_data'
});
postgres.connect();

export const postPostgres = (date, link, callback) => {
  const postInteraction = `INSERT into interaction (date, link) VALUES ($1, $2)`;
  postgres.query(postInteraction, [date, link],(err, res) => {
    err ? callback(err) : callback(null, res);
  });
}

export const getPostgres = (callback) => {
  const getInteraction = `SELECT * FROM interaction`;
  postgres.query(getInteraction, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
}

export const deletePostgres = (callback) => {
  const deleteInteraction = `
    DELETE FROM interaction
    WHERE date = (
      SELECT date FROM interaction
      ORDER by date DESC
      LIMIT 1
    )`;
  postgres.query(deleteInteraction, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
}

export const getCount = (callback) => {
  const averageQuery =`SELECT link, COUNT(*) FROM interaction GROUP BY link`;
  postgres.query(averageQuery, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
}

/* FOR TESTING */

export const testGetPostgres = (callback) => {
  const testGetQuery = `SELECT * FROM INTERACTION WHERE link = ($1)`;
  postgres.query(testGetQuery, 'test', (err, res) => {
    err ? callback(err) : callback(null, res);
  })
}
