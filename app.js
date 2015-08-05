var express = require('express');
var swig = require('swig');
var app = express();
var tweetBank = require("./tweetBank.js");
swig.setDefaults({cache: false});
app.set('views', './views');
app.set('view engine', 'html');


var port = 3000;
app.listen(port,function(){
  console.log("Im on bro");
});

app.use(function(request,response,next){
  console.log(request.method + " " + request.url + " " + response.statusCode);
  next();
});

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.engine('html', swig.renderFile);

app.get("/", function(request,response, next){
  response.render( 'index', {title: 'Hall of Fame', people: people} );

});

app.use("/news", function(request,response){
  response.send(tweetBank.add());
});
