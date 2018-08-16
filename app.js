require('dotenv').config();

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const { v4 } = require('uuid');

const app = express();
const state = 'fireman';

const getToken = async ({ state, code }) => {
  const { AUTH_URL, CLIENT_ID, CLIENT_SECRET } = process.env;
  const url = `${AUTH_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=http://localhost:3500/validate&code=${code}&state=${state}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/auth-info', (req, res) => {
  // state = v4();
  res.json({ auth: 'fire' });
});

app.get('/validate', async (req, res) => {
  const { state: returnedState, code } = req.query;

  if (!state || !code) res.status(400).json({ message: 'Incorrect request' });
  if (returnedState !== state) res.status(400).json({ message: 'Invalid credentails or request' });

  const { access_token } = await getToken({ state: returnedState, code });
  res.redirect(`/?access=${access_token}`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
