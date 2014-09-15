var express = require('express'),
    app = express();

app.use(express.logger());

var title = '';

app.set('title', title);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.use(express.static(__dirname + '/public'));
app.use(function(req,res) {
	res.status(404);
    res.render('404.jade', {title: '404: File Not Found'});
});
app.use(function(error,req,res,next) {
    res.status(500);
    res.render('500.jade', {title:'500: Internal Server Error', error: error});
});
var server = app.listen(process.env.PORT, function() { 
 console.log(__dirname);
 console.log('Express server started on port %s', process.env.PORT);
});



