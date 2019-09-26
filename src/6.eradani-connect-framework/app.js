
const http = require('http');
const express = require('express');

const requestPromise = require('request-promise');

const eradaniConnect = require('eradani-connect-node');
const linuxCalc = require('./pgm-model');
const getCustomers = require('./sql-model');

const config = {
    "connectionPath": {
        "host": "<Your LPAR URL>",
        "port": 47700
    },
    "username": "<Your LPAR Username>",
    "password": "<Your LPAR Password>"
}

const app = express();

app.get('/', function(request, response) {
    response.end('Hello Internet!');
});

app.get('/hello', function(request, response) {
    response.end('Hello, ' + request.query.name);
});

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
});

app.get('/linux-calc', function(request, response) {
    // Open a connection to our LPAR
    const connection = new eradaniConnect.transports.Xml("*LOCAL", config.username, config.password, config.connectionPath);
    // Call our RPG program!   
    linuxCalc.run(connection, {
        IBMICORES: request.query.num
    }).then(function(result) {
        response.status(200).json(result);
    });
});

app.get('/customers', function(request, response) {
    // Open a connection to our LPAR
    const connection = new eradaniConnect.transports.Xml("*LOCAL", config.username, config.password, config.connectionPath);

    // Run the SQL Query and return the result!
    getCustomers.run(connection, {
        minBalDue: request.query.minBalDue
    }).then(function(customers) {
        response.status(200).json(customers);
    });
});

const server = http.createServer(app);

const PORT = '<REPLACE THIS STRING WITH YOUR PORT NUMBER>';
server.listen(PORT);
console.log(`Server is now listening on port: ${PORT}`);