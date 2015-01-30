var express = require('express');
var router = express.Router();
var requestify = require('requestify'); 

var steamid;
requestify.get('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=????&vanityurl=zuuku').then(function(response) {
// Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
steamid = response.getBody().response.steamid;
});

/* GET home page. */
router.get('/', function(req, res) {
	

	res.render('index', { title: 'Express', steam: steamid });
});

// router.get('/users/:id', function(req, res) {
// 	// res.render('index', {
// 	// 	title:'ass',
// 	// 	age: 33
// 	// });
// console.log(req.params);
// res.send(200);
// });

module.exports = router;
