var express = require('express');
var router = express.Router();
var restError = require('../lib/rest-error');
var async = require('async');
const config = require('config');

// Setup the FS sdk client before handling any requests on this router.
router.use(require('../middleware/fs-client'));

// Make sure the user is signed in before handling any requests on this router.
router.use(require('../middleware/fs-session'));

router.use((req, res, next) => {
  console.log('res.locals.session', res.locals.session)
  res.render('vr-pedigree', {apiKey: config.get('FS.appKey')});
});

module.exports = router;
