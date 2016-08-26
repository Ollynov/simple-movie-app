var express = require('express');
var hbs = require('hbs');

var app = express();

// SEND TO DIFFERENT PAGES OF SITE
app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.get('/about', function(req, res) {
    res.sendfile('./views/about.html');
});

app.get('/article', function(req, res) {
    res.sendfile('./views/article.html');
});

app.listen(3000);
console.log('listening on port 3000')