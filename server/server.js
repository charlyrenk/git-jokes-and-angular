var express = require('express');
var bodyParser = require('body-parser');
var jokes = require('./routes/jokes');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/jokes', jokes);

app.listen(port, function () {
  console.log('server up on port: ', port);
}); 