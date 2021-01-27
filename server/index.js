import express from 'express';
import path from 'path';

const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

/* DEPLOYMENT SERVER SSL

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

// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/privkey.pem'), //'./generated-private-key.pem')),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.matthewkerrymorgan.com/fullchain.pem'), //'./generated-csr.pem')),
}, app);

*/
