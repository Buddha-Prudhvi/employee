var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Routers = require('./routes/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(Routers);

// app.use(cors({
//   origin: true, // "true" will copy the domain of the request back
//                 // to the reply. If you need more control than this
//                 // use a function.

// credentials: true, // This MUST be "true" if your endpoint is
//                  // authenticated via either a session cookie
//                  // or Authorization header. Otherwise the
//                  // browser will block the response.

// methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
//                                      // pre-flight OPTIONS requests
// }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// origin: [
//   process.env.UI_HOST_URL || 'http://localhost:4200',
//   process.env.BASE_URL], credentials: true

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
