var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

router.post('/outpass', function(req, res, next) {
  console.log(req.body);
  var form = req.body;
  form.type = 1;
  console.log(Date.now());
  form.submitdate = Date.now();
  
  MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").insert(form);
	});

  res.send('Sucess');
  res.end();
});

router.post('/nightout', function(req, res, next) {
  console.log(req.body);
  var form = req.body;
  form.type = 2;
  console.log(Date.now());
  form.submitdate = Date.now();

  MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").insert(form);
	});

  res.send('Sucess');
  res.end();
});

router.post('/leave', function(req, res, next) {
  console.log(req.body);
  var form = req.body;
  form.type = 3;
  console.log(Date.now());
  form.submitdate = Date.now();

  MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("pending").insert(form);
	});

  res.send('Sucess');
  res.end();
});

module.exports = router;
