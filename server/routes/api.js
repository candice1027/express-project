var express = require('express');
var router = express.Router();

router.get('/list',function(req,res,next){
    res.send({status:0,msg:'hello world'})
})
module.exports = router;