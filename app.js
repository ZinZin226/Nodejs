const express = require('express');

const app = express();

let morgan = require('morgan')

app.set('views', './view');
app.set('view engine', 'ejs');

// custom middleware
// let logger = (env) => {
//     return (req, res, next)=>{
//         if(env === 'dev') {
//             console.log(`${req.method} ${req.url}`);
//         }
//         next(); // logging
//     };
// }

// app.use(logger('dev'));

// app.get('/', (req, res)=>{
//     res.render('home', {name: 'ZinZin'});
// })


//package name - Morgan
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res)=>{

    let blog = [
        { title : 'Blog Title 1', intro : 'This is blog 1'},
        { title : 'Blog Title 2', intro : 'This is blog 2'},
        { title : 'Blog Title 3', intro : 'This is blog 3'},
    ]

    res.render('home', {
        blog,
        tittle : "home"
    });
})

app.get('/about', (req, res)=>{
    res.render('about', {
        tittle : "about"
    });
})

app.get('/contact', (req, res)=>{
    res.render('contact', {
        tittle : "contact"
    });
})

app.use((req, res)=>{
    res.status(404).render('404', {
        tittle : "404 Not Found"
    });
});

app.listen(3000, ()=>{
    console.log('app is listening on port 3000');
});