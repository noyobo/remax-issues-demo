const path = require('path');

module.exports = {
  one: false,
  rootDir: 'src',
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    config.resolve.alias.merge({
      '@components': path.join(__dirname, '../components'),
      '@facejs/components': path.join(
        __dirname,
        '../packages/face-components/src'
      ),
      react: path.join(__dirname, '../node_modules/react'),
    });
  },
};
