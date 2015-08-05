var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');
var morgan = require('morgan');
var app = express();
var tweetBank = require("./tweetBank.js");
var routes = require('./routes');
var socketio = require('socket.io');

swig.setDefaults({cache: false});
app.set('views', './views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/', routes(io));


var port = 3000;

var server = app.listen(port,function(){
  console.log("Im on bro");
});
var io = socketio.listen(server);

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.engine('html', swig.renderFile);
