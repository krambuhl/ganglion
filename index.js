var server = require('http').createServer();
var io = require('socket.io')(server);

var bank = require('./lib/bank.js');

server.listen(5000);