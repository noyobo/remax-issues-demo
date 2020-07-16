const less = require('@remax/plugin-less');

module.exports = {
  one: false,
  pxToRpx: false,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [less()],
};
