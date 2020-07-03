const node = require('@remax/wechat/node').default;

// const defaultHostComponents = node().hostComponents;

// defaultHostComponents.set('view', {
//   ...defaultHostComponents.get('view'),
//   props: [...defaultHostComponents.get('view').props, 'catchtouchmove'],
// });

module.exports = {
  one: false,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [
    //   {
    //     // hostComponents: defaultHostComponents,
    //     // processProps: ({ componentName, props, additional, node }) => {
    //     //   if (componentName === 'view') {
    //     //     return [...props, 'catchtouchmove'];
    //     //   }
    //     //   return props;
    //     // },
    //   },
  ],
  configWebpack({ config }) {
    config.resolve.alias.merge({
      '@remax/runtime':
        '/Users/noyobo/home/github/remax/packages/remax-runtime',
    });
  },
};
