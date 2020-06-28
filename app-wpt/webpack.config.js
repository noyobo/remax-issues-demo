module.exports = function (config) {
    config.resolve.alias.merge({
        react: require.resolve('react'),
    });
};
