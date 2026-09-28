---
repo: "Quamolit/quamolit"
name: "quamolit"
description: "Experimental canvas animation library with persistent data at core"
readmeQualityOk: true
url: "https://github.com/Quamolit/quamolit"
homepage: "http://r.quamolit.org/quamolit.calcit/"
language: "Cirru"
languages: ["Cirru", "JavaScript"]
languagePcts: [54, 43]
topics: ["animation", "canvas"]
stars: 7
forks: 0
openIssues: 22
closedIssues: 9
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-02-22T06:30:44Z"
lastCommitAt: "2026-09-28T10:05:42Z"
lastReleaseAt: "2021-09-13T13:53:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 67
maintainers: ["tiye"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecade9fddce1a1409864887e0b90fc4d6a5bb0ae7223e84ab982c5f7af736452/Quamolit/quamolit"
---

Quamolit in calcit-js / Calcit 版 Quamolit
----

Quamolit 是用 Calcit 编写的声明式 Canvas 动画库。组件描述画面，应用模型保存动画状态；框架提供绘制与帧更新能力。

**查看演示：** 运行 `yarn demo` 打开[统一演示导航](https://github.com/Quamolit/quamolit/blob/HEAD/demos/README.md)。所有入口按能力分类，支持搜索和返回导航；`yarn release:demos` 构建可部署的完整演示站点。

原有 11 个示例已列入[完整恢复清单](https://github.com/Quamolit/quamolit/blob/HEAD/docs/demo-restoration.md)。[Binary Tree](https://github.com/Quamolit/quamolit/blob/HEAD/docs/binary-tree-restoration.md) 使用统一计划共享静态几何；[TodoList](https://github.com/Quamolit/quamolit/blob/HEAD/docs/todolist-restoration.md) 已提供 Canvas 文字、完整列表操作、错峰进退、打断重排和日志重放。其余 9 项待恢复，同源 GPU 尚未完成。导航预留艺术动画分类，动画页面采用全屏 Canvas 与可收起 DOM 浮层。

后续开发以 [技术路线与 milestones](https://github.com/Quamolit/quamolit/blob/HEAD/docs/roadmap.md)、[工作项规格](https://github.com/Quamolit/quamolit/blob/HEAD/docs/work-items.md) 和 [检验规则](https://github.com/Quamolit/quamolit/blob/HEAD/docs/verification.md) 为准。计划分为 M0 基线、M1 动画函数、M2 增量执行与 WebGPU、M3 完整应用、M4 性能发布；性能目标均需实测，不能把编译成功当作功能或性能验收。接手编码前请阅读 [AGENTS.md](https://github.com/Quamolit/quamolit/blob/HEAD/AGENTS.md)。

当前 vNext 迁移仍在进行中：[设计草案](https://github.com/Quamolit/quamolit/blob/HEAD/docs/vnext-design.md) 说明目标 API…
