// Part 4
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

// Part 5
const url = require('url');

const server2 = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'   
 });
        res.end('Hello, world!');
    } else if (pathname === '/random') {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`A random number between 1 and 100: ${randomNumber}`);
    } else if (pathname === '/greet') {
        const name = parsedUrl.query.name;
        if (name) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hello, ${name}!`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a name.');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');   

});

