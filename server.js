var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var index = require('./routes/index');
var users = require('./routes/users');

var monogDB = 'mongodb://Svbeck:Gullf1sk3n@ds157521.mlab.com:57521/blackscreen';
mongoose.connect(monogDB);
mongoose.Promise = global.Promise;
module.exports = app;//lets it be imported by www
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'pug')
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index)
app.use('/users', users)


db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log('success');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.post('/',function(req,res){

});

app.get('/', function(req,res){
	res.render('index', {title: 'hey', message: 'hello there'})
});

app.put('/', function(req,res){

});

app.delete('/', function(req,res){

});

app.listen(3000, function(){	//listen to port 300
		console.log('listening on 3000')
});
