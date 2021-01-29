import { Client, Pool } from 'pg';

const postgres = new Client({
  host: 'localhost',
  user: 'matt',
  database: 'website_data'
});
postgres.connect();

export const postPostgres = (date, link, callback) => {
  const postInteraction = `INSERT into interaction (date, link) VALUES ($1, $2)`;
  postgres.query(postInteraction, [date, link],(err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  })
};

export const getPostgres = (callback) => {
  const getInteraction = `SELECT * FROM interaction`;
  postgres.query(getInteraction, (err, res) => {
    if (err) {
      callback('err');
    } else {
      callback(null, res);
    }
  })
};
