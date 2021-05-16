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
    res.render('index', {loggedIn: false});
});


app.get('/favicon.ico', (req, res)=>{
    console.log("favicon loading");
});


app.get('/loginPage', (req, res)=>{
    res.render('loginPage');
});

app.get('/profile', (req, res)=>{
    res.render('profile', {loggedIn: false});

    // TODO: LoggedIn Check.
})




app.post('/loginPage', (req, res)=>{
    let email = req.body['email'];
    let password = req.body['password'];
    console.log('LOGIN');
    console.log(email, password);


    // TODO: afte successful login, redirect to home.

    res.send("We are working on it.");
});


app.post('/register', (req, res)=>{
    
    let email = req.body['email'];
    let password = req.body['password'];
    console.log("register");
    console.log(email, password);
    // TODO: Verify email and then redirect to login page after user account creation.
    res.send("We are working on it.");
});

// Listening

app.listen(3000, ()=>{
    console.log("Server has started");
});

