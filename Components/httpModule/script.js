
//Creating a server using http module :


const http = require('http');
const server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-type': 'text/html' });
    resp.write('<h1>Hey This is my first server which is created by Rakesh Kumar Parida<h1/>');
    resp.end('We are ending this here , So bye for now .. ');
})
server.listen(5050);





