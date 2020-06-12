import { View } from 'remax/one';
import { usePageEvent } from '@remax/macro';
import React from 'react';

export default function () {
  usePageEvent('onPageScroll', (e) => {
    console.log('onScroll', e);
  });
  return <View>滚动</View>;
}
