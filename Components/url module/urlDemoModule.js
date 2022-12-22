const url = require('url');
const http = require('http');


const server = http.createServer((req, resp) => {
 
  let obj = req.url;
  
  let urlObj = url.parse(obj,true);
  console.log(urlObj);
  console.log(urlObj.query.keyword);



 
  
}).listen(2000);