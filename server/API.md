## User

**signup**  
post */apiv1/signup*

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
get */apiv1/login*

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
get */apiv1/user*

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
put */apiv1/user*

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
delete */apiv1/user*

request Authorization header  
request body  
{
&nbsp;&nbsp;&nbsp;&nbsp;
    "password": "password"
}


## Feed

All feed responses will have the following response body:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
    "convos": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "convo_id":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "title":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "contributors":"a, b, and 24 others",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "views":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "votes":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "comments":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "first_post":"",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "tags": ["tag1", "tag2", ...]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...        
&nbsp;&nbsp;&nbsp;&nbsp;
    ]  
}


**Get Feed for homepage**  
get */apiv1/feed*

**Get Feed by tag**
*secondary priority*  
get */apiv1/feed/:tag_id*

**Get Feed by contributor**
*secondary priority*  
get */apiv1/feed/:contributor_id*


## Conversation
For now, users can not edit or delete conversations.

**Create conversation**  
post */apiv1/convo*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_post": "postText"  
}

response body

{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "id",  
}

**Get conversation**  
get */apiv1/convo/:convo_id*

response body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
    "title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "views": "count",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "votes": "count",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "contributorCount": "count",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "contributors": ["contributor_1", "contributor_2", ...]  
&nbsp;&nbsp;&nbsp;&nbsp;
    "postCount": "count",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "posts": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "contributor": "contributor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "post": "postText",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "time_of_post": "timestamp"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...  
&nbsp;&nbsp;&nbsp;&nbsp;
    ],  
&nbsp;&nbsp;&nbsp;&nbsp;
    "commentCount": "count",  
}

**Vote on conversation**  
put */apiv1/convo/vote/:convo_id/:vote*

request Authorization header  
:vote is either "up" or "down"

## Posts 
subcomponents of conversations
For now, users can not edit or delete posts.

**Create post**  
post */apiv1/post*

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
get */apiv1/post/:convo_id/:postNumber*

## Contributors

**Get contributors**
*will not implement for now. included in get convo*  
get */apiv1/contributor/:convo_id'*

**Invite contributor**  
post */apiv1/contributor*

Request Authorization header

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"invite": "user"  //user of contributor being invited  
}

**Accept invite**  
put */apiv1/contributor/:convo_id'*

Request Authorization header

## Comments
**Get comments**  
get */apiv1/comment/:convo_id'*

response body  //needs thought
{  
&nbsp;&nbsp;&nbsp;&nbsp;
    "comments": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "comment_id": "comment_id",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "user_name": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "comment": "commentText",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "time": "",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "prev_id": "previousCommentId"  //null for base comment  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...  
&nbsp;&nbsp;&nbsp;&nbsp;
    ]
}

**Make base comment**  
post */apiv1/comment*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Comment as reply to prev comment**  
post */apiv1/comment/:comment_id*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Vote on comment**
put */apiv1/comment/vote/:comment_id/:vote'*

Request Authorization header  
:vote is up or down


