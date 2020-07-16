import { getSystemInfoSync } from '@remax/wechat';

const BASE_DEVICE_WIDTH = 750;

let info = getSystemInfoSync();

const isIPhone = info.platform === 'ios';
const deviceWidth = info.screenWidth || 375;
const deviceDPR = info.pixelRatio || 2;

const eps = 1e-4;

/**
 * 将整数单位转换到绝对单位 px
 *
 * @param v
 *
 * @examples
 * 750 => 375
 */
export default function transformRpx(v: number) {
  if (v === 0) {
    return 0;
  }
  v = (v / BASE_DEVICE_WIDTH) * deviceWidth;
  v = Math.floor(v + eps);

  if (v === 0) {
    if (deviceDPR === 1 || !isIPhone) {
      return 1;
    }
    return 0.5;
  }
  return v;
}

// 750rpx - 414px
