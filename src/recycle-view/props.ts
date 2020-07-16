import * as React from 'react';

export interface BaseProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface DataItem {
  _visible?: boolean;
  /**
   * 元素下坐标阈值，由上一个元素的下坐标 + 自身高度
   */
  _endThreshold?: number;
  /**
   * 元素上坐标阈值 由上一个元素的下坐标
   */
  _startThreshold?: number;
  /**
   * 全局唯一 ID
   */
  _uniqueKey?: string;
  /**
   * 在当前组中的下标
   */
  _groupIndex?: number;
  height: number;
}

export type RecycleViewProps<I> = {
  /**
   * 数据源
   */
  dataSource: Array<I & DataItem>;
  /**
   * 渲染成员的方法
   * @param item 成员数据
   * @param key 当前成员的唯一 key
   */
  renderItem?: (item: I, key: string) => React.ReactNode;
  /**
   * 渲染成员的方法
   * @param item 成员数据
   * @param key 当前成员的唯一 key
   */
  children?: (item: I, key: string) => React.ReactNode;
  /**
   * 列表的列数
   */
  columns?: number;
  /**
   * 当前页面的滚动条 scrollTop 值
   */
  scrollTop: number;
  /**
   * 滚动节流, 单位毫秒
   */
  scrollThrottle?: number;
  /**
   * 虚拟列表骨架图
   */
  dataSkeleton?: string;
  /**
   * 加载完成， 当为 true 时不显示骨架图
   */
  finished?: boolean;
} & Omit<BaseProps, 'id'>;

export const defaultRecycleViewProps: Partial<RecycleViewProps<any>> = {
  columns: 2,
  dataSource: [],
  scrollTop: 0,
  scrollThrottle: 150,
};
