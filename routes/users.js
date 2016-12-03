var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/reg', function(req, res, next) {
  if(req.session.logined){
    res.redirect('/');
    return; 
  }
  res.render('users/reg');
});

router.get('/login', function(req, res, next) {
  if(req.session.logined){
    res.redirect('/');
    return;  
  }
  res.render('users/signin');
  
  
});

router.get('/logout', function(req, res, next) {
  req.session.logined = false;
  res.redirect('/');
  res.end()
});


router.get('/test', function(req, res, next) {
  
  res.send('hhh');
  
});
module.exports = router;
