require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')
var Relation=mongoose.model('relationship')
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

router.get('/a/:name',function(req,res,next){
  /*if(!req.session.name||!req.session.logined)
  { 
    res.redirect('/')
  }*/
  //req.params.name
  console.log("hi")
  //owned: "myself" "invite_not_send" "invite_send" "accept_invite"
  var owned="invite_not_send";
  Article.find({username:req.params.name},
                function(err,arts){ 
                  if(err){console.log("get article err");return;}
                  if(!arts){console.log("no article");return;}
                
                  //check whick one view the page
                  if(req.session.logined){
                    //user see his own page
                    if(req.session.name==req.params.name){owned="myself";
                                                          console.log(owned+"1");
                  res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
                   return;
                                                         
                                                         }
                    //other users see page, need to check friend
                    else{
                      //check relation first(has invited?)
                      Relation.findOne({host:req.session.name,guest:req.params.name}
						,function(err,relate){
							if(err){console.log("invited check err")}
						  //invited
                        console.log("here!in");
							if(relate){console.log("here!asdasd");owned="invite_send";  
                           console.log(owned+"3");
                  res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
                  return;
                         
                        }
						  //not invite check target invite myself
							else{
                console.log("here!inasascasf");
								Relation.findOne({host:req.params.name,guest:req.session.name}
								,function(err,relate){
									if(err){console.log("invited check err2");}
									//target has send me invite I need to accept it
									if(relate){console.log("here!");owned="accept_invite";}							
									//both of us dont send invite
									else{owned="invite_not_send";}
                  
                  console.log(owned+"2");
                  res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
                  return;
               
								}						
								);
							}
							
						}						  
					  );					  
					  //if no just show add					  
					  
					  
					  
                    }
                    
                
				  }
                  
    
                  
                }
              );

});



router.get('/add_test', function(req, res, next) {
  
  res.render('users/add_article');
  
});

router.get('/test', function(req, res, next) {
  
  res.send('hhh');
  
});


module.exports = router;