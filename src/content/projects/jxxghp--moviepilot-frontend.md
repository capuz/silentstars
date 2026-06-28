---
repo: "jxxghp/MoviePilot-Frontend"
name: "MoviePilot-Frontend"
description: "MoviePilot前端"
url: "https://github.com/jxxghp/MoviePilot-Frontend"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [70, 26]
stars: 296
forks: 234
openIssues: 18
closedIssues: 61
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2023-06-24T00:22:57Z"
lastCommitAt: "2026-06-28T01:35:50Z"
lastReleaseAt: "2023-08-29T11:44:59Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 95
undervaluedScore: 43
maintainers: ["jxxghp", "InfinityPacer", "Mister-album"]
openGraphImageUrl: "https://opengraph.githubassets.com/a33f44e885836bf12b2515b0ed41450336d7cee163454c5ed96ad6347bf8f991/jxxghp/MoviePilot-Frontend"
---

# MoviePilot-Frontend

*中文 | [English](README_EN.md)*

[MoviePilot](https://github.com/jxxghp/MoviePilot) 的前端项目，NodeJS版本：>= `v20.12.1`。

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

### 静态运行

1. 使用 `nginx` 等Web服务器托管 `dist` 静态文件，nginx配置参考 `public/nginx.conf`。

2. 使用 `node` 命令直接运行`service.js`，默认监听 `3000` 端口，设置环境变量 `NGINX_PORT` 来调整运行端口。

```shell
node dist/service.js
```

### 模块联邦功能

MoviePilot 现已支持模块联邦（Module Federation）功能，允许插件开发者创建可动态加载的远程组件，实现更丰富的插件用户界面。

- [模块联邦开发指南](docs/module-federation-guide.md) - 如何开发远程组件插件
- [模块联邦问题排查指南](docs/federation-troubleshooting.md) - 常见问题和解决方案
- [插件远程组件示例](examples/plugin-component/) - 开发插件组件的完整示例项目
