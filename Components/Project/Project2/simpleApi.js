const http = require('http');
const fs = require('fs'); 
const data = require('./data');


http.createServer((req, resp) => {
    const reqUrl = req.url;
    if (reqUrl == '/getMyAPI') {
        resp.writeHead(200, { "content-type": "application/json" });
        resp.write(JSON.stringify(data));
        resp.end();
    } else {
        resp.writeHead(200, { 'content-type': 'text/html' });
        const hello = fs.readFileSync('./Components/Project/Project2/hello.html')
        resp.write(hello);
        resp.end();
    
        
    }
    
}).listen(5050);