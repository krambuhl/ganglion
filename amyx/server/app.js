var server = require('express')();

// var addTweet = require('./manip/twitter/addTweet.js');

server.get('/', require('./routes/index.js'));
server.get('/twitter', require('./routes/twitter.js'));


module.exports = function(db) {
  server.listen(process.env.PORT);
  return server;
};