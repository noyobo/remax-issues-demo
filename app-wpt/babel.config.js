module.exports = function babelConfig(api) {
    api.cache(true);
    // remax 自定义 babel
    return {
        presets: [
            [
                require.resolve('babel-preset-remax'),
                { typescript: false, decorators: { legacy: true }, classProperties: { loose: true } },
            ],
        ],
        plugins: ['babel-plugin-minify-dead-code-elimination', 'babel-plugin-transform-prune-unused-imports'],
    };
};
