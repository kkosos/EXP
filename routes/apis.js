require('../lib/db');

var express = require('express');
var router = express.Router();

//db setting
var mongoose = require('mongoose');
var expanda_account=mongoose.model('expanda_account')
var Relation=mongoose.model('relationship')
var Article = mongoose.model('Article')
var friend_list = mongoose.model('friend_list')

//register

router.post('/reg',function(req,res,next) {
    
    //check if input username or passwd
    if((!req.body.account)||(!req.body.password))
    {
        res.redirect('/users/reg');
        return;
    }
    
    if(req.session.logined){
        res.redirect('/');
        return;
    };

     
    var ttt=expanda_account.findOne({username:req.body.account},function(err,doc){
            //if username exist
            if(doc)
                return res.redirect('/users/reg')
            //if not exist then go down
            
            var tmp_acc =new expanda_account({
            username:req.body.account,
            passwd:req.body.password
            });
   
            tmp_acc.save(function(err)
                {
                    if(err){console.log("reg to db err.")}
                });
        
           res.redirect('/');
           return;
        
    });           
}
);


router.post('/login',function(req,res,next) {
    //check if input username or passwd
    
    
    if((!req.body.account)||(!req.body.password))
    {
        res.redirect('/');
        return;
    }
    
    if(req.session.logined){
        res.redirect('/');
        return;
    };
    
    
    expanda_account.findOne({username:req.body.account,passwd:req.body.password}
                         ,function(err,user){
        if(!user){        
         res.redirect('/')
        return;
        }
        //res.session={name:req.body.account,passwd:req.body.password,logined:true}
        req.session.name =req.body.account;    
        req.session.passwd = req.body.password;
        req.session.logined=1;             
        
         res.redirect('/')                
        }    
    )    
}
);

router.get('/delete_article/:id',function(req,res,next){
    console.log("now to add")
    //console.log(req.body.article)
    if(!req.session.name||!req.session.logined){
        res.redirect('/')
    }
    Article.remove({_id:req.params.id},function(err){if(err)console.log("delete error.");});	
    
    res.redirect('/');
    
    
});

router.post('/update_article/:id',function(req,res,next){
    console.log("now to update")
    //console.log(req.body.article)
    if(!req.session.name||!req.session.logined){
        res.redirect('/')
    }
    Article.update({_id:req.params.id},{Context:req.body.article},function(err){if(err)console.log("delete error.");});	
    
    res.redirect('/');
    
    
});



router.post('/add_article',function(req,res,next){
    //console.log("now to add")
    //console.log(req.body.article)
    if(!req.session.name){
        res.redirect('/')
    }
    
	var a = new Date().getTime();
	var b = new Date().getTimezoneOffset()*60000;
	var date_now = new Date(a-b).toISOString().replace('T', ' ').substr(0, 19);
	
	
    new Article({
        username:req.session.name,
        Context:req.body.article,
		Date:date_now
    }).save(function(err){
        if(err){console.log('Context save failed');return;}
        console.log('save to db context')
    })
    
    res.redirect('/');
    
    
});

router.post('/add_friend_accept/:target',function(req,res,next){
    if(!req.session.logined)
    {
        return res.redirect('/');
    }      
     var target = req.params.target;
    console.log(target)
    
     friend_list.findOne({host:req.session.name,guest:target},function(err,users){
            if(!users){
                    new friend_list({
                    host:req.session.name,
                    friend:target
                }).save(function(err){
                    if(err){console.log('Context save failed');return;}
                    console.log('save to db context')
                })
                    
                    new friend_list({
                    host:target,
                    friend:req.session.name
                }).save(function(err){
                    if(err){console.log('Context save failed');return;}
                    console.log('save to db context')
                })
                    
                    Relation.remove({host:target,guest:req.session.name},function(err){
                    if(err)console.log("fuck you")
                    return res.redirect('/users/a/'+target);
                    })
                    
     
            }
            
     });
    
    
    
});
router.post('/add_friend_cancel/:target',function(req,res,next){
    if(!req.session.logined)
    {
        return res.redirect('/');
    }      
    var target = req.params.target;
            Relation.remove({host:req.session.name,guest:target},function(err){
                    if(err)console.log("fuck you")
                    return res.redirect('/users/a/'+target);
                    })
     return res.redirect('/');

});

router.post('/delete_friend/:target',function(req,res,next){
    if(!req.session.logined)
    {
        return res.redirect('/');
    }      
    console.log("hi323")
    var target = req.params.target;
                    friend_list.remove({host:req.session.name,friend:target},function(err){
                    if(err)console.log("fuck you")
                            friend_list.remove({host:target,friend:req.session.name},function(err){
                            if(err)console.log("fuck you")
                            return res.redirect('/users/a/'+target);
                            })
                    
                    })
    

});

router.post('/add_friend/:target',function(req,res,next){
    /*if(!req.session.name||!req.session.logined)
    { 
        res.redirect('/')
    }*/
    
    //check logined
    if(!req.session.logined)
    {
        return res.redirect('/');
    }        
    //check the user and the target is friend
   
    var target = req.params.target
    
    //just add relation
    
     Relation.findOne({host:req.session.name,guest:target},function(err,users){
            if(!users){
                    new Relation({
                    host:req.session.name,
                    guest:target
                }).save(function(err){
                    if(err){console.log('Context save failed');return;}
                    console.log('save to db context')
                })
     
            }
         
            
     });
    
    
    /*
    
    relationship.save({username:req.session.name},{"$addToSet":{"friend":"bsdss"}},function(err,docs){
        if(err){console.log("add friend")}
    
    
    })*/
    
    res.redirect('/');


});





module.exports = router;
