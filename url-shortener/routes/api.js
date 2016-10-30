//claim module as function so that you can control what is returned
module.exports = function(express){
	var router = express.Router();  //connect to express

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





	router.get('/v1/urls', function(req, res){
		
		Url.findAll({
  attributes: ['short_url', 'long_url']
	}).then(function (Url) {
			    res.send(Url);

		}).error(function (err) {
		    console.log("Error:" + err);
		});

	});








	router.post('/v1/:url', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		var longUrl = req.params.url
		
				function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}


		var newUrl = makeid();  //generate new random 5 digit string
		var shortUrl = 'https://' + newUrl ; //'convert' the string to url

		var url = Url.build({
		  short_url: shortUrl,
		  long_url: longUrl
		})

url.save().then(function() {
  /* ... */
})



		res.json({url: shortUrl }); //respond with json format with new generated random string
	});

	return router; //return this whole function which is used in your server.js


}