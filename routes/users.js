require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')
/* GET users listing. */


router.get('/', function(req, res, next) {

  res.render('/');
  
  
  
});


router.get('/reg', function(req, res, next) {
  if(req.session.logined){
    res.redirect('/');
    return; 
  }
  res.render('users/register');
});
/*
router.get('/login', function(req, res, next) {
  if(req.session.logined){
    res.redirect('/');
    return;  
  }
  res.render('users/signin');
  
  
});
*/
router.get('/logout', function(req, res, next) {
  req.session.regenerate(function(){
    req.session.logined = false;
    res.redirect('/')  
  }) 
  
  
});


router.get('/test', function(req, res, next) {
  
  res.send('hhh');
  
});

module.exports = router;
