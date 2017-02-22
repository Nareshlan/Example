var express = require('express')
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post("/signup", function(req, res){
  var params = req.body;
  res.send(params);
});
 
app.post("/login", function(req, res){
  var params = req.body;
  res.send(params);
});
 

app.listen(3001);