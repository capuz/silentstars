---
repo: "caesura-team/Caesura-AmeKAG"
name: "Caesura-AmeKAG"
description: "Caesura (AmeKAG) — Cross-platform Visual Novel Engine. SDL3 + bgfx + SoLoud + Lua."
readmeQualityOk: true
url: "https://github.com/caesura-team/Caesura-AmeKAG"
language: "Lua"
languages: ["Lua", "C++"]
languagePcts: [37, 36]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-06-05T12:14:56Z"
lastCommitAt: "2026-09-08T08:17:09Z"
lastReleaseAt: "2026-08-21T04:36:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 54
maintainers: ["ailiasdesu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1260362254/4ca4cab7-a71b-4e1f-a3d2-e5764d088f0a"
fundingLinks: ["CUSTOM:https://github.com/ailiasdesu/Caesura-AmeKAG/blob/master/docs/guides/sponsorship.md"]
---

# Caesura (AmeKAG)

**Next Generation of Visual Novel**

**现代化跨平台视觉小说引擎 · KAG Neo-Genesis 脚本 · C++20 内核**

*A modern, cross-platform visual novel engine — KAG Neo-Genesis scripting on a C++20 core.*

[快速开始](#快速开始) · [教程与示例](#教程与示例) · [文档](#文档) · [平台支持](#平台支持) · [参与开发](#参与开发)

</div>

---

Caesura 是面向程序员与独立团队的开源视觉小说引擎。剧本语言是 **KAG Neo-Genesis** —— KAG
脚本语言的现代化迭代（由 KAG3 演化而来、兼容 KAG3，旧工程可导入迁移）；从写下第一行剧本，
到把游戏打包成 Windows / Linux / macOS / Web 四个平台的成品，全部工作流在一个仓库内完成。

引擎内核为 C++20：bgfx 渲染、SDL3 窗口、SoLoud 音频、Lua 5.4 脚本 VM —— 16 个静态模块库、
34 个纯虚接口、零循环依赖（[实时 API 普查](https://github.com/caesura-team/Caesura-AmeKAG/blob/HEAD/docs/api/api-stats.md)）。

**当前开发方向：底层优先，Studio 暂停。** 后续工作以运行时正确性、状态恢复、真实后端与交付验证为主，进度和验收范围见[当前计划](https://github.com/caesura-team/Caesura-AmeKAG/blob/HEAD/docs/plans/README.md)。已有编辑器入口保留供维护，创作入门以引擎和 CLI 为主。

## 核心特性

**创作体验**

- **KAG Neo-Genesis 剧本语言**：134 个声明式契约命令——对白、选择支、存档/回滚/履历、NVL、参数化宏、内联文本标记、i18n 热切换（[命令参考](https://github.com/caesura-team/Caesura-AmeKAG/blob/HEAD/docs/api/command-contracts.md)）
- **KAG + Lua 混合脚本**：`[eval]` / `[iscript]` 在剧本内嵌 Lua，`kag.*` API 反向驱动剧情；也可以纯 Lua 直驱引擎
- **Caesura Studio（开发暂停）**：仓库保留编辑器与 RPC 实现；现阶段不作为完整创作流程的就绪承诺，底层与 CLI 的开发优先。
- **caesura…
