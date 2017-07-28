
var express = require('express');
var url=require("url").parse(url,true);
var router = express();

/* GET home page. */
router.param('date', function(req, res, next,date) {
   
    
  res.render('jsonShow',JSON.stringify( { "data": date}));
    
  
  

});

module.exports = router;
