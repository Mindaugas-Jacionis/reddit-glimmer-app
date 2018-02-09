const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const apiServerHost = 'https://reddit.com';

const port = process.env.PORT || 4000;

app.use(cors());

app.use('/', function(req, res) {
  const url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`Find the server at: http://localhost:${port}/`);
});
