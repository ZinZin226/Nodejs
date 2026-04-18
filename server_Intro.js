const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log('request made from client'); // to check if the server is working

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1> Hello World </h1>');
    res.write('<p> This is a simple Node.js server. </p>');
    res.end();
})

server.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000');
})