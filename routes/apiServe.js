
var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/:date', function(req, res, next) {
   var date=req.params.date;
    
  res.render('jsonShow', { "data": date});
    
  
  

});

module.exports = router;
