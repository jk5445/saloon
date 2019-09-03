const db = require('../queries');
const {getContributors} = require('../contributor/query')

module.exports = {
    getFeed,
    getFeedByUser,
    getFeedById
    //getFeedByTag
}

function getFeed(batch, serve) {
    const query = "SELECT * FROM convo ORDER BY votes DESC"
    db.query(
        query, [], (error, results) => {
            if(error){
                console.error('select feed failed', error)
                return serve (true, "select feed failed")
            } else if (results.rowCount < 1) {
                console.error('Empty feed')
                return serve (true, 'Empty feed')
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
                        return serve (error, response)
                    }
                    convo.contributors = response
                    convos.push(convo)
                    count++;
                    if(count >= limit){
                        return serve (null, {convos: convos})
                    }
                })
            }
        }
    )
}

function getFeedByUser(username, batch, serve) {
    const query = 'SELECT convo.* FROM users ' +
    'INNER JOIN contributor ON users.user_id = contributor.contributor_id ' + 
    'INNER JOIN convo ON convo.convo_id = contributor.convo_id ' +
    'WHERE users.username = $1 AND contributor.accepted_at IS NOT NULL ' +
    'ORDER BY votes DESC'
    db.query(
        query, [username], (error, results) => {
            if(error){
                console.error('select feed failed', error)
                return serve (true, "select feed failed")
            } else if (results.rowCount < 1) {
                console.error('Feed is empty')
                return serve (true, 'Feed is empty')
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
                        return serve (error, response)
                    }
                    convo.contributors = response
                    convos.push(convo)
                    count++;
                    if(count >= limit){
                        return serve (null, {convos: convos})
                    }
                })
            }
        }
    )
}

function getFeedById(user_id, batch, serve) {
    const query = 'SELECT convo.* FROM contributor ' + 
    'INNER JOIN convo ON convo.convo_id = contributor.convo_id ' +
    'WHERE contributor.contributor_id = $1 AND contributor.accepted_at IS NOT NULL ' +
    'ORDER BY votes DESC'
    db.query(
        query, [user_id], (error, results) => {
            if(error){
                console.error('select feed failed', error)
                return serve (true, "select feed failed")
            } else if (results.rowCount < 1) {
                console.error('Feed is empty')
                return serve (true, 'Feed is empty')
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
                        return serve (error, response)
                    }
                    convo.contributors = response
                    convos.push(convo)
                    count++;
                    if(count >= limit){
                        return serve (null, {convos: convos})
                    }
                })
            }
        }
    )
}

/*
function getFeedByTag(tag, batch, serve){
    return serve (null, null)
}
*/