require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')
/* GET home page. */
router.get('/', function(req, res, next) {
  
  //return to page the variable
  //res.local.username = req.session.name;
  //res.local.sauthenticated = req.session.logined;
  
  
  res.render('index', { title: 'EX-PANDA' });
});

module.exports = router;
