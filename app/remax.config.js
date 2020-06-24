const path = require('path');

module.exports = {
  one: false,
  rootDir: 'src',
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    config.resolve.alias.merge({
      react: path.join(__dirname, '../node_modules/react'),
    });
  },
};
