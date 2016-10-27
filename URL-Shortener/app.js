// require and instantiate express
var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use('/api', require('./base58.js')(express));

app.post('/', function(req, res){
  // route to create and return a shortened URL given a long URL
});


//create server var to run app.listen on port 3000
var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});

module.exports.encode = encode;
module.exports.decode = decode;