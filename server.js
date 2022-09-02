const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

const port = 8001;

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Whoops! File not found!');
        }else {
            response.write(data);
        }
        response.end();
    })
};



http.createServer(handleRequest).listen(8001);
console.log(`website is listening on port ${port}`)
// app.listen(port, ()=> console.log(`website is listening on port: ${port}`));