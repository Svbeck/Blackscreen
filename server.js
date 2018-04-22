var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


var monogDB = 'mongodb://Svbeck:Gullf1sk3n@ds157521.mlab.com:57521/blackscreen';
mongoose.connect(monogDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log('success');
});




app.post('/',function(req,res){

});

app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html')
});

app.put('/', function(req,res){

});

app.delete('/', function(req,res){

});

app.listen(3000, function(){	//listen to port 300
		console.log('listening on 3000')
});
