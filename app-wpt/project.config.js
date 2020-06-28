// 用于配置各端小程序 project.json 文件
const project = {
    projectname: '大宅云仓',
};

exports.wechat = {
    ...project,
    appid: 'wx1b2cd540504777d4', // 大宅云仓 APPID
    // appid: 'wx9bdbecd818c3db9f',
};

exports.toutiao = {
    ...project,
    appid: 'testappid',
};
