
var express = require('express');
var router = express.Router();

router.get('/abc',function(req,res){ 
  if(!req.session.name||!req.session.logined){res.redirect('/');}
  
  res.render('socket/socketfile',{id:req.session.name});                                   
                                   
});



module.exports = router;
