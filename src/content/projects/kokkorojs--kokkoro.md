---
repo: "kokkorojs/kokkoro"
name: "kokkoro"
description: "とある咕咕の QQ 机器人框架 (OxO)?!..."
readmeQualityOk: true
url: "https://github.com/kokkorojs/kokkoro"
homepage: "https://kokkoro.js.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["qqbot", "bot", "qq", "priconne"]
stars: 63
forks: 8
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-12-03T13:58:51Z"
lastCommitAt: "2026-08-29T17:26:50Z"
lastReleaseAt: "2022-01-20T15:35:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["xueelf"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/434615280/deeb63ac-88dc-4875-819a-21f7c43b19c7"
---

</a>
  <h1>Kokkoro</h1>
  <p>とある咕咕の QQ 机器人框架</p>
  <p>
  </p>
</div>

Kokkoro 是一个使用 Bun 和 TypeScript 开发的 QQ 机器人框架。它通过项目统一管理多个机器人和插件，并使用 Hook API 声明事件与指令。

框架直接对接 QQ 官方服务，不依赖 OneBot、Satori 等社区协议。每个机器人都可以通过 WebSocket 或 WebHook 接入。

## 快速上手

运行脚手架，并按照提示填写项目名称、服务端口、接入方式和机器人凭证：

```shell
bun create kokkoro
```

使用默认项目名称时，可以通过以下命令启动项目：

```shell
cd kokkoro-app

bun install
bun start
```

完整的项目结构、配置方式和插件开发流程请参阅 [Kokkoro 文档](https://kokkoro.js.org)。

## Packages

| Package                                       | 说明                                                        |
| --------------------------------------------- | ----------------------------------------------------------- |
| [`kokkoro`](https://github.com/kokkorojs/kokkoro/blob/HEAD/packages/kokkoro)               | 加载配置、机器人和插件，并启动 Kokkoro 服务                 |
| [`@kokkoro/core`](https://github.com/kokkorojs/kokkoro/blob/HEAD/packages/core)            | 基于 QQ 官方事件与 OpenAPI 提供 Hook 插件系统和 Command API |
| [`@kokkoro/cli`](https://github.com/kokkorojs/kokkoro/blob/HEAD/packages/cli)              | 初始化项目、创建插件和启动 Kokkoro                          |
|…
