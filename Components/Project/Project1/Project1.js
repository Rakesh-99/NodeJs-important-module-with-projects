const http = require('http');
const url = require('url');
const fs = require('fs');


const createServer = http.createServer((req, resp) => {
    const getUrl = req.url;

    if (getUrl == '/') {

        const readFile = fs.readFileSync('./Components/Project/home.html');
        resp.write(readFile);
        console.log('Home Page !');
        resp.end();

    } else if (getUrl == '/about') {
        const readFile = fs.readFileSync('./Components/Project/about.html');
        resp.write(readFile);
        console.log('About Page !');

    } else if (getUrl == '/contact') {
        const readFile = fs.readFileSync("./Components/Project/contact.html");
        resp.write(readFile);
        console.log("Contact Page !");

    } else if (getUrl == '/services') {
        const readFile = fs.readFileSync("./Components/Project/services.html");
        resp.write(readFile);
        console.log("Services Page !");
    }
});
createServer.listen(2020);