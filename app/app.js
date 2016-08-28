var express = require('express');
var hbs = require('handlebars');

var app = express();

// SEND TO DIFFERENT PAGES OF SITE
app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.get('/submit', function(req, res) {
    res.sendfile('./views/submit.html');
});



app.listen(3000);
console.log('listening on port 3000')



/*
Our movie app will allow a user to enter homescreen and see title,
picture of a random movie, the rating from 1-10, and two buttons under photo
Im feeling lucky page will just reload the page
Submit movie will take you to the submit.html

submit.html
User sees a brief overview of how legit of a movie they need to submit
they then submit title
submit star rating
submit url of image

RENDERING
home
submit.html



*/