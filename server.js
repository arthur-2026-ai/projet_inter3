const express = require('express');
const basicAuth = require('basic-auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/route', (req, res) => {
  res.send('Hello, world!');
});

app.get('/secretroute', (req, res) => {
  const credentials = basicAuth(req);
  if (
    credentials &&
    credentials.name === process.env.USERNAME &&
    credentials.pass === process.env.PASSWORD
  ) {
    res.send(process.env.SECRET_MESSAGE);
  } else {
    res.status(401).send('Unauthorized: Bad credentials');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
