const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/auth-info', (req, res) => {
  res.json({ auth: 'fire' });
});

app.get('/', (req, res) => {
  console.log('fires');
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
