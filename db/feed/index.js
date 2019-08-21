const db = require('./query')
const validate = require('validator')

module.exports = app => {
    //get feed
    app.get('/api/v1/feed', (request, response) => {
        let batch = request.body.batch || 1

        if(!validate.isInt(batch + '')){
            batch = 1
        }

        db.getFeed(batch, (err, res) => {
            if(err) {
                console.log(err)
                return response.status(400).send(res)
            }
            return response.json(res)
        })
    })

    /*
    app.get('/api/v1/feed/:tag', (request, response) => {
        let batch = request.body.batch || 1;

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
