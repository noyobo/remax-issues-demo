import { View } from 'remax/one';
import { usePageEvent } from '@remax/macro';
import React from 'react';

export default function () {
  console.log(12321);
  usePageEvent('onPageScroll', (e) => {
    console.log(e);
  });
  return <View>滚动</View>;
}
