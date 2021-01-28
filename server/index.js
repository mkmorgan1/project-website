import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import { getPostgres, postPostgres } from '../database/index.js';

// create new express app and save it as "app"
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', (req,res) => {

  // if (!Date.now) {
  //   Date.now = function() { res.send( new Date().getTime()) }
  //   Date.now();
  // } else {
  //   res.send(`data get ${Date.now()}`);
  // }
});
app.post('/data', (req, res) => {
  let d = new Date(Date.now());
  const date = d.toString();
  const link = req.query.link;
  console.log(`${link} ${date}`)
  res.end();

})

// Listen both http & https ports
const httpServer = http.createServer(app);

/*
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/privkey.pem'), //'./generated-private-key.pem')),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/fullchain.pem'), //'./generated-csr.pem')),
}, app);

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});

*/

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});



