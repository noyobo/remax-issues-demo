import * as React from 'react';
import { View } from '@remax/wechat';
import styles from './index.css';

class Home extends React.Component {
  render() {
    const restProps = {
      'wechat-catchtap': () => {
        console.log('catch tap');
      },
      'wechat-bindtap': console.log,
    };
    return (
      <View
        className={styles.app}
        {...restProps}
        wechat-catchtouchmove={console.log}
      >
        绑定事件
      </View>
    );
  }
}
export default Home;
