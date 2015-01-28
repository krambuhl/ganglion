module.exports = function(data, callback) {
  db.collection('tweets').find(data, callback);
};