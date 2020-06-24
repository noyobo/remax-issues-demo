import * as React from 'react';
import { View } from '@remax/wechat';
import styles from './index.css';

export default class A extends React.Component {
  state = { paddingBottom: '0px' };

  componentDidMount() {
    this.setState({ paddingBottom: '34px' });
  }

  render() {
    const { paddingBottom } = this.state;
    console.log('render');
    return (
      <View
        style={{
          paddingBottom,
        }}
      >
        变化的高度 {paddingBottom}
      </View>
    );
  }
}
