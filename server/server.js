const dotenv = require('dotenv').config()
const aws = require('aws-sdk')
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const user = require('../db/user')
const conversation = require('../db/conversation')
const post = require('../db/post')
const contributor = require('../db/contributor')
const feed = require('../db/feed')
const comment = require('../db/comment')

const hostname = (process.argv.length === 3) ? process.argv[2] : '0.0.0.0'
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.use((request, response, next) => {
  let body = request.body

  next()
})

app.use(cors({
  allowedHeaders: ['Authorization', 'Content-Type']
}))

app.get('/api/v1', (_request, response) => {
  response.json({ info: 'Saloon API V1' })
})

app.use(express.static(path.join(__dirname, '../react-build')));
//Users
user(app)
//Conversations
conversation(app)
//Posts
post(app)
//Contributors
contributor(app)
//Feed
feed(app)
//Comments
comment(app)

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, '../react-build/index.html')))

app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://${hostname}:${port}/`)
})