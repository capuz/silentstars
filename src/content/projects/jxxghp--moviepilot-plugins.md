---
repo: "jxxghp/MoviePilot-Plugins"
name: "MoviePilot-Plugins"
description: "MoviePilot官方插件市场"
readmeQualityOk: true
url: "https://github.com/jxxghp/MoviePilot-Plugins"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 423
forks: 654
openIssues: 9
closedIssues: 493
watchers: 2
contributors: 95
recentReleases: 0
createdAt: "2023-11-01T02:24:04Z"
lastCommitAt: "2026-08-01T06:13:50Z"
lastReleaseAt: "2025-10-08T02:31:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 43
maintainers: ["jxxghp", "InfinityPacer", "iamchq"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdcf87b640c8796cf6b1f68671caa60894f4761c0fe8631ff0e4ae2b94eaf51b/jxxghp/MoviePilot-Plugins"
---

# MoviePilot-Plugins

MoviePilot 官方插件仓库，也是 MoviePilot 插件市场默认读取的插件索引与源码仓库：
<https://github.com/jxxghp/MoviePilot-Plugins>

这个仓库本身并不是独立运行时，插件真正的运行宿主在后端仓库 `MoviePilot`，插件 UI 的渲染宿主在前端仓库 `MoviePilot-Frontend`。因此，开发插件时需要同时理解这三个仓库的分工。

## 文档导航

- [仓库指南](https://github.com/jxxghp/MoviePilot-Plugins/blob/HEAD/docs/Repository_Guide.md)：先看这份，了解本仓库的目录、元数据、发布链路，以及和主仓库/前端仓库的边界。
- [V2 插件开发指南](https://github.com/jxxghp/MoviePilot-Plugins/blob/HEAD/docs/V2_Plugin_Development.md)：开发或迁移 V2 插件时的主文档，覆盖生命周期、渲染模式、接口能力和校验建议。
- [MoviePilot 前端模块联邦开发指南](https://github.com/jxxghp/MoviePilot-Frontend/blob/v2/docs/module-federation-guide.md)：当插件需要使用 Vue 远程组件时必读。
- [常见问题索引](https://github.com/jxxghp/MoviePilot-Plugins/blob/HEAD/docs/FAQ.md)：FAQ 已拆分为独立文档，适合按场景查阅。

## 仓库定位

- `MoviePilot` 负责插件加载、事件分发、API 注册、公共服务、数据持久化和权限控制。
- `MoviePilot-Frontend` 负责插件市场、插件配置/详情弹窗、仪表板渲染，以及 Vue 联邦远程组件的加载。
- `MoviePilot-Plugins` 负责插件源码、插件市场索引、插件图标与插件开发文档。

如果你要判断某个问题该在哪个仓库处理，可以按下面这条经验规则：

- 插件类、事件、链式扩展、服务、API、数据保存问题，先看 `MoviePilot`。
- 插件页面渲染、模块联邦、侧栏全页入口、前端交互问题，先看 `MoviePilot-Frontend`。
- 插件元数据、版本号、图标、插件市场展示、Release 打包问题，先看本仓库。

## 仓库结构

```text
MoviePilot-Plugins/
├── plugins/                 # 默认插件目录，通常也是兼容旧版本或通用版本的入口
├──…
