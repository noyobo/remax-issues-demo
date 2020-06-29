// 用于测试 github/remax 文件
const path = require('path');
module.exports = {
  cwd: path.join(__dirname, 'examples'),
  one: true,
  output: 'dist/wechat',
  rootDir: 'src',
  plugins: [require('@remax/plugin-less')()],
  configWebpack({ config }) {
    config.resolve.alias.merge({
      '@remax/runtime': path.dirname(require.resolve('@remax/runtime/package.json')),
      react: path.dirname(require.resolve('react/package.json')),
    });
  },
};
