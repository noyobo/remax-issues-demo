module.exports = function babelConfig(api) {
  // TODO web 构建也读取这份配置
  api.cache(true);
  return {
    presets: [
      [
        require.resolve('babel-preset-remax'),
        { typescript: true, decorators: { legacy: true }, classProperties: { loose: true } },
      ],
    ],
    plugins: [
      'babel-plugin-minify-dead-code-elimination',
      'babel-plugin-transform-prune-unused-imports',
      [
        require.resolve('babel-plugin-import'),
        {
          libraryName: 'react-use',
          libraryDirectory: 'esm',
          camel2DashComponentName: false,
        },
      ],
    ],
  };
};
