
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import path from 'path';
import fs from 'fs';

// create new express app and save it as "app"
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/data', (req,res) => {
  res.send('data get');
});
app.post('/data', (req, res) => {
  res.send('data post');
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



