const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile('./view/home.html', {root: __dirname})
})

app.get('/about', (req, res)=>{
    res.sendFile('./view/about.html', {root: __dirname})
})

app.get('/about-us', (req, res)=>{ // For Redirecting
    res.redirect('/about');
})

app.get('/contact', (req, res)=>{
    res.sendFile('./view/contact.html', {root: __dirname})
})

app.use((req, res)=>{
    res.status(404);
    res.sendFile('./view/404.html', {root: __dirname})
})

app.listen(3000, ()=>{
    console.log('app is listening on port 3000');
});