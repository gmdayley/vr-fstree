var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var config = require('config');
var proxy = require('http-proxy-middleware');
var sslRedirect = require('heroku-ssl-redirect');
var cookieParser = require('cookie-parser');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.title = 'Pedigree Browser';

// Allow the app to be run behind proxies. The app will detect when it's behind
// a proxy and properly configure https and other settings based on the user's
// connection to the proxy instead of the proxies connection to server.
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);

app.use(sslRedirect());

// Configure serving of static assets.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/slides', express.static(path.join(__dirname, 'slides')));
app.use('/aframe', express.static(path.join(__dirname, 'aframe-demo')));
app.use('/proxy', proxy({target: 'https://www.familysearch.org', changeOrigin: true, pathRewrite: {'^/proxy' : ''}}));
app.use('/data', proxy({target: 'https://beta.familysearch.org', changeOrigin: true, pathRewrite: {'^/data' : ''}}));

// Use morgan to log all incoming requests. Defaults to Apache style logs.
app.use(logger('dev'));

app.use(cookieParser());

// Enable session storage. This defaults to using an in-memory store which is
// only designed for development environments. It will leak memory. Use a
// different storage adapter in production, such as redis.
// https://www.npmjs.com/package/express-session
//
// We use the session to store the FS access token and the current user data.
app.use(session({
  secret: 'pedigree browser session secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: config.get('session.cookie.secure') }
}));

// check for session cookie
app.use(function sessionHandler(req, res, next){
  // console.log('checking session cookie', req.cookies);
  // console.log('checking session cookie', req.cookies['familysearch-sessionid']);
  if (req.cookies['familysearch-sessionid']) {
    req.session.fs_token = req.cookies['familysearch-sessionid']
  }
  next();
});

// Make the session available in templates and default to an empty object. If we
// don't default to an empty object then we would have to check for its 
// existence before accessing data in templates.
app.use(function(req, res, next){
  // console.log('checking session', req.session)
  res.locals.session = req.session || {};
  // console.log('session set', res.locals.session)
  next();
});

// Attach routes
app.use('/', require('./routes/index'));
app.use('/signin', require('./routes/signin'));
app.use('/signout', require('./routes/signout'));
app.use('/oauth-redirect', require('./routes/oauth-redirect'));
app.use('/pedigree', require('./routes/pedigree'));
app.use('/vr-pedigree', require('./routes/vr-pedigree'));
app.use('/:page', (req, res, next) => {
  res.render(req.params.page, {apiKey: config.get('FS.appKey')});
});

// Catch 404 and forward to error handler
app.use(function app404Handler(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function appErrorHandler(err, req, res, next) {
  
  // Set locals (template variables)
  // Only provide the error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
