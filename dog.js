const fs = require('fs');
const util = require('util');

module.exports = function (launcher) {
  const logFile = fs.createWriteStream(__dirname + '/woof-woof/' + launcher + '.log', {
    flags: 'a',
  });
  return {
    woof(...args) {
      logFile.write(util.format(...args) + '\n');
    },
    headers(response) {
      this.woof(response.headers);
    },
    status(response) {
      this.woof(response.status, response.statusText);
    }
  };
};
