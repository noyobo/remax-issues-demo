const {
  buildMini,
  getDefaultOptions: getRemaxDefaultOptions,
} = require('@remax/cli');
const webpack = require('webpack');
const less = require('@remax/plugin-less');
const cwd = process.cwd();
const path = require('path');

const RemaxAPI = require('@remax/cli/lib/API').default;

const target = 'wechat';
const mode = 'development';

process.env.REMAX_DEBUG = 'yes';

const remaxBuildOptions = {
  ...getRemaxDefaultOptions(),
  one: false, // 注册 @remax/one/node 到 API 上
  compressTemplate: true,
  pxToRpx: false,
  analyze: false,
  cwd: path.join(cwd, 'app-wpt'),
  rootDir: 'src',
  target: 'wechat',
  output: 'dist/wechat',
  watch: true,
  plugins: [less()],
  configWebpack({ config }) {
    config.optimization.clear();
    // 删除 clean-webpack-plugin 插件
    config.plugins.delete('clean-webpack-plugin');
    config.merge({
      optimization: {
        usedExports: true,
        minimize: true,
        runtimeChunk: { name: 'runtime' },
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            // 项目内公用的
            common: { name: 'common', minChunks: 2, priority: 1 },
            // 依赖中公用的
            vendors: {
              name: 'vendors',
              minChunks: 2,
              test: (module) => {
                return /[\\/]node_modules[\\/]/.test(module.resource);
              },
              priority: 10,
            },
          },
        },
      },
      performance: {
        hints: false,
      },
    });

    config.plugin('defined').use(webpack.DefinePlugin, [
      {
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.PLATFORM': JSON.stringify(target),
        'process.env.REMAX_PLATFORM': JSON.stringify(target),
      },
    ]);

    require('../app-wpt/webpack.config')(config);
  },
};
const api = new RemaxAPI();
// 注册 webpack 插件
api.registerPlugins(remaxBuildOptions.plugins);
const compiler = buildMini(api, remaxBuildOptions);
