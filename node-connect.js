const http = require('http');
const fs = require("fs");

http.createServer((request, response) => {
    const { headers, method, url } = request;
let body = [];
request.on('error', (err) => {
    console.error(err);
}).on('data', (chunk) => {
    body.push(chunk);
}).on('end', () => {
    body = Buffer.concat(body).toString();

response.on('error', (err) => {
    console.error(err);
});

response.statusCode = 200;
response.setHeader('Content-Type', 'application/json');
response.setHeader('User-Agent', 'Test');

//body = {"street":"xyz","city":"789","postcode":"rrr"}

const responseBody = { headers, method, url, body };

response.write(JSON.stringify(responseBody));
fs.writeFileSync('textresponse-8089.txt', JSON.stringify(responseBody), () => {});

response.end();

});
}).listen(8089);