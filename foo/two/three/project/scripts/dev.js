const build = require('../../../../cli/dev2');
const path = require('path');

const cwd = path.join(process.cwd(), './examples');
build({
  cwd,
  alias: {
    '@remax/runtime': path.dirname(require.resolve('@remax/runtime/package.json')),
    react: path.dirname(require.resolve('react/package.json')),
  },
});
