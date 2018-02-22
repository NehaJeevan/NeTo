var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

router.get('/pending/', function (req, res, next) {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").find({}, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result[0].merit);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/approve/', function (req, res, next) {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("approve").find({}, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result[0].merit);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/rejected/', function (req, res, next) {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("rejected").find({}, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result[0].merit);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/pending/:meritno', function (req, res, next) {
	var no = req.params.meritno;

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").find({merit: no }, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/approve/:meritno', function (req, res, next) {
	var no = req.params.meritno;

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("approve").find({merit: no }, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

router.get('/rejected/:meritno', function (req, res, next) {
	var no = req.params.meritno;

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("rejected").find({merit: no }, { _id: false}).toArray( function(err, result) {
	    if (err) throw err;

	    console.log(result);
	    res.json(result);
	    res.status(200);
	    res.end();
	    db.close();
	  });
	});
});

module.exports = router;
