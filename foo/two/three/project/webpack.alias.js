const path = require('path');

module.exports = {
  '@remax/runtime': path.dirname(require.resolve('@remax/runtime/package.json')),
  react: path.dirname(require.resolve('react/package.json')),
};
