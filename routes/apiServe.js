
var express = require('express');
var url=require("url").parse(url,true);
var router = express();

/* GET home page. */
router.get('/:date', function(req, res, next) {
   var date=req.params.date;
    
  res.render('jsonShow',JSON.stringify( { "data": date}));
    
  
  

});

module.exports = router;
