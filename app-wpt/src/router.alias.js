/**
 * web app 路由形式有以下几种
 *
 * /:id
 * /:id@A.+
 * /xx:id
 * /xx:id@A.+
 *
 * @see https://github.com/tc39/proposal-regexp-named-groups
 */
const routerAlias = {
    '/miniProgram/cloudWarehouse/payResult': '/pages/warehouse/buyer/payResult/index', // 支付结果
    '/miniProgram/cloudWarehouse/warehouse': '/pages/warehouse/index', // 云仓页
    '/cloudWarehouse/goodStuff': '/pages/cloudNiceGoods/index', // 好货
    '/payOrder/cloudWarehouseActivityBid': '/pages/cloudNiceGoods/activityBid/index', // 0元拍
    '/webview': '/pages/home/index',
    '/cloudWarehouse/welfare/dragonBall': '/pages/welfare/dragonBall/index',
    '/cloudWarehouse/welfare': '/pages/welfare/index', // 福利
    '/cloudWarehouse/payActivity': '/pages/payActivity/index', // 支付龙珠活动
    '/cloudWarehouse/ShareBid': '/pages/shareDiscount/share/index', // 0元拍分享立减
    '/cloudWarehouse/SharePraise': '/pages/shareDiscount/praise/index', // 点赞
    '/uri/:uri@[0-9].*': function (params) {
        return `/pages/detail/index?uri=${params.uri}`;
    },
    '/uri/:uri@A.*': {
        wechat: function (params) {
            return `/pages/detail/index?uri=${params.uri}`;
        },
    },
};

export default routerAlias;
