var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');
var morgan = require('morgan');
var app = express();
var tweetBank = require("./tweetBank.js");
var routes = require('./routes');

swig.setDefaults({cache: false});
app.set('views', './views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/', routes);


var port = 3000;
app.listen(port,function(){
  console.log("Im on bro");
});

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.engine('html', swig.renderFile);
