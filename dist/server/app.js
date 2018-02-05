var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var compression = require('compression');

var ErrorHandler = require('express-error-handler');

var app = express();
// app.use(compression);

// TODO uncomment when you've created a favicon
// app.use(favicon(path.join(__dirname, 'public', '/assets/img/bp_favicon.png')));
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  if(req.get('X-Forwarded-Proto') === 'http') {
      res.redirect('https://bodypoise.co.uk' + req.url);
  }
  else
      next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var errorHandler = ErrorHandler({
  static: {
    '500': '../dist/public/error.html',
    '404': '../dist/public/error.html',
  }
}) 

app.use(errorHandler);

module.exports = app;
