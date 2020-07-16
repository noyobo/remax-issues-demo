import { DataItem } from './props';
import transformToAbsolutePx from './transformToAbsolutePx';

export default function getDataGroups(options: {
  dataSource: DataItem[];
  columns: number;
  pageCaliper: [number, number];
}) {
  const { dataSource, columns, pageCaliper } = options;
  // 总高度
  const heightGroups: number[] = [];
  const dataGroups: any[][] = [];
  // 顶部填充高度
  const topOffsetGroup: number[] = [];
  // 底部填充高度
  let bottomOffsetGroup: number[] = [];

  for (let index = 0; index < columns; index++) {
    heightGroups.push(0);
    topOffsetGroup.push(0);
    bottomOffsetGroup.push(0);
    dataGroups.push([]);
  }

  dataSource.forEach((item, index) => {
    const minHeight = Math.min(...heightGroups);
    const targetGroupIndex = Math.max(heightGroups.indexOf(minHeight), 0);
    const dataGroup = dataGroups[targetGroupIndex];

    if (typeof item.height === 'number') {
      const absoluteHeight = transformToAbsolutePx(item.height);

      item._uniqueKey = `g_${targetGroupIndex}_${index}`;

      heightGroups[targetGroupIndex] += absoluteHeight;
      // 上一个元素的下标值
      const prevItemEndThreshold = dataGroup[dataGroup.length - 1]
        ? dataGroup[dataGroup.length - 1]._endThreshold
        : 0;

      item._startThreshold = prevItemEndThreshold;
      // 装换为 px 单位， 因为 onPageScroll 返回的是 px 单位
      item._endThreshold = prevItemEndThreshold + absoluteHeight;
      if (item._endThreshold! < pageCaliper[0]!) {
        // 在屏幕上方
        item._visible = false;
        topOffsetGroup[targetGroupIndex] += absoluteHeight;
      } else if (item._startThreshold! > pageCaliper[1]) {
        // 在屏幕下方
        item._visible = false;
        bottomOffsetGroup[targetGroupIndex] += absoluteHeight;
      } else {
        item._visible = true;
      }

      item._groupIndex = dataGroup.length;
      dataGroup.push(item);
    } else {
      console.warn('RecycleView 接受的数据, 必须含 height 字段!', item);
    }
  });

  // 获取最大列高度
  const maxGroupHeight = Math.max(...heightGroups);

  // 补齐下填充对齐
  bottomOffsetGroup = bottomOffsetGroup.map((height, index) => {
    return height + maxGroupHeight - heightGroups[index];
  });

  return { dataGroups, topOffsetGroup, bottomOffsetGroup, maxGroupHeight };
}
