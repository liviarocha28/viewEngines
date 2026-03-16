var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/sobre', function(req, res) {
  res.render('sobre', { title: 'Sobre' });
});

router.get('/produtos', function(req, res) {
  res.render('produtos', { title: 'Produtos' });
});

module.exports = router;