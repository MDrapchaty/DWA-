//connections 

var express = require('express');
var body_parser = require('body-parser');
var app = express();


const debug = require('debug')('my-namespace');  
const name = 'my-app'  ;
debug('booting %s', name);


const winston = require('winston');
/*
winston.log('info', 'Hello log files!', {  
  someKey: 'some-value'
});
*/
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: 'debug_log.log'})
    ]
});

logger.log("info", "File: was found");



var port = 3000;

//test

//use external api.js for routes, all routes have pre of /api
app.use('/api', require('../routes/api.js')(express));

//listen runs server
app.listen(port, function(){
	console.log('server active on ', port);
});

module.exports = app;