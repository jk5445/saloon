const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = require('../user');
const conversation = require('../conversation');
const post = require('../post');
const contributor = require('../contributor');
const require = require('../comment');

const hostname = (process.argv.length === 3) ? process.argv[2] : '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/api', (request, response) => {
  response.json({ info: 'Saloon API' });
});


//Users
user(app);
//Conversations
conversation(app);
//Posts
post(app);
//Contributors
contributor(app);
//Comments
comment(app);


app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://${hostname}:${port}/`);
});