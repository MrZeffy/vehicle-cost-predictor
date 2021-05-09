// Importing packages.
const express = require('express');
const ejs = require('ejs');


const app = express();



// Middlewares
app.use(express.urlencoded());

app.use('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));



// End-points





// Listening

app.listen(3000);

