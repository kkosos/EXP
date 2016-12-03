var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //return to page the variable
  //res.local.username = req.session.name;
  //res.local.sauthenticated = req.session.logined;
  
  
  res.render('index', { title: 'EX-PANDA' });
});

module.exports = router;
