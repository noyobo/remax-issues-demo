const { buildMini, getDefaultOptions: getRemaxDefaultOptions } = require('@remax/cli');
const path = require('path');
const less = require('@remax/plugin-less');
const webpack = require('webpack');
const RemaxAPI = require('@remax/cli/lib/API').default;

const mini = true;
const watch = true;
const target = 'wechat';
const analyze = false;
const sourceDir = 'src';
const mode = 'development';

function build({ cwd, alias }) {
  const remaxBuildOptions = {
    ...getRemaxDefaultOptions(),
    one: false, // 注册 @remax/one/node 到 API 上
    compressTemplate: mini,
    pxToRpx: false,
    analyze,
    cwd,
    rootDir: sourceDir,
    target: target,
    output: 'dist/' + target,
    watch,
    plugins: [less()],
    configWebpack({ config }) {
      config.optimization.clear();
      // 删除 clean-webpack-plugin 插件
      config.plugins.delete('clean-webpack-plugin');
      config.merge({
        optimization: {
          usedExports: true,
          minimize: mini,
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

      config.resolve.alias.merge(alias);

      config.plugin('defined').use(webpack.DefinePlugin, [
        {
          'process.env.NODE_ENV': JSON.stringify(mode),
          'process.env.PLATFORM': JSON.stringify(target),
          'process.env.REMAX_PLATFORM': JSON.stringify(target),
        },
      ]);
    },
  };

  const api = new RemaxAPI();
  // 注册 webpack 插件
  api.registerPlugins(remaxBuildOptions.plugins);
  const compiler = buildMini(api, remaxBuildOptions);

  compiler.hooks.done.tap('wff', (stats) => {
    console.log(
      stats.toString({
        colors: true,
        children: false,
        modules: false,
      })
    );
  });
}
const cwd = path.join(process.cwd(), './examples');
build({
  cwd,
  alias: {
    '@remax/runtime': path.dirname(require.resolve('@remax/runtime/package.json')),
    react: path.dirname(require.resolve('react/package.json')),
  },
});
