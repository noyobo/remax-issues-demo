import * as React from 'react';
import { View } from '@remax/wechat';
import styles from './index.css';

class Home extends React.Component {
  render() {
    const restProps = {
      onClick: (e) => {
        console.log('children tap', e);
      },
      catchTouchMove: (e) => {
        console.log('children move', e);
        // event.stopPropagation();
      },
    };
    return (
      <React.Fragment>
        <View
          data-id="p"
          className={styles.div}
          onTouchMove={(e) => {
            console.log('parent move', e);
          }}
          onClick={(e) => {
            console.log('parent tap', e);
          }}
        >
          最外层元素
          <View data-id="c" className={styles.div} {...restProps}>
            绑定事件
          </View>
        </View>
        <View data-id="c" className={styles.div} {...restProps}>
          绑定事件
        </View>
      </React.Fragment>
    );
  }
}
export default Home;
