
var express = require('express');
var url=require("url").parse(url,true);
var router = express.Router();

/* GET home page. */
router.get(url, function(req, res, next) {
   
    
  res.render('jsonShow', { data: url.pathname });
    
  
  

});

module.exports = router;
