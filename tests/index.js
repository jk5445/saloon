require('dotenv').config();

const axios = require('axios');
const db = require('../db/queries');


function main(){
let url = 'http://localhost:3000/api/v1';

console.log("\nget: " + url);
axios.get(url)
.then( res => {
    console.log(res.data);


let token1;
let token2;

url = "http://localhost:3000/api/v1/user/signup";

console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_name: 'sheep',
        first_name: 'Judah',
        last_name: 'Kishk',
        email: 'email@saloon.org',
        password: 'password'
    }
}).then(res => {
        token1 = res.data;
        console.log("\ntoken1 is: " + token1);

url = "http://localhost:3000/api/v1/user/signup";

console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_name: 'peehs',
        first_name: 'Judah',
        last_name: 'Judah',
        email: 'liame@saloon.org',
        password: 'password'
    }
}).then(res => {
        token2 = res.data;
        console.log("\token22 is: " + token2);

url = "http://localhost:3000/api/v1/user/login";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        email: 'email@saloon.org',
        password: 'password'
    }
}).then(res => { 
    token1 = res.data;
    console.log(res.data);

url = "http://localhost:3000/api/v1/user";
console.log("\nget: " + url);
axios({
    method: 'get',
    url: url,
    headers: {
        authorization: token1
    }
}).then(res => { console.log(res.data)

console.log("\nget: " + url);
axios({
    method: 'get',
    url:url,
    headers: {
        authorization: token2
    }
})
.then(res => { console.log(res.data)

//CONVO and POST
let convo_id;

url = "http://localhost:3000/api/v1/convo";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    headers: {
        authorization: token1
    },
    data: {
        title: 'Epic Title',
        post: 'Testing the first saloon post!'
    }
}).then(res => {
        convo_id = res.data.convo_id;
        console.log("\nconvo_id is: " + convo_id);

url = "http://localhost:3000/api/v1/contributor";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    headers: {
        authorization: token1
    },
    data: {
        convo_id: convo_id,
        invite: "peehs"
    }
}).then(res => { console.log("invite success")

url += "/" + convo_id;
console.log("\nput: " + url);
axios({
    method: 'put',
    url: url, 
    headers: {
    authorization: token2
}
}).then(res => {console.log("accept success");

url = "http://localhost:3000/api/v1/post";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    headers: {
        authorization: token2
    },
    data: {
        convo_id: convo_id,
        post: 'Testing the second saloon post!!'
    }
}).then(res => { console.log("\npost successful");

url = "http://localhost:3000/api/v1/post";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    headers: {
        authorization: token1
    },
    data: {
        convo_id: convo_id,
        post: 'Testing the third saloon post!!'
    }
}).then(res => { console.log("\npost successful");

url = "http://localhost:3000/api/v1/convo"
console.log("\npost: " + url)
axios({
    method: 'post',
    url: url,
    headers: {
        authorization: token2
    },
    data: {
        title: 'second saloon convo',
        post: 'whoooooooooooo!'
    }
})
.then( res => {console.log("post convo 2 succesful");

url = "http://localhost:3000/api/v1/convo/" + convo_id + "/vote/1"
console.log("\nput: " + url)
axios({
    method: 'put',
    url: url,
    headers: {
        authorization: token1
    }
}).then (res => {

url = "http://localhost:3000/api/v1/convo/" + convo_id + "/vote/1"
console.log("\nput: " + url)
axios({
    method: 'put',
    url: url,
    headers: {
        authorization: token2
    }
}).then (res => {

url = "http://localhost:3000/api/v1/convo/" + convo_id;
console.log("\nget: " + url);
axios.get(url)
.then( res => { console.log(res.data);

url = "http://localhost:3000/api/v1/convo/" + convo_id + "/vote/0"
console.log("\nput: " + url)
axios({
    method: 'put',
    url: url,
    headers: {
        authorization: token2
    }
}).then (res => {

url = "http://localhost:3000/api/v1/feed";
console.log("\nget: " + url);
axios.get(url)
.then( res => {
    let i = 0;
    for(i; i < res.data.convos.length; i++){
        console.log(res.data.convos[i])
    }

        db.query(
            ' DELETE FROM convo_vote; DELETE FROM contributor; DELETE FROM post; DELETE FROM comment_vote; DELETE FROM comment; DELETE FROM convo; DELETE FROM users;', [], (error, _results) => {
                if(error){
                    console.log(error);
                } else {
                    console.log("db cleared");
                    axios.get('http://localhost:3000/pool/end')
                    .then(res => console.log(res.data), err => console.log(err))
                }
            }
        );
},


    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
    err => console.log(err))},
)
}

main();