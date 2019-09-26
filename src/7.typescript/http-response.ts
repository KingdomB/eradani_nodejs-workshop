interface httpResponse {
    statusCode: number,
    headers: string[],
    body: string
}

function storeUsers(response: httpResponse) {
    // Do some stuff
}
function parseResponse(response: httpResponse) {
    // Do some stuff
}
function validateResponse(response: httpResponse) {
    // Do some stuff
}

const response1: httpResponse = {
    statusCode: 200,
    headers: [],
    body: ''
};

// We can pass in a variable of type `httpResponse`
validateResponse(response1);
// And we can also pass in a structurally-equivalent object
validateResponse({ statusCode: 200, headers: [], body: '' });