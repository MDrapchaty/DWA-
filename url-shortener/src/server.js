//connections 

var express = require('express');
var body_parser = require('body-parser');
var app = express();

var port = 3000;

var Sequelize = require('sequelize')
  , sequelize = new Sequelize('urldb', 'root', 'root', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    3306, //..3306 or 5432 (for postgres)
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
/*
var Url = sequelize.define('urls', {
  url_short: Sequelize.STRING,
  url_long: Sequelize.STRING
});
*/

var Url = sequelize.define('urls', {
  short_url: Sequelize.STRING,
  long_url: Sequelize.STRING
}, {
  tableName: 'urls'
});


sequelize
  .sync({ force: false })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

var url = Url.build({
  short_url: 'apples',
  long_url: 'apples-alot'
})

url.save().then(function() {
  /* ... */
})





/*
var url = Url.build({
  url_short: 'apples',
  url_long:  'apples2000'
})

url.save().then(function() {
  /* ... */
//})



//use external api.js for routes, all routes have pre of /api
app.use('/api', require('../routes/api.js')(express));

//listen runs server
app.listen(port, function(){
	console.log('server active on ', port);
});