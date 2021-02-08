import express from 'express';
// import httpolyglot from 'httpolyglot';
import https from 'https';
import http from 'http';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import { getPostgres, postPostgres, deletePostgres } from '../database/index.js';

// create new express app and save it as "app"
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', (req,res) => {
  getPostgres((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  })
});

app.post('/data', (req, res) => {
  let d = new Date(Date.now());
  const date = d.toString();
  const link = req.query.link;
  postPostgres(date, link, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.status(200).end();
    }
  });
})

app.delete('/data', (req, res) => {
  deletePostgres((err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.status(200).send(`DELETED ${result.rowCount} rows`);
    }
  })
})

// Listen both http & https ports
http.createServer(app).listen(80, () => console.log('HTTP Server running on port 80'));

/*
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/fullchain.pem'),
}
https.createServer(options, app).listen(443, () => console.log('HTTPS Server running on port 443'));
*/






