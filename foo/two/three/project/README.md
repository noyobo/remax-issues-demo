# Face.js

基于 remax 的多端研发体系

微信小程序，头条小程序，web

## Packages

- `@facejs/components` 多端组件，包含基础组件 & 扩展组件
- `@facejs/apis` 多端 API

## 开发

packages 目录下的文件夹都是一个独立的 npm 包，至少包含 `build` `watch` 两个命令，用于构建编译 & 开发时实时编译；

使用 yarn workspace 依赖管理方式

### 添加/移除三方依赖

`yarn workspace <packageName> add <deps>`

```bash
yarn workspace @facejs/components add eslint
```

`yarn workspace <packageName> remove <deps>`

```bash
yarn workspace @facejs/components remove eslint
```

### `@facejs/*` 间的相互依赖

`npx lerna add <依赖项> --scope=<目标>`

```
npx lerna add @facejs/apis --scope=@facejs/components
```

将 `@facejs/apis` 添加到 `@facejs/components/package.json` 的依赖项中

## 预览

执行 `yarn run dev` 选择对应的平台即可

## 添加一个 package

1. 从 master 新建一个分支 `add-package/<packageName>`
2. 将根目录下的文件夹 `_package/` 复制到 `packages/` 目录下，修改文件夹名称为格式 `face-<name>`，
3. 修改该目录下的 `package.json` `name` 字段为包名, 格式 `@facejs/<name>`
4. commit `chore: add xxxx` 并提交分支
5. 发起当前分支的 Merge Request 分配给 @农有宝

### 发布

1. 组件开发完成后由 @农有宝 合并分支并发布
