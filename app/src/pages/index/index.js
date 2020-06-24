import * as React from 'react';
import { View } from '@remax/wechat';
import styles from './index.css';

import { usePageEvent } from '@remax/macro';

export default function () {
  const [st, setSt] = React.useState(0);

  usePageEvent('onPageScroll', (res) => {
    console.log('onPageScroll', res.scrollTop);
    setSt(res.scrollTop);
  });

  const height = 100;

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setHeight(Math.floor(Math.random() * 300 + 100));
  //   }, 500);
  // });

  return (
    <View className={styles.app}>
      <View
        style={{
          height: (height + st) * 2 + 'px',
          backgroundColor: 'blue',
          top: 100,
        }}
      >
        变化的高度 {st}
      </View>
    </View>
  );
}
