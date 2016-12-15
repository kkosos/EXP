require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')

var Article = mongoose.model('Article',Article)
/* GET home page. */
router.get('/', function(req, res, next) {
  
  //return to page the variable
  
  console.log(req.session.logined)
  
  
    res.locals.username = req.session.name;
    res.locals.authenticated = req.session.logined;
  if(!req.session.logined)
    res.render('index', { title: 'EX-PANDA' });
  else{
    
    res.redirect('/users/a/'+req.session.name)
  }
});

module.exports = router;
