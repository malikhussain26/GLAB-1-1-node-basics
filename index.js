const http = require('http');
const nodemon = require('nodemon');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end('Hello World!\n');
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});