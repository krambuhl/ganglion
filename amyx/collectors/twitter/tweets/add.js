module.exports = function(db, data, callback) {
  db.collection('tweets').insert(data, callback);
};