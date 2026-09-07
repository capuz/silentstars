---
repo: "lincenying/eslint-config"
name: "eslint-config"
description: "vue3(2)/ts/react 的eslint 扁平化规则"
readmeQualityOk: true
url: "https://github.com/lincenying/eslint-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["eslint", "typescript", "flat", "vue2", "vue3"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-03T08:14:41Z"
lastCommitAt: "2026-09-07T02:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 37
maintainers: ["lincenying"]
openGraphImageUrl: "https://opengraph.githubassets.com/455511e9722c422ee7895fdfa0e96449e920e8b30707a0ed12747fb76d596ec5/lincenying/eslint-config"
---

# @lincy/eslint-config Eslint扁平化规则

> Thanks to [sxzz/eslint-config](https://github.com/sxzz/eslint-config) and [antfu/eslint-config](https://github.com/antfu/eslint-config) for the inspiration and reference.

- 单引号，无结尾分号
- 自动格式化
- 专为与 TypeScript、Vue(2/3)、React 一起使用而设计，开箱即用
- 也适用于 json、yaml、markdown
- import导入排序, 对象字⾯量项尾逗号
- 合理的默认值，最佳实践，只需一行配置
- .gitignore默认支持
- 需要 ESLint v9.5.0+
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- 使用 [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
- **风格原则**: 读取最小，差异稳定

## Usage

### Install

```bash
pnpm add -D eslint @lincy/eslint-config
```

### Create config file

```js
// eslint.config.mjs
import lincy from '@lincy/eslint-config'

export default lincy()
```

> 通常您不需要`.eslintignore`，因为它已由预设提供。

### 在 package.json 中添加脚本

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### IDE support (保存时自动修复)

#### vscode

安装 [VS Code ESLint扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

将以下设置添加到您的“settings.json”：

```jsonc
{
  // 禁用默认的格式化
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // 开启自动修复…
