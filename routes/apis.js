require('../lib/db');

var express = require('express');
var router = express.Router();

//db setting
var mongoose = require('mongoose');
var expanda_account=mongoose.model('expanda_account')


//register

router.post('/reg',function(req,res,next) {
    //check if input username or passwd
    if((!req.body.username)||(!req.body.passwd))
    {
        res.redirect('/users/reg');
        return;
    }

    res.redirect('/')


    
}
);


router.post('/login',function(req,res,next) {
    //check if input username or passwd
    if((!req.body.username)||(!req.body.passwd))
    {
        res.redirect('/users/login');
        return;
    }
    res.session.name = req.body.username;
    res.session.passwd = req.body.passwd;
    req.session.logined=true;
    res.redirect('/')


    
}
);


module.exports = router;
