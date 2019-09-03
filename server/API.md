## User

**signup**  
post */api/v1/user/signup*

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"username":"user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_name":"first",  
&nbsp;&nbsp;&nbsp;&nbsp;
"last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
"email": "email@fake.com",  
&nbsp;&nbsp;&nbsp;&nbsp;
"password": "password",  
}

response: (user will get an email to confirm email address before they can get a token)
- status

**login**  
post */api/v1/user/login*

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"username": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"password": "password"  
}  
response { "token" }

**account info**
*not a priority*  
get */api/v1/user*

request Authorization header  
response body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
    "username": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "first_name": "first",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "email": "email@fake.com",  
&nbsp;&nbsp;&nbsp;&nbsp;
    "convos_joined": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "convo_id":"123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "title": "Title"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "contributors": ["contributor1", "contributor2", ...]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...  
&nbsp;&nbsp;&nbsp;&nbsp;
    ],  
&nbsp;&nbsp;&nbsp;&nbsp;
    "convos_invited": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "convo_id":"123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "title": "Title"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "contributors": ["contributor1", "contributor2", ...]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...  
&nbsp;&nbsp;&nbsp;&nbsp;
    ],  
}
//include comments?

**edit user info**
*not a priority*  
put */api/v1/user*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"username": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;
"first_name": "first",  
&nbsp;&nbsp;&nbsp;&nbsp;
"last_name": "last",  
&nbsp;&nbsp;&nbsp;&nbsp;
"email": "email@fake.com"  
}

**delete user**
*not a priority*  
delete */api/v1/user*

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
get */api/v1/feed*

**Get Feed by tag**
*secondary priority*  
get */api/v1/feed/bytag/:tag_id*

**Get Feed by contributor**
*secondary priority*  
get */api/v1/feed/bycontributor/:contributor_id*


## Conversation
For now, users can not edit or delete conversations.

**Create conversation**  
post */api/v1/convo*

request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"title": "Title",  
&nbsp;&nbsp;&nbsp;&nbsp;
"post": "postText"  
}

response body

{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "id",  
}

**Get conversation**  
get */api/v1/convo/:convo_id*
authentication header if logged in

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
&nbsp;&nbsp;&nbsp;&nbsp;
    //if logged in (authentication header passed) users vote will be returned  
&nbsp;&nbsp;&nbsp;&nbsp;
    //1, 0, or -1 for upvote, novote, and downvote respectively  
&nbsp;&nbsp;&nbsp;&nbsp;
    "vote": "1",  
}

**Vote on conversation**  
put */api/v1/convo/:convo_id/vote/:vote*

request Authorization header  
:vote is 1, 0, or -1 for upvote, novote, and downvote respectively

## Posts 
subcomponents of conversations
For now, users can not edit or delete posts.

**Create post**  
post */api/v1/post*

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
get */api/v1/post/:convo_id/:postNumber*

## Contributors

**Get contributors**
*will not implement for now. included in get convo*  
get */api/v1/contributor/:convo_id'*

**Invite contributor**  
post */api/v1/contributor*

Request Authorization header

request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"invite": "user"  //user of contributor being invited  
}

**Accept invite**  
put */api/v1/contributor/:convo_id'*

Request Authorization header

## Comments
**Get comments**  
get */api/v1/comment/:convo_id'*

response body  //needs thought
{  
&nbsp;&nbsp;&nbsp;&nbsp;
    "comments": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "comment_id": "comment_id",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "username": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "comment": "comment text",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "votes": "vote count",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "time": "",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "replies": [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "comment_id": "comment_id",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "username": "user",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "comment": "comment text",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "votes": "vote count",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "time": "",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    "replies": [...]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                }, ...  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ...  
&nbsp;&nbsp;&nbsp;&nbsp;
    ]
}

**Make base comment**  
post */api/v1/comment*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Comment as reply to prev comment**  
post */api/v1/comment/:comment_id*

Request Authorization header  
request body  
{  
&nbsp;&nbsp;&nbsp;&nbsp;
"convo_id": "convo",  
&nbsp;&nbsp;&nbsp;&nbsp;
"comment": "commentText"  
}

**Vote on comment**
put */api/v1/comment/:comment_id/vote/:vote'*

Request Authorization header  
:vote is up or down


