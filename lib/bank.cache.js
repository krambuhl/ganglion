var fs = require('fs');

function readCache(bank, url) {
  fs.readFile(url, 'utf8', function (err, data) {
    if (!err) {
      bank.dispatch(JSON.parse(data));
    }
  });
}

function writeCache(url, data) {
  fs.writeFile(url, JSON.stringify(data), function (err) {
    if (err) return console.log(err);
  });
}

module.exports = function(bank, url) {
  readCache(bank, url);

  bank.subscribe(function(d, o, t) {
    var sum = [];
    for (var row in bank._store) {
      sum.push({
        type: row,
        data: bank._store[row].data,
        options: bank._store[row].options
      });
    }

    writeCache(url, sum);
  });
};