var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

router.get('/pending/', function (req, res, next) {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").find({merit: "" }, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result);
	    res.send("Success");
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/pending/:meritno', function (req, res, next) {
	var no = req.params.meritno;
console.log(no);
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").find({merit: no }, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result);
	    res.send("Success");
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/accept/:meritno', function (req, res, next) {

});

router.get('/reject/:meritno', function (req, res, next) {
	
});

module.exports = router;
