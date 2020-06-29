module.exports = ({ options }) => {
  return {
    plugins: {
      // 继承 remax 默认的插件配置
      ...options.plugins,
      // 添加其他插件
      [require.resolve('postcss-units-transform')]: {
        divisor: 1 / 100,
        multiple: 1,
        decimalPlaces: 2,
        sourceUnits: 'rem',
        targetUnits: 'rpx',
        comment: 'no',
      },
    },
  };
};
