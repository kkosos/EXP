var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/reg', function(req, res, next) {
  res.send('reg');
});

router.get('/login', function(req, res, next) {
  res.send('reg');
});

router.get('/logout', function(req, res, next) {
  res.send('reg');
});

module.exports = router;
