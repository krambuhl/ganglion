var server = require('http').createServer();
var io = require('socket.io')(server);
var fs = require('fs');

var bank = require('./lib/bank.js');

io.on('connection', function(socket){
  var id = bank.subscribe(function(d, o, t) {
    socket.emit('data', { type: t, data: d, options: o });
  });

  socket.on('disconnect', function(){
    bank.unsubscribe(id);
  });
});

var cache;
fs.readFile('./cache/message-box.json', 'utf8', function (err, data) {
  if (!err) {
    cache = JSON.parse(data);
    bank.dispatch(cache);
  }
});

bank.subscribe(function(d, o, t) {
  var sum = [];
  for (var row in bank._store) {
    sum.push({
      type: row,
      data: bank._store[row].data,
      options: bank._store[row].options
    });
  }

  fs.writeFile('./cache/message-box.json', JSON.stringify(sum), function (err) {
    if (err) return console.log(err);
  });
});


var i = 0;
setInterval(function() {
  bank.dispatch({
    type: 'TWITTER',
    data: {
      timestamp: new Date(),
      dogs: Boolean((i++) % 2)
    }
  });
}, 10 * 1000);


server.listen(4201);