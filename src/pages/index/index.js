import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import Link from '../../../components/Link';
import HOC from './Hoc.js';

class Home extends React.Component {
  onHide() {
    console.log('hide');
  }
  onReady() {
    console.log('ready');
  }
  render() {
    return (
      <View className={styles.app}>
        <Link>Link 标签</Link>
        <View className={styles.header}>
          <Image
            src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
            className={styles.logo}
            alt="logo"
          />
          <View className={styles.text}>
            编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
            开始
          </View>
        </View>
      </View>
    );
  }
}
export default HOC(Home);
