var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'produto' });
});

router.get('/chocolate', function(req, res, next) {
  res.render('index', { title: 'chocolate' });
});

module.exports = router;