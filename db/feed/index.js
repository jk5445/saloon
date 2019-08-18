const db = require('./query')

module.exports = app => {
    //get feed
    app.get('/api/v1/feed', (request, response) => {
        const batch = (request.body.batch == null) ? 1 : request.body.batch;
        db.getFeed(batch, (err, res) => {
            if(err) {
                console.log(res)
                throw err
            }
            return response.json(res)
        })
    })
}
