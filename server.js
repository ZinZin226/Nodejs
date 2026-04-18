const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./view/home.html', (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(4000, 'localhost', ()=>{
    console.log('server is listening on port 4000');
})