var express = require('express');
var router = express.Router();
var MongoClient  = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req, res, next) {
	var user = req.body.username;
	var pass = req.body.pwd;

	MongoClient.connect(url, function(err, db) {
		if(err) throw err;

		db.collection("users").find({username: user},{_id: false}).toArray(function(err, result) {
			if(err) throw err;

			console.log(result);

		});
	});
});

module.exports = router;
