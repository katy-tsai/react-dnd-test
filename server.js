var express =require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.get('/dragSources', function (req, res) {
    res.sendFile(path.resolve('./public/dragSources.html'));
});

app.listen(3000);
console.log("App listening on port 3000")
module.exports = app;
