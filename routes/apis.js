require('../lib/db');

var express = require('express');
var router = express.Router();

//db setting
var mongoose = require('mongoose');
var expanda_account=mongoose.model('expanda_account')


//register

router.post('/reg',function(req,res,next) {
    
    //check if input username or passwd
    if((!req.body.account)||(!req.body.password))
    {
        res.redirect('/users/reg');
        return;
    }
    
   /* if(!req.session.name){
        res.redirect('/');
    };*/
    var tmp_acc =new expanda_account({
        username:req.body.account,
        passwd:req.body.password
    });
    //tmp_acc.speak();
    tmp_acc.save(
        function(err)
        {
            if(err){console.log("reg to db err.")}
        }
    );
     
    
    res.redirect('/');


    
}
);


router.post('/login',function(req,res,next) {
    //check if input username or passwd
    if((!req.body.account)||(!req.body.password))
    {
        res.redirect('/');
        return;
    }
    
    
    res.session.name = req.body.account;    
    res.session.passwd = req.body.password;
    req.session.logined=true;
    res.redirect('/')


    
}
);


module.exports = router;
