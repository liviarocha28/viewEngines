var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/* VIEW ENGINE */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* MIDDLEWARES */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* ARQUIVOS ESTÁTICOS (CSS, imagens etc) */
app.use(express.static(path.join(__dirname, 'public')));

/* ROTAS */
app.use('/', indexRouter);      // home, sobre, produtos
app.use('/users', usersRouter); // rota users

/* ERRO 404 */
app.use(function(req, res, next) {
  next(createError(404));
});

/* TRATAMENTO DE ERROS */
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;