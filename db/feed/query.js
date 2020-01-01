const db = require('../queries')
const {getContributors} = require('../contributor/query')
const moment = require('moment')

module.exports = {
    getFeed,
    getFeedByUser,
    getFeedById,
    getInviteFeed
    //getFeedByTag
}

function getFeed(batch, serve) {
    const query = 'SELECT convo.*, post.post, post.post_id FROM convo ' + 
    'INNER JOIN post ON convo.first_post = post.post_id ' +
    'ORDER BY votes DESC'
    db.query(query, [], (error, results) => {
        processFeed(error, results, batch, serve)
    })
}

function getFeedByUser(username, batch, serve) {
    const query = 'SELECT convo.*, post.post, post.post_id FROM users ' +
    'INNER JOIN contributor ON users.user_id = contributor.contributor_id ' + 
    'INNER JOIN convo ON convo.convo_id = contributor.convo_id ' +
    'INNER JOIN post ON convo.first_post = post.post_id ' +
    'WHERE users.username = $1 AND contributor.accepted_at IS NOT NULL ' +
    'ORDER BY votes DESC'
    db.query(query, [username], (error, results) => {
        processFeed(error, results, batch, serve)
    })
}

function getFeedById(user_id, batch, serve) {
    const query = 'SELECT convo.*, post.post, post.post_id FROM contributor ' +
    'INNER JOIN convo ON convo.convo_id = contributor.convo_id ' + 
    'INNER JOIN post ON convo.first_post = post.post_id ' +
    'WHERE contributor.contributor_id = $1 AND contributor.accepted_at IS NOT NULL ' +
    'ORDER BY votes DESC'
    db.query(query, [user_id], (error, results) => {
        processFeed(error, results, batch, serve)
    })
}

function getInviteFeed(user_id, batch, serve) {
    const query = 'SELECT convo.*, post.post, post.post_id FROM contributor ' +
    'INNER JOIN convo ON convo.convo_id = contributor.convo_id ' + 
    'INNER JOIN post ON convo.first_post = post.post_id ' +
    'WHERE contributor.contributor_id = $1 AND contributor.accepted_at IS NULL ' +
    'ORDER BY votes DESC '
    db.query(query, [user_id], (error, results) => {
        processFeed(error, results, batch, serve)
    })
}

/*
function getFeedByTag(tag, batch, serve){
    return serve (null, null)
}
*/

function processFeed(error, results, batch, serve){
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
        const last_post = moment.utc(convo.last_post_at, moment.ISO_8601)
        convo.age = moment(last_post).fromNow()
        convo.last_post_at = undefined
        convo.first_post = undefined
        convo.post_id = undefined

        getContributors(convo.convo_id, (error, response) => {
            if(error){
                return serve (error, response)
            }
            convo.contributors = stringifyContributors(response)
            convo.contributorCount = response.length
            convos.push(convo)
            count++;
            if(count >= limit){
                convos.sort((a, b) => {
                    if (a.votes > b.votes) return -1
                    else if (b.votes > a.votes) return 1
                    else if (a.comments > b.comments) return -1
                    else if (b.comments > a.comments) return 1
                    else if (a.views > b.views) return -1
                    else if (b.views > a.views) return 1
                    else if (a.title > b.title) return -1
                    else return 1
                })
                return serve (null, {convos: convos})
            }
        })
    }
}

function stringifyContributors (contributors){
    const count = contributors.length
    let contr = []

    let i
    for(i = 0; i < count && i < 3; i++)
        contr[i] = contributors[i]

    if(count > 3)
        contr.push(`${count - 2} others`)
    
    return contr
}