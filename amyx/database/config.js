var db = {};

db.server = 'localhost';
db.port = 27017;
db.database = 'ganglion-krambuhl';
db.url = 'mongodb://' + db.server + ':' + db.port + '/' + db.database;

module.exports = { db: db };