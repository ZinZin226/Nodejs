const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    let filename;
    switch(req.url){
        case '/':
            filename= "homw.html";
            break;
        case '/about':
            filename= "about.html";
            break;
        case '/contact':
            filename= "contact.html";
            break;
        default:
            filename= "404.html";
    }
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./view/' +filename, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
})

server.listen(5000, 'localhost', ()=>{
    console.log('server is listening on port 5000');
})