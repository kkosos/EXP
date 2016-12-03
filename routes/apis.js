var express = require('express');
var router = express.Router();


//register

router.post('/reg',function(req,res,next) {
    //check if input username or passwd
    /*if((!req.body.username)||(!req.body.passwd))
    {
        res.redirect('/users/reg');
        return;
    }
    res.send("h")
    res.redirect('/')

*/
    
}
);

module.exports = router;
