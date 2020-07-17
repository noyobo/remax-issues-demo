import React, { Fragment } from 'react';
import { mock } from 'mockjs';

import { Button, Text, View } from '@remax/wechat';
import { usePageEvent } from '@remax/macro';

import RecycleView from '../../recycle-view';

import styles from './index.less';

interface Item {
  height: number;
  data: { name: string };
}

const randomData = (): Item[] => {
  return Array.from({ length: 200 }).map(() => {
    return {
      height: Math.floor(150 + Math.random() * 250) + 24,
      data: mock({
        name: '@cname(2)',
      }),
    };
  });
};

export default function DemoRecycleViewSimple() {
  const [dataSource, setDtaSource] = React.useState(randomData());
  const [scrollTop, setScrollTop] = React.useState(0);
  const fetching = React.useRef(false);
  const page = React.useRef(1);

  React.useEffect(() => {
    fetching.current = false;
  }, [dataSource.length]);

  const ended = page.current === 20;

  usePageEvent('onReachBottom', () => {
    if (!ended) {
      page.current = page.current + 1;
      const newData = randomData();
      setDtaSource((d) => {
        return [...d, ...newData];
      });
    }
  });

  usePageEvent('onPageScroll', (res) => {
    setScrollTop(res.scrollTop);
  });

  return (
    <Fragment>
      <RecycleView
        finished={ended}
        scrollTop={scrollTop}
        dataSource={dataSource}
        dataSkeleton={
          'https://cdn.weipaitang.com/static/20200609bc6487a0-0ac1-87a00ac1-c212-f3a04c13fd85-W168H474'
        }
        style={{ padding: '0 24rpx' }}
        renderItem={(item, key) => (
          <View
            key={key}
            className={styles.item}
            style={{
              height: item.height - 24,
            }}
          >
            {key}
            <Text>{item.data.name}</Text>
          </View>
        )}
      />
      {ended ? (
        <View className={styles.loading}>到底了</View>
      ) : (
        <View className={styles.loading}>正在加载...</View>
      )}
      {/* <View>第三次 setData </View> */}
    </Fragment>
  );
}
