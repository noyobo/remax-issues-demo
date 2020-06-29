const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const alias = require('../webpack.alias');
module.exports = (config) => {
  config.resolve.alias.merge(alias);
};
