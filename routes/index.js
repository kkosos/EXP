require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')
/* GET home page. */
router.get('/', function(req, res, next) {
  
  //return to page the variable
  
  console.log(req.session.logined)
  
  
  
  res.locals.username = req.session.name;
  res.locals.authenticated = req.session.logined;
  
 // res.locals.username= req.session.name;
 // res.locals.authenticated=false;
  //console.log(req.session.name)
  res.render('index', { title: 'EX-PANDA' });
});

module.exports = router;
