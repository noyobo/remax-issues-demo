import * as React from 'react';
import useThrottleFn from 'react-use/esm/useThrottleFn';
import clsx from 'clsx';

import { getSystemInfoSync } from '@remax/wechat';

import { View } from '@remax/wechat';
import getDataGroups from './getDataGroups';
import { defaultRecycleViewProps, RecycleViewProps } from './props';

import styles from './index.less';

const { windowHeight } = getSystemInfoSync(); // 页面高度

export default function RecycleView<I, C extends React.FunctionComponent>(
  props: RecycleViewProps<I>
) {
  const {
    children,
    className,
    columns,
    dataSkeleton,
    dataSource,
    renderItem,
    scrollTop,
    scrollThrottle,
    style,
    finished,
  } = props;

  const rootScrollTop = React.useRef(0);

  const getPageCaliper = (scrollTop: number): [number, number] => {
    const recycleViewScrollTop = Math.max(
      scrollTop! - rootScrollTop.current!,
      0
    );
    // 得到页面展现区间值 PX 单位
    return [
      recycleViewScrollTop - windowHeight,
      recycleViewScrollTop + windowHeight + windowHeight,
    ];
  };

  const [pageCaliper, setPageCaliper] = React.useState(
    getPageCaliper(scrollTop!)
  );

  useThrottleFn(
    (scrollTop) => {
      const newPageCaliper = getPageCaliper(scrollTop);
      setPageCaliper(newPageCaliper);
    },
    scrollThrottle,
    [scrollTop!]
  );

  const {
    dataGroups,
    topOffsetGroup,
    bottomOffsetGroup,
    maxGroupHeight,
  } = getDataGroups({
    dataSource,
    columns: columns as number,
    pageCaliper: pageCaliper,
  });

  const renderChildren =
    children ||
    renderItem ||
    function () {
      return <View>请定义 renderItem 方法</View>;
    };

  return (
    <View
      className={clsx(styles.recycleView, className)}
      style={{ ...style, height: maxGroupHeight + 'px' }}
    >
      {dataGroups.map((dataGroup, columnIndex) => {
        const lastGroupIndex = dataGroup.length - 1;
        const visibleItems = dataGroup.filter((item) => item._visible);
        // 最后一个元素渲染了
        const isLastVisible = visibleItems.some(
          (item) => item._groupIndex === lastGroupIndex
        );
        // 分组数据的长度
        return (
          <View key={columnIndex} className={styles.column}>
            <View
              style={{
                height: topOffsetGroup[columnIndex] + 'px',
                overflow: 'hidden',
                backgroundImage: `url(${dataSkeleton})`,
              }}
              className={clsx(styles.placeholder, styles[`placeholder-top`])}
            />
            {visibleItems.map((item, index) => {
              return (
                <View
                  key={item._uniqueKey}
                  style={{ height: item.height }}
                  data-group={columnIndex}
                  data-index={index}
                  data-s={item._startThreshold}
                  data-e={item._endThreshold}
                >
                  {renderChildren(item, item._uniqueKey)}
                </View>
              );
            })}
            {finished && isLastVisible ? null : (
              <View
                style={{
                  height: bottomOffsetGroup[columnIndex] + 'px',
                  overflow: 'hidden',
                  backgroundImage: `url(${dataSkeleton})`,
                }}
                className={clsx(
                  styles.placeholder,
                  styles[`placeholder-bottom`]
                )}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

RecycleView.defaultProps = defaultRecycleViewProps;
