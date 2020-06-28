import React from 'react';

import Login from '../../components/Login';
import HomeTabs from '../../components/TabBar';

// import * as appConfig from '../../app.config';
// import * as pageConfig from './index.config';

export default class CloudNiceGoods extends React.Component {
    render() {
        return (
            <>
                {/* <NavigationBar title='好货' /> */}
                {/* 顶部留白 */}
                <HomeTabs className="tabBar" current={1} />
                <Login />
            </>
        );
    }
}
