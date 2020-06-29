import React, { Component } from 'react';
import classnames from 'classnames';

import { Image, Text, View } from '@remax/one';

import styles from './index.m.less';

class TabBar extends Component {
  state = {
    paddingBottom: 0,
  };

  componentDidMount() {
    this.setHeight();
  }

  setHeight = () => {
    this.setState({
      paddingBottom: true ? '34px' : '',
    });
  };

  render() {
    const { menus, className, handleClick = () => {} } = this.props;
    const { paddingBottom } = this.state;
    console.log(paddingBottom, 'paddingBottom');
    return (
      <View
        className={classnames(styles.tabbar, className)}
        style={{ paddingBottom: paddingBottom }}
      >
        {menus.map((menu) => {
          return (
            <View
              key={menu.name}
              className={classnames(styles.menu, {
                [styles.activeMenu]: menu.selected,
              })}
              onClick={() => handleClick(menu)}
            >
              <Image
                className={styles.icon}
                src={menu.selected ? menu.selectedIcon : menu.icon}
                mode="widthFix"
              />
              <Text className={styles.name}>{menu.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default TabBar;
