var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    if(req.query)
        {
             var time=new Date(req.query);
    var utc=time.getTime();
    var normal=months[time.getMonth()]+" "+time.getDate()+","+time.getFullYear();
    
    var item={"unix":utc,"natural":normal}
    res.render('jsonShow',{data:JSON.stringify(item)});
        }
    else
  res.render('index', { title: 'Timestamp Microservice' });
    
  
  

});

module.exports = router;
