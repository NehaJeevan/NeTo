var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NeTo";

router.post('/:meritno/allow', function (req, res, next) {
	console.log(req.params.meritno);

	var key = req.body.key;
	var num = req.params.meritno;
	var no = num.toString();
	var form;

	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		db.collection("users").find({merit:"admin"}).toArray(function(err, user) {
			if(user[0].key == key)
			{
				console.log("Admin");
				db.collection("pending").find({merit: no}).toArray( function(err, result) {
					if (err) throw err;

					console.log(result);
					form = result[0];
					console.log("running");

					db.collection("approve").insert(form);
					console.log("added");

					db.collection("pending").remove({merit: form.merit, submitdate:form.submitdate});
					console.log("del");
					db.close();
					res.json(form);
					res.status(200);
					res.end();
				});
			}
		});
	});
});

router.post('/:meritno/reject', function (req, res, next) {
	console.log(req.params.meritno);

	var key = req.body.key;
	var num = req.params.meritno;
	var no = num.toString();
	var form;

	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		db.collection("users").find({merit:"admin"}).toArray(function(err, user) {
			if(user[0].key == key)
			{
				console.log("Admin");
				db.collection("pending").find({merit: no}).toArray( function(err, result) {
					if (err) throw err;

					console.log(result);
					form = result[0];
					console.log("running");

					db.collection("rejected").insert(form);
					console.log("added");

					db.collection("pending").remove({merit: form.merit, submitdate:form.submitdate});
					console.log("del");
					db.close();
					res.json(form);
					res.status(200);
					res.end();
				});
			}
		});
	});
});

router.get('/:meritno', function (req, res, next) {
	res.send("Allow in post");
	res.status(200);
	res.end();
});


module.exports = router;
