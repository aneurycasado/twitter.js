var express = require('express');
var app = express();

var port = 3000;
app.listen(port,function(){
  console.log("Im on bro");
});

app.use(function(request,response,next){
  console.log(request.method + " " + request.url + " " + response.statusCode);
  next();
});



app.get("/", function(request,response){
  console.log("Get /");
});

app.use("/news", function(request,response){
  console.log("")
  console.log("Did you know Meek Mills fought Flyod Mayweather");
  response.send("Did you know Meek Mills fought Flyod Mayweather");
});
