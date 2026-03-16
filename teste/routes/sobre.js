var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sobre' });
});

router.get('/donas', function(req, res, next) {
  res.render('index', { title: 'donas' });
});

module.exports = router;