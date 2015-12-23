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

app.get('/singleTarget', function (req, res) {
    res.sendFile(path.resolve('./public/singleTarget.html'));
});

app.get('/multipleTarget', function (req, res) {
    res.sendFile(path.resolve('./public/multipleTarget.html'));
});

app.get('/dnd', function (req, res) {
    res.sendFile(path.resolve('./public/dnd.html'));
});
app.get('/test', function (req, res) {
    res.sendFile(path.resolve('./public/test.html'));
});

app.get('/sortable', function (req, res) {
    res.sendFile(path.resolve('./public/sortable.html'));
});
app.listen(5000);
console.log("App listening on port 5000")
module.exports = app;
