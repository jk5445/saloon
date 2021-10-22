const db = require('./query')
const validate = require('validator')

module.exports = app => {
    //get feed
    app.get('/api/v1/feed', (request, response) => {

        let batch = request.body.batch || 1
        const size = 50

        if(!validate.isInt(batch + '')){
            batch = 1
        }
        if (batch < 0) batch = 0 - batch
        else if (batch == 0) batch = 1

        db.getFeed(batch, size, (err, res) => {
            if(err) {
                return response.status(400).send({ message: res })
            }
            return response.json(res)
        })
    })

    //get feed by username
    app.get('/api/v1/feed/:username', (request, response) => {
        let batch = request.body.batch || 1
        const username = request.params.username
        const size = 50

        if(!validate.isInt(batch + '')){
            batch = 1
        }
        if(!username || !validate.isAlphanumeric(username)){
            return response.status(400).send({ message: 'invalid username' })
        }

        db.getFeedByUser(username, batch, size, (err, res) => {
            if(err) {
                return response.status(400).send({ message: res })
            }
            return response.json(res)
        })
    })

    /*
    app.get('/api/v1/feed/:tag', (request, response) => {
        let batch = request.body.batch || 1

        if(!validate.isInt(batch + '')){
            batch = 1
        }
        
        db.getFeed(batch, (err, res) => {
            if(err) {
                console.log(res)
                throw err
            }
            return response.json(res)
        })
    })
    */
}
