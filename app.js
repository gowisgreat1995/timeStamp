var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var index = require('./routes/index');
var users = require('./routes/users');
var apiServe = require('./routes/apiServe');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/:dateString', function(req,res){
    var dateInp=req.params.dateString;
    
  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month;var date;var year;var unix;var natural;
    var reg=/[A-z]/;
    if(reg.test(dateInp))
   {natural=dateInp;
   dateInp=dateInp.split(/ |,/); 
      month=months.indexOf(dateInp[0]);
       date=dateInp[1];
       year=dateInp[2];
       
       var newdate=new Date(year,month,date);
       console.log(newdate);
       unix=(newdate.getTime()/1000).toFixed(0);
       
       console.log(natural);
   }
    else
    {
       var date=new Date(dateInp*1000);
        year=date.getFullYear();
        dateof=date.getDate();
        month=date.getMonth();
       natural=months[month]+" "+dateof+","+year;
        unix=dateInp;
    }
    
    
    var dateJSON={unix:unix,natural:natural};

    res.json(dateJSON);
    res.end();
    
});

console.log("server running");
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
