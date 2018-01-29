var express = require('express');
var router = express.Router();


router.post('/outpass', function(req, res, next) {
  console.log(req.query);
  res.send('Sucess');
  res.end();
});

router.post('/nightout', function(req, res, next) {
  console.log(req.query);
  res.send('Sucess');
  res.end();
});

router.post('/leave', function(req, res, next) {
  console.log(req.query);
  res.send('Sucess');
  res.end();
});

module.exports = router;
