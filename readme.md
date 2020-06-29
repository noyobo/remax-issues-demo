1. `cd foo/two/three/project`
2. `yarn install`
3. `node ./scripts/dev2.js`
4. 打开微信开发者工具导入 `foo/two/three/project/examples/dist/wechat`， 填写一个测试号，滚动 onPageScroll 滚动正常

# 紧接着复现步骤

1. `cd ../../../../foo/cli`
2. `yarn install`
3. `cd ../two/three/project`
4. `node ./scripts/dev.js`
5. 打开微信开发者工具导入 `foo/two/three/project/examples/dist/wechat`， 填写一个测试号，滚动 onPageScroll 滚动无效

`./scripts/dev.js` 引用了外部的文件，也只是将 dev2.js 的内容复制了出去。
