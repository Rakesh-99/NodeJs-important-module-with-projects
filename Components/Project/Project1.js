const http = require('http');
const fs = require('fs');
const path = require('path');
const { geteuid } = require('process');
const url = ('url');


http.createServer((request, response) => {
    // homepage
    // about
    //services
    //contact
    const getUrl = request.url;
    if (getUrl == '/') {
        console.log('Home Page');
    } else if (getUrl == '/about') {
        console.log('About Page');
    } else if (getUrl == '/services') {
        console.log('Services Page');
    } else if (getUrl == '/contact') {
        console.log('Contact Page ');
    }
}).listen(4040);