const db = require('../queries')

module.exports = {
    createComment,
    getComment
}

function createComment(convo_id, user_id, comment, serve){
    const query = 'INSERT INTO comment (convo_id, user_id, comment) VALUES ($1, $2, $3)'
    db.query(query, [convo_id, user_id, comment], (error, results) => {
        if(error) {
            console.error('Insert comment failed', error)
		    return serve (true, 'Insert comment failed')
        }
        return serve(null, "success")
    })
}

function getComment(convo_id, serve){
    const query = "SELECT comment.comment, comment.comment_at, comment.votes, users.username FROM comment " + 
    "INNER JOIN users ON comment.user_id = users.user_id " + 
    "WHERE comment.convo_id = $1 ORDER BY comment_at DESC"
    db.query(query, [convo_id], (error, results) => {
        if(error) {
            console.error('Select comments failed', error)
            return serve(true, 'Select comments failed')
        } else if(results.rowCount < 1) {
            return serve(true, 'No comments or non-existent convo_id')
        }

        return serve(null, { comments: results.rows })
    })
}

