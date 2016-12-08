require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')

var Article = mongoose.model('Article',Article)
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
router.get('/idpage',function(req,res,next){
  if(!req.session.name||!req.session.logined)
  { 
    res.redirect('/')
  }
  
  Article.find({username:req.session.name},
                function(err,arts){ 
                  if(err){console.log("get article err");return;}
                  if(!arts){console.log("no article");return;}
                
                  res.render('users/show_article',{id:req.session.name,arts:arts})
                }
              )
  
  


})

router.get('/add_test', function(req, res, next) {
  
  res.render('users/add_article');
  
});

router.get('/test', function(req, res, next) {
  
  res.send('hhh');
  
});

module.exports = router;
