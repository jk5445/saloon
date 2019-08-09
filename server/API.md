## Users
**signup**  
post */api/signup*

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"user_name":"user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_name":"first",  
&nbsp;&nbsp;&nbsp;&nbsp;
"last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
"email": "email@fake.com",  
&nbsp;&nbsp;&nbsp;&nbsp;
"password1": "password",  
&nbsp;&nbsp;&nbsp;&nbsp;
"password2": "password"  
}

response: (user will get an email to confirm email address before they can get a token)
- status

**login**  
get */api/login*

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"user_name": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"password": "password"  
}  
response Authorization header

**account info**
*not a priority*  
get */api/user*

request Authorization header  
response body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"user_name": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_name": "first",  
&nbsp;&nbsp;&nbsp;&nbsp;
"last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
"email": "email@fake.com",  
&nbsp;&nbsp;&nbsp;&nbsp;
"conversation_joined_1": { //for joined conversations  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id":"123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title"  
&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;
"conversation_invited_1": { //for joined conversations  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id":"123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributors": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor_1": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor_2": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
...  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}  
&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;
"comments": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id":"convo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText",  
&nbsp;&nbsp;&nbsp;&nbsp;
}  
}

**edit user info**
*not a priority*  
put */api/user*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"user_name": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_name": "first",  
&nbsp;&nbsp;&nbsp;&nbsp;
"last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
"email": "email@fake.com"  
}

**delete user**
*not a priority*  
delete */api/user*

request Authorization header  
request body  
{
&nbsp;&nbsp;&nbsp;&nbsp;
"password": "password"
}

## Conversations
For now, users can not edit or delete conversations.

**Create conversation**  
post */api/convo*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_post": "postText"  
}

**Get conversation**  
get */api/convo/:convo_ID*

response body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;
"contributors": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor_1": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor_2": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
...  
&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;
"posts": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"post_1": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"post": "postText"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"post_2": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"contributor": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"post": "postText"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
...  
&nbsp;&nbsp;&nbsp;&nbsp;
}  
}

**Vote on conversation**  
put */api/convo/vote/:convo_id/:vote*

request Authorization header  
:vote is either "up" or "down"

## Posts 
subcomponents of conversations
For now, users can not edit or delete posts.

**Create post**  
post */api/post*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"post": "postText"  
}

**Get post**
*will not implement for now. included in get convo*  
get */api/post/:convo_ID/:postNumber*

## Contributors

**Get contributors**
*will not implement for now. included in get convo*  
get */api/contributor/:convo_ID'*

**Invite contributor**  
post */api/contributor

Request Authorization header

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"invite": "user"  //user of contributor being invited  
}

**Accept invite**  
put */api/contributor/:convo_id'*

Request Authorization header

## Comments
**Get comments**  
get */api/comment/:convo_id'*

response body  //needs thought
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment_1": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"comment_id": "comment_id",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"user_name": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"time": "",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
"prev_id": "previousCommentId"  //null for base comment  
&nbsp;&nbsp;&nbsp;&nbsp;
},  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment_2": ...  
}

**Make base comment**  
post */api/comment*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Comment as reply to prev comment**  
post */api/comment/:comment_id*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Vote on comment**
put */api/comment/vote/:comment_ID/:vote'*

Request Authorization header  
:vote is up or down


