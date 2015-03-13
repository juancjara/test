var express = require("express");
var url = require('url');
var bodyParser = require('body-parser');

var app = express(); 
app.use(bodyParser.json());

var pathUrl = '/cb';

app.get(pathUrl, function(req, res) {
  console.log('aca')
  console.log(req.url);
  var url_parts = url.parse(req.url,true);
  var query = url_parts.query;
  console.log(query);
  if(query.hasOwnProperty('hub.verify_token')){
    if(query['hub.verify_token']==="ikickass"){
      res.send(query['hub.challenge']);
    }
  } else {
    res.send('gg');
  }
});

app.post(pathUrl, function(req, res) {
  console.log(req.body);
  console.log(JSON.stringify(req.body));
  console.log(JSON.parse(JSON.stringify(req.body)));
});

var port = 1523;
console.log(port)

app.listen(port);