const axios = require('axios');
const db = require('../db/queries');


function main(){
let url = 'http://localhost:3000/api/v1';

console.log("\nget: " + url);
axios.get(url)
.then( res => {
    console.log(res.data);

//USER
let user_id1;
let user_id2;

url = "http://localhost:3000/api/v1/signup";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_name: 'sheep',
        first_name: 'Judah',
        last_name: 'Kishk',
        email: 'email@saloon.org',
        password: 'pass'
    }
}).then(res => {
        user_id1 = res.data.user_id;
        console.log("\nuser_id1 is: " + user_id1);

url = "http://localhost:3000/api/v1/signup";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_name: 'peehs',
        first_name: 'Judah',
        last_name: 'Judah',
        email: 'liame@saloon.org',
        password: 'pass'
    }
}).then(res => {
        user_id2 = res.data.user_id;
        console.log("\nuser_id2 is: " + user_id2);

url = "http://localhost:3000/api/v1/login";
console.log("\nget: " + url);
axios({
    method: 'get',
    url: url,
    data: {
        email: 'email@saloon.org',
        password: 'pass'
    }
}).then(res => { console.log(res.data);

url = "http://localhost:3000/api/v1/user";
console.log("\nget: " + url);
axios({
    method: 'get',
    url: url,
    data: {
        user_id: user_id1
    }
}).then(res => { console.log(res.data)

console.log(user_id2);
axios({
    method: 'get',
    url:url,
    data: {
        user_id: user_id2
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
    data: {
        user_id: user_id1,
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
    data: {
        convo_id: convo_id,
        invite: user_id2,
        user_id: user_id1
    }
}).then(res => { console.log("invite success")

url += "/" + convo_id;
console.log("\nput: " + url);
axios.put(url, {user_id: user_id2}).then(res => {console.log("accept success");

url = "http://localhost:3000/api/v1/post";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_id: user_id1,
        convo_id: convo_id,
        post: 'Testing the second saloon post!!'
    }
}).then(res => { console.log("\npost successful");

url = "http://localhost:3000/api/v1/post";
console.log("\npost: " + url);
axios({
    method: 'post',
    url: url,
    data: {
        user_id: user_id2,
        convo_id: convo_id,
        post: 'Testing the third saloon post!!'
    }
}).then(res => { console.log("\npost successful");

url = "http://localhost:3000/api/v1/convo" + "/" + convo_id;
console.log("\nget: " + url);
axios.get(url).then(
    res => { console.log(res.data);

        db.query(
            'DELETE FROM contributor; DELETE FROM post; DELETE FROM convo; DELETE FROM users', [], (error, results) => {
                if(error){
                    console.log(error);
                } else {
                    console.log("db cleared");
                }
            }
        );


axios.get('http://localhost:3000/pool/end')
.then(
    res => {console.log(res.data);},  
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