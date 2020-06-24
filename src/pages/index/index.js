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
        className={styles.div}
        onClick={() => {
          console.log('parent');
        }}
        onTouchMove={() => {
          console.log('parent move');
        }}
      >
        最外层元素
        <View
          className={styles.div}
          wechat-catchtouchmove={console.log}
          {...restProps}
        >
          绑定事件
        </View>
        <View className={styles.div}>未绑定</View>
      </View>
    );
  }
}
export default Home;
