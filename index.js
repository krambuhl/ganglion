var server = require('http').createServer();
var io = require('socket.io')(server);

var bank = require('./lib/bank.js');

io.on('connection', function(socket){
  var id = bank.subscribe(function(d, o, t) {
    socket.emit('data', { type: t, data: d, options: o });
  });

  socket.on('disconnect', function(){
    bank.unsubscribe(id);
  });
});

var i = 0;
setInterval(function() {
  bank.dispatch({
    type: 'CONTACTS',
    data: {
      timestamp: new Date(),
      dogs: Boolean((i++) % 2)
    }
  });
}, 5 * 1000);


server.listen(4201);