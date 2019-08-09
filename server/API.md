## Users
#### signup
post */api/signup*
#### login
get */api/login*
#### account info
get */api/user*
- requires authentication
#### edit user info
put */api/user*
- requires authentication
#### delete user
delete */api/user*
- requires authentication

## Conversations
For now, users can not edit or delete conversations.
#### Create conversation
post */api/convo*
- requires authentication
#### Get conversation
get */api/convo/:convo_ID*
#### Vote on conversation
put */api/convo/vote/:convo_ID/:vote*
- requires authentication

## Posts 
subcomponents of conversations
For now, users can not edit or delete posts.
#### Create post
post */api/post*
- requires authentication
#### Get post
get */api/post/:convo_ID/:postNumber*

## Contributors
#### Get contributors
get */api/contributor/:convo_ID'*
#### Invite contributor
post */api/contributor/:convo_ID/:invite*
- requires authentication
#### Accept invite
put */api/contributo/:convo_ID'*
- requires authentication

## Comments
#### Get comments
get */api/comment/:convo_ID'*
#### Make base comment
post */api/comment/:convo_ID*
- requires authentication
#### Comment as reply to prev comment
put */api/comment/:comment_ID*
- requires authentication
#### Vote on comment
put */api/comment/vote/:comment_ID/:vote'*
- requires authentication


