const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hostname = (process.argv.length === 3) ? process.argv[2] : '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://${hostname}:${port}/`);
});