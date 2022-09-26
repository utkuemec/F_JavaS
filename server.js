process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var express = require('express');
var app = express();

var HOST = 'localhost'
var PORT = 3000

/*app.use('/', function(req, res) {
    
    console.log(`The request url is ${req.url}`)
    console.log(`The request hostname is ${req.hostname}`)

    res.send('Hello world');

    res.send('Hello World');
});
*/

    var hasName = function(req, res, next) {

    if (req.param('name')) {
    next();
    } 
    
    else {
    res.send('What is your name?');
    }
    };


    var sayHello = function(req, res, next) {
    var express = require('./config/express')
    res.send(`My name is ${req.params + req.param['name']}`)
    };

    
    app.get('/', hasName, sayHello);
    app.listen(3000);
    console.log('Server running at http://localhost:3000/');

    var app = express();

    var HOST = `localhost`
    var PORT = 3000


    app.listen(PORT);

    console.log('Server running at http://localhost:3000/');
    //http://${HOST}:${PORT}/
    module.exports = app;


