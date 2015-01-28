var MongoClient = require('mongodb').MongoClient;

var config = require('../../config.js');

module.exports = function(callback) {
  return MongoClient.connect(config.db.url, callback);
};