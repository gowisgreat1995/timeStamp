var express = require('express');
var url=require("url");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     var url_parts = url.parse(req.url, true);
  res.render('index', { title: url_parts.pathname });
    
  
  

});

module.exports = router;
