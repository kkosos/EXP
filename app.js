var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var socket_io    = require( "socket.io" );

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//cookie-base session
/*
app.use(cookieSession({
	key:'node',
	secret:'Hopeitwork'
	
}));*/

//session

app.use(session({
   secret: 'fooss',
    store: new MongoStore({ url: 'mongodb://localhost/minifb' })
}));

var index = require('./routes/index');
var users = require('./routes/users');
var apis  = require('./routes/apis');

//socket
var socket_server = require('./routes/socket_server');
var io           = socket_io();
app.io           = io;

//route
app.use('/', index);
app.use('/users', users);
app.use('/apis',apis)
app.use('/socket',socket_server)


io.on( "connection", function( socket )
{
    console.log( "A user connected" );
	
	socket.on ('disconnect', function(){console.log('user disconnected');});
	
	socket.on('chat message', function(msg){ console.log('message: ' + msg);
										   
										   io.emit('chat message', msg);
										   
										   });

});
	


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
