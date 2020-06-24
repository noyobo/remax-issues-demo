import React, { Component } from 'react';

import { View } from '@remax/one';

class TabBar extends Component {
  state = {
    paddingBottom: '0px',
  };

  componentDidMount() {
    console.log('设置 34');
    // setTimeout(() => {
    this.setState({
      paddingBottom: '34px',
    });
    // }, 1);
  }

  render() {
    const { paddingBottom } = this.state;
    return (
      <View style={{ paddingBottom, backgroundColor: '#f00' }}>高度的变化</View>
    );
  }
}

export default TabBar;
