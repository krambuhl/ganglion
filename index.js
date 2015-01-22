var server = require('http').createServer();
var io = require('socket.io')(server);
var MsgBank = require('message-bank');
var bank = new MsgBank();

io.on('connection', function(socket){
  var id = bank.subscribe('CONTACTS', function(d, o) {
    socket.emit('data', { type: 'CONTACTS', data: d, options: o });
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
      timestamp: +new Date(),
      dogs: !!(i++)
    }
  });
}, 5000);


server.listen(4201);