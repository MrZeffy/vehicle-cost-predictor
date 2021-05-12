// Importing packages.
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const cookieParser = require('cookie-parser');



// Creating MySQL connection
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Daman6232'
});

mysqlConnection.connect((err)=>{
    if (err) { 
        console.log(err);
    }
    else{
        console.log('MySQL connected successfully');
    }
});



// SETTING UP AND DATABASES AND TABLES.


// Creating database
executeQuery('CREATE DATABASE IF NOT EXISTS vmcp_system;', mysqlConnection).then(()=>{
    // returning another promise, so we can chain 'then' statements.
    return executeQuery('USE vmcp_system;', mysqlConnection)
}).then(()=>{
    // Creating table with required prototype.
    return executeQuery('CREATE TABLE IF NOT EXISTS ' + 
    'user_credentials(id VARCHAR(100) PRIMARY KEY, ' +
     'email VARCHAR(100) UNIQUE, password VARCHAR(100) ' + 
     'NOT NULL);', mysqlConnection)
}).then(()=>{
    console.log("DATABASE and TABLES setup successful");
}).catch((err)=>{
    console.log(err);
});




// Setting up passportjs for sessions

passport.use(new LocalStrategy({
    usernameField: 'email',
    password: 'password',
},(email, password, done) => {
    executeQuery(`SELECT * FROM user_credentials WHERE email="${email}"`)
    .then((result)=>{
        if(result.length === 0){
            throw "Error";
        }else{
            bcrypt.compare(password, result[0].password, (err, same)=>{
                if(err){
                    throw "Error";
                }else if(same){
                    done(null, result[0]);
                }
            })
        }     
    }).catch((err)=>{
        done(null, false, {messsage: err});
    })
}));


passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((userId, done)=>{
    executeQuery(`SELECT * FROM user_credentials WHERE id="${userId}"`, mysqlConnection)
    .then((result)=>{
        done(null, result[0]);
    })
    .catch((err)=>{
        done(err, false);
    })
});



// Setting up Express app.
const app = express();



// Middlewares
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));


app.use(session({
    secret: 'ourLittleSecretKey',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());

app.use(passport.session());



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




// Wrapping query function in Promise.

function executeQuery(query, connection){
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
}