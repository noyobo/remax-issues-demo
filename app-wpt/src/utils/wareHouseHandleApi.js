import { isWechat } from 'platform.macro';

import { handleApi } from '@packages/lib-api';

// 云仓小程序后端接口前缀为'wechat-warehouse'，H5则是'wechat'，在这里简单封装一下
export default (config = {}, option = {}) => {
    const namespace = isWechat ? 'wechat-warehouse' : 'wechat';
    return handleApi(config, {
        namespace,
        ...option,
    });
};
