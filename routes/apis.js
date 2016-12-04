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

     if(!expanda_account.find().exists(req.body.account)){
         
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
     
    }
    else{        
        res.redirect('/users/reg');    
    }
    
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
    expanda_account.findOne({username:req.body.account,passwd:req.body.password}
                         ,function(err,user){
        if(err){
        console.log("Login failed.")
        }
        else{            
        //res.session={name:req.body.account,passwd:req.body.password,logined:true}
        req.session.name =req.body.account;    
        req.session.passwd = req.body.password;
        req.session.logined=true;        
        }                
        }    
    )
    
    res.redirect('/')


    
}
);


module.exports = router;
