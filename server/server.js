require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const user = require('../db/user');
const conversation = require('../db/conversation');
const post = require('../db/post');
const contributor = require('../db/contributor');
//const comment = require('../db/comment');

const hostname = (process.argv.length === 3) ? process.argv[2] : '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/api/v1', (_request, response) => {
  response.json({ info: 'Saloon API V1' });
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
//comment(app);


const db = require('../db/queries');
app.get('/pool/end', async (request, response) => {
    const end = await db.end();
    response.json(end);
});


app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://${hostname}:${port}/`);
});