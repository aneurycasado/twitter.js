var express = require('express');
var swig = require('swig');
var app = express();
var tweetBank = require("./tweetBank.js");
swig.setDefaults({cache: false});
app.set('views', './views');
app.set('view engine', 'html');
var routes = require('./routes/');
app.use('/', routes);

var port = 3000;
app.listen(port,function(){
  console.log("Im on bro");
});


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.engine('html', swig.renderFile);
