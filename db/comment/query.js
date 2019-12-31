const db = require('../queries')

module.exports = {
    createComment,
    getComment
}

function createComment(convo_id, user_id, comment, serve){
    db.getClient((error, client, done) => {
		if(error) {
			console.error('Error connecting client', error)
			return serve (true, "Error connecting client")
		}

		const abort = err => {
			if(err){
				console.error("Error in transaction", err)
				client.query('ROLLBACK', err => {
					if(err){
						console.error("Error rolling back client", err)
					}
					done()
				})
			}
			return !!err
        }

		client.query('BEGIN', err => {
			if(abort(err)) return serve (true, "Error beginning transaction")

            let query = 'INSERT INTO comment (convo_id, user_id, comment) VALUES ($1, $2, $3)'
            client.query(query, [convo_id, user_id, comment], err => {
                if(abort(err)) {
                    console.error('Insert comment failed', error)
		            return serve (true, 'Insert comment failed')
                }

                query = 'UPDATE convo SET comments=comments + 1 WHERE convo_id=$1'
                client.query(query, [convo_id], err => {
                    if(abort(err)) {
                        console.error('Update comment count failed', error)
                        return serve (true, 'Update comment count failed')
                    }

                    client.query('COMMIT', err => {
                        if(abort(err)) return serve (true, "Error commiting transaction")
                        done()
                        convo.isContributor = true
                        return serve (null, convo)
                    })
                })
            })
        })
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

