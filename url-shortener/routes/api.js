//claim module as function so that you can control what is returned
module.exports = function(express){
	var router = express.Router();  //connect to express


	router.post('/v1/:url', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		var long_url = req.params.url
		
				function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}


		var new_url = makeid();  //generate new random 5 digit string
		var short_url = 'https://' + new_url ; //'convert' the string to url

		res.json({url: short_url }); //respond with json format with new generated random string
	});

	return router; //return this whole function which is used in your server.js


}