var database = require('./database/connection.js');
var server = require('./server/app.js');

database(function(err, db) {
  server(db);
});