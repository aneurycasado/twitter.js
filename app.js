var express = require('express');
var app = express();

var port = 3000;
app.listen(port,function(){
  console.log("Im on bro");
});

app.get("/", function(request,response){
  console.log("Was sup bro");
});
