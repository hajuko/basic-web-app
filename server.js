var express = require('express');
var app = express();
var request = require('request');
var port = 1337;

app.use(express.static(__dirname + '/public'));

app.listen(port);

app.get('/test-request', function(req, res) {
    request('http://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
        }
    })
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

console.log('started at port: ' + port);

module.exports = app;
