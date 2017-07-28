
var express = require('express');
var url=require("url").parse(url,true);
var router = express.Router();

/* GET home page. */
router.get('/:date', function(req, res, next) {
   
    
  res.render('jsonShow',JSON.stringify( { "data": date}));
    
  
  

});

module.exports = router;
