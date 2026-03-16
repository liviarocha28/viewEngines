var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'ArenaFut' });
});

router.get('/sobre', function(req, res) {
  res.render('sobre', { title: 'Sobre' });
});

router.get('/agendamentos', function(req, res) {
  res.render('agendamentos', { title: 'Agendamentos' });
});

router.get('/alunos', function(req, res) {
  res.render('alunos', { title: 'Alunos' });
});

module.exports = router;