const db = require('../queries');
const {getContributors} = require('../contributor/query')

module.exports = {
    getFeed,
    getFeedByTag
}

function getFeed(batch, serve) {
    const query = "SELECT * FROM convo ORDER BY votes DESC"
    db.query(
        query, [], (error, results) => {
            if(error){
                return serve(error, "select feed failed")
            }

            convos = []

            let i = (batch - 1) * 10
            const cap = i + 10
            let count = 0
            const limit = (results.rowCount < i + 10) ? results.rowCount - i : 10
            for(i; i < limit; i++){
                const convo = {}
                const record = results.rows[i]
                convo.convo_id = record['convo_id']
                convo.title = record['title']
                convo.views = record['views']
                convo.votes = record['votes']
                convo.comments = record['comments']
                convo.posts = record['posts']
                convo.last_post_at = record['last_post_at']

                getContributors(convo.convo_id, (error, response) => {
                    if(error){
                        return serve(error, response)
                    }
                    convo.contributors = response
                    convos.push(convo)
                    count++;
                    if(count >= limit){
                        const res = {}
                        res.convos = convos
                        return serve(null, res)
                    }
                })
            }
        }
    )
}

function getFeedByTag(tag, batch, serve){
    return serve(null, null)
}