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
            let count = i
            const limit = (results.rowCount < i + 10) ? results.rowCount : 10 + i
            for(i; i < limit; i++){
                let convo = results.rows[i]
                convo.contributorCount = convo.contributors

                getContributors(convo.convo_id, (error, response) => {
                    if(error){
                        return serve(error, response)
                    }
                    convo.contributors = response
                    convos.push(convo)
                    count++;
                    if(count >= limit){
                        return serve(null, {convos: convos})
                    }
                })
            }
        }
    )
}

function getFeedByTag(tag, batch, serve){
    return serve(null, null)
}