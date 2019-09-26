const http = require('http');
const express = require('express');

// Import the Request-Promise package
const requestPromise = require('request-promise');

const app = express();

app.get('/', function(request, response) {
    response.end('Hello Internet!');
});

app.get('/hello', function(request, response) {
    response.end('Hello, ' + request.query.name);
});

// New route!
app.get('/data', function (request, response) {
    requestPromise('https://jsonplaceholder.typicode.com/todos/1')
        .then(result => {
            console.log(result);
            response.end(result);
        })
        .catch(error => {
            console.log(error);
            response.status(500).end(error);
        });
})

const server = http.createServer(app);

server.listen();