const chalk = require('chalk');

module.exports = {
  info(message) {
    console.log(chalk`{gray [site]} ${message}`);
  },

  success(message) {
    console.log(chalk`{gray [site]} {green ${message}}`);
  },

  error(message) {
    console.log(chalk`{gray [site]} {red ${message}}`);
  }
};
