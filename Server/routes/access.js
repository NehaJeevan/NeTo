var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

function getFull(req,res,collection) {
	if(req.query.skip != null)
	{
		var ind = parseInt(req.query.skip);
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection(collection).find({}, { _id: false, skip: (ind-1), limit:1}).toArray( function(err, result) {
			if (err) throw err;

			console.log(result[0].merit);
			res.json(result);
			res.status(200);
			res.end();
			db.close();
		  });
		});
	} else
	{

		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection(collection).find({}, { _id: false}).toArray( function(err, result) {
			if (err) throw err;

			console.log(result[0].merit);
			res.json(result);
			res.status(200);
			res.end();
			db.close();
		  });
		});
	}
}

router.get('/pending', function (req, res, next) {
	console.log(req.query);
	getFull(req,res,"pending");
});

router.get('/approve', function (req, res, next) {
	getFull(req,res,"approve");
});

router.get('/rejected', function (req, res, next) {
	getFull(req,res,"rejected");
});

function getIndi(req,res,collection) {
	var no = req.params.meritno;
	if(req.query.skip != null)
	{
		var ind = parseInt(req.query.skip);
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection(collection).find({merit: no}, { _id: false, skip: (ind-1), limit:1}).toArray( function(err, result) {
			if (err) throw err;

			console.log(result[0].merit);
			res.json(result);
			res.status(200);
			res.end();
			db.close();
		  });
		});
	} else
	{

		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection(collection).find({merit: no}, { _id: false}).toArray( function(err, result) {
			if (err) throw err;

			console.log(result[0].merit);
			res.json(result);
			res.status(200);
			res.end();
			db.close();
		  });
		});
	}
}

router.get('/pending/:meritno', function (req, res, next) {

	getIndi(req,res,"pending");
});

router.get('/approve/:meritno', function (req, res, next) {

	getIndi(req,res,"approve");
});

router.get('/rejected/:meritno', function (req, res, next) {

	getIndi(req,res,"rejected")
});

module.exports = router;
