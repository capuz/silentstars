---
repo: "bruc3van/dsh-desktop"
name: "dsh-desktop"
description: "DeepSeek Harness Desktop 是一款社区维护的非官方第三方桌面客户端，通过直接加载官方 Web UI，为普通用户提供开箱即用的独立桌面体验：它可以自动复用本机已运行的官方实例，也可以使用安装包内置的 dsh 运行时启动服务，无需用户额外安装 Node.js 或 CLI，并提供智能连接、远程实例连接、托盘常驻、运行时监护和异常恢复等桌面增强。"
readmeQualityOk: true
url: "https://github.com/bruc3van/dsh-desktop"
homepage: "https://x.com/bruc3van"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 39]
topics: ["deepseek", "deepseek-desktop", "deepseek-harness", "dsh-plugin"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-12T04:30:03Z"
lastCommitAt: "2026-08-14T05:13:51Z"
lastReleaseAt: "2026-08-14T04:56:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["bruc3van"]
openGraphImageUrl: "https://opengraph.githubassets.com/be7904a7712e0c6b63d81b04156119cec8cc2f44c86a4872fc09723e9f65f7f1/bruc3van/dsh-desktop"
---

# DeepSeek Harness Desktop

中文 | [English](https://github.com/bruc3van/dsh-desktop/blob/HEAD/README_EN.md)

**把 DeepSeek Harness 当作桌面应用来使用：官方界面、已有会话和本地工作区，都在一个专注的窗口里。**

DeepSeek Harness Desktop 是一个独立的 `dsh` Electron 客户端。它会启动或连接官方 `dsh Web UI`，并直接呈现官方界面，让你无需一直保留浏览器标签页，也能完整使用 Harness。

> [!IMPORTANT]
> **这是社区维护的非官方第三方项目。** 本项目并非 DeepSeek 官方产品，不由 DeepSeek 开发、发布、背书或提供支持，也不代表 DeepSeek 的立场。`DeepSeek`、`DeepSeek Harness`、`dsh` 及相关名称、标识和商标归其各自权利人所有。桌面客户端的问题请提交到本仓库，不要联系 DeepSeek 官方支持。

发布安装包内置固定版本的官方 `@deepseek-ai/dsh` 运行时；普通用户无需另外安装 Node.js、pnpm 或 `dsh` CLI。桌面外壳、安装包、连接增强与发布签名均由本项目独立负责，不属于官方运行时的一部分。

桌面客户端与官方 `dsh` 使用各自独立的版本号，两者没有对应关系。应用的连接设置页会同时显示“桌面客户端版本”和“内置 dsh 版本”，便于排查兼容问题。

## 为什么值得使用？

- **原汁原味的 Harness 能力**：应用直接加载官方 Web UI。项目、会话、任务、模型、权限、目标、计划、技能与斜杠命令都沿用官方产品行为。
- **桌面端连接增强**：在官方设置界面中追加明确标注的连接卡片，并提供独立的原生连接窗口；这些增强属于本项目，不是官方 Web UI 功能。
- **更少的启动步骤**：智能模式会优先复用电脑上已经运行的官方 Web UI；没有可用实例时，再替你启动 `dsh web`。
- **工作上下文自然延续**：本地模式与 `dsh` CLI、浏览器版共用 `~/.dsh`，已有会话、标题、凭据和模型配置无需搬家。
- **Agent 在哪里都能连接**：日常使用可以运行本地实例，也可以让桌面端连接另一台机器或容器中的 `dsh Web UI`。
- **更适合长时间 Agent 任务**：关闭窗口不会立即退出应用，可从系统托盘重新打开，让 Agent 工作与浏览器标签页彼此独立。
- **边界小、容易审计**：客户端只使用公开的 `dsh web` CLI 和 `/api` 协议，不修改官方仓库，也不依赖 Harness 私有内部包。

##…
