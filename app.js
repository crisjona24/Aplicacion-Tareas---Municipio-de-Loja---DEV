var createError = require('http-errors');
var express = require('express');
//var mongoose = require("mongoose"); VARIABLE PARA TRAER EL MODULO DE MONGOSE
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// RUTAS 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// FIN RUTAS

var session = require('express-session');
var flash = require('express-flash-notification');
var app = express();

//configurar mongoose

// SE BORRA LA CONFIGURACION PARA MONGOSE //
/*
var db,db_address, mongoose;
db_address = "127.0.0.1:27017/apptareas";

mongoose.connection.on("open", function(ref){
  return console.log("Se conecto al servidor");
});

mongoose.connection.on("error", function(err){
  return console.log("No se conecto al servidor"+ err);
});

try{
  mongoose.connect("mongodb://" + db_address);
  db = mongoose.connection;
  console.log("Server up!!");
}catch(e){
  console.log("No server UP :(");
}
//Fin configuracion de mongose
*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Confuguracion de sesion
app.use(session({
  secret:'apptareas',
  resave: true,
  saveUninitialized: true
}));
app.use(flash(app));
//Fin configuracion de sesion


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
