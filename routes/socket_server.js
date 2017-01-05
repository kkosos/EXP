
var express = require('express');
var router = express.Router();

router.get('/chatroom',function(req,res){ 
  if(!req.session.name||!req.session.logined){res.render('socket/entertologin');return;}
  
  res.render('socket/socketfile',{id:req.session.name});                                   
                                   
});



module.exports = router;
