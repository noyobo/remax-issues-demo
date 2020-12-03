import * as React from 'react';
import { View, Input } from 'remax/wechat';

class Home extends React.Component {
    onHide() {
        console.log('hide');
    }
    onReady() {
        console.log('ready');
    }
    render() {
        return (
            <View>
                <Input
                    placeholder="搜索属性"
                    wechat-confirm-type="search"
                    wechat-bindconfirm={console.log}
                />
            </View>
        );
    }
}
export default Home;
