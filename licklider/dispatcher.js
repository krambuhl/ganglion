var bank = require('./bank/bank.js');  

setInterval(function() {
  bank.dispatch({
    type: 'TWITTER',
    data: {
      timestamp: new Date(),
      dogs: Boolean(Math.round(Math.random()))
    }
  });
}, 10 * 1000);