var Bank = require('message-bank');
var cache = require('./bank.cache.js');

var bank = new Bank();

cache(bank, './cache/message-box.json');

module.exports = bank;