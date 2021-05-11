// Importing packages.
const express = require('express');
const ejs = require('ejs');


const app = express();



// Middlewares
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));



// End-points

app.get('/', (req, res)=>{
    res.render('index');
});


app.get('/favicon.ico', (req, res)=>{
    console.log("favicon loading");
});


app.get('/loginPage', (req, res)=>{
    res.render('loginPage');
});

// Listening

app.listen(3000, ()=>{
    console.log("Server has started");
});

