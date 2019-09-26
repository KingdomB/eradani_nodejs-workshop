const request = require('request');

request('https://jsonplaceholder.typicode.com/todos/1', (error, response, body) => {
  if (error) {
    throw Error(error);
  }
  console.log(`Status Code is ${response.statusCode}`);
  console.log(body);
});