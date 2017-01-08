require('../lib/db')
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var expanda_account=mongoose.model('expanda_account')
var Relation=mongoose.model('relationship')
var Article = mongoose.model('Article')

var friend_list = mongoose.model('friend_list')
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

router.get('/game', function(req, res, next) {
  if(!req.session.name||!req.session.logined)
  { 
    res.redirect('/')
  }
  res.locals.authenticated = req.session.logined;
  res.render('users/game');
  
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

  res.locals.authenticated = req.session.logined;
  //req.params.name
  console.log("hi")
  //owned: "myself" "invite_not_send" "invite_send" "accept_invite" "friend"
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
                      //check if we are friend first
                      friend_list.findOne({host:req.session.name,friend:req.params.name},function(err,doc){      
                      	//we are friedn
						  if(doc){ 
							  owned="friend";
							  console.log(owned+"3");
								  res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
								  return;}
						  
						 //we are not friend yet
					  else{
										//check relation first(has invited?)
							  Relation.findOne({host:req.session.name,guest:req.params.name}
												,function(err,relate){
							  if(err){console.log("invited check err")}
							  //invited
							  if(relate){owned="invite_send";  
								   console.log(owned+"3");
								  res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
								  return;

										}
								//not invite, check target invite myself
								else{
								  console.log("here!inasascasf");
								  Relation.findOne({host:req.params.name,guest:req.session.name}
								  ,function(err,relate){
									if(err){console.log("invited check err2");}
									//target has send me invite I need to accept it
									if(relate){console.log("here!");owned="accept_invite";}							
									//both of us dont send
									else{owned="invite_not_send";}

									console.log(owned+"2");
									res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
									return;

								  }						
										);
									}

								}						  
							  );
					  
					  	}
                      					  
                      
           				});
                      
                	
           }   
				  }
          else {
            console.log("444");
          res.render('users/show_article',{id:req.params.name,arts:arts,owned:owned});
          return ;
          }
                  
    
                  
                }
              );

});



router.get('/add', function(req, res, next) {
  
  res.render('users/add_article');
  
});
router.get('/update/:id', function(req, res, next) {
  if(!req.session.logined||!req.session.name){
  	res.redirect('/');
  }
  //need show the article content first
  Article.find({_id:req.params.id},function(err,arts){
  	if(err){console.log("Find article to update error.");return;}
	if(arts)
  	res.render('users/update_article',{id:req.params.id,arts:arts});
	  
  })	
	
  return;
  
});

router.get('/friend_list/:username', function(req, res, next) {
  //everyone can see it
  
  res.locals.authenticated = req.session.logined;	
  friend_list.find({host:req.params.username},function(err,lst){
      if(err){console.log("get friend db error.");return;}
	  
	  res.render('users/friend_list',{id:req.params.username,lst:lst});
  });
	
  
});


router.get('/test', function(req, res, next) {
  
  res.send('hhh');
  
});


module.exports = router;