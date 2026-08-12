---
repo: "jxxghp/MoviePilot-Frontend"
name: "MoviePilot-Frontend"
description: "MoviePilot前端"
readmeQualityOk: true
url: "https://github.com/jxxghp/MoviePilot-Frontend"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [49, 47]
stars: 303
forks: 247
openIssues: 17
closedIssues: 68
watchers: 3
contributors: 60
recentReleases: 0
createdAt: "2023-06-24T00:22:57Z"
lastCommitAt: "2026-08-12T05:13:54Z"
lastReleaseAt: "2023-08-29T11:44:59Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 96
undervaluedScore: 43
maintainers: ["jxxghp", "InfinityPacer", "LLL001a"]
openGraphImageUrl: "https://opengraph.githubassets.com/edbf2cdb559904ae76e7ce128e76412b557735bf1350ff1f0615eacb84188d46/jxxghp/MoviePilot-Frontend"
---

# MoviePilot-Frontend

*中文 | [English](https://github.com/jxxghp/MoviePilot-Frontend/blob/HEAD/README_EN.md)*

[MoviePilot](https://github.com/jxxghp/MoviePilot) 的前端项目，最低支持 Node.js `20.19`，推荐使用 Node.js `24`。

## 特性

- 基于 Vue 3 和 Vuetify 3 构建的现代化界面
- 使用 Vite 作为构建工具，提供快速的开发体验
- 支持多语言（中文/英文）
- 完整的插件系统支持，包括远程组件动态加载

## 开发部署

### 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (并禁用 Vetur).

### 配置Vite

请参阅 [Vite 配置参考](https://vitejs.dev/config/).

### 依赖安装

```sh
yarn
```

### 开发运行

```sh
yarn dev
```

### 编译打包

```sh
yarn build
```

### 单元测试

```sh
yarn test:run
yarn test:coverage
```

测试文件组织、共享测试设施、HTTP mock、覆盖率门禁和新增用例规范见[单元测试架构](https://github.com/jxxghp/MoviePilot-Frontend/blob/HEAD/docs/testing.md)。

ESLint、Prettier、Node 兼容范围及渐进式 CI 门禁见[前端代码质量工具链演进](https://github.com/jxxghp/MoviePilot-Frontend/blob/HEAD/docs/code-quality.md)。

### 静态运行

1. 使用 `nginx` 等Web服务器托管 `dist` 静态文件，nginx配置参考 `public/nginx.conf`。

2. 使用 `node` 命令直接运行`service.js`，默认监听 `3000` 端口，设置环境变量 `NGINX_PORT` 来调整运行端口。

```shell
node dist/service.js
```

### 模块联邦功能

MoviePilot 现已支持模块联邦（Module…
