---
repo: "anweat/dsh-web-search-pro"
name: "dsh-web-search-pro"
description: "Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering)"
readmeQualityOk: true
url: "https://github.com/anweat/dsh-web-search-pro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["deepseek-harness", "dsh-plugin", "plugin", "web-search", "dsh"]
stars: 32
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-08-13T16:29:22Z"
lastCommitAt: "2026-08-23T04:08:00Z"
lastReleaseAt: "2026-08-23T04:02:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 42
maintainers: ["anweat", "liuqian1770"]
openGraphImageUrl: "https://opengraph.githubassets.com/93987b1df662a4ccfd22e46804963fd255cc0d9d584f4f4c6dff9b737b208d7f/anweat/dsh-web-search-pro"
---

# dsh-web-search-pro

增强型、可持久化的扩展网页搜索插件 for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）。

一个 DSH **bundle 插件**，把多引擎网页搜索、平台搜索、持久化缓存、受控按站增强和 Playwright 渲染打包成模型可直接调用的 11 个工具。路由控制面借鉴 Agent-Reach 的后端探测、顺序选择和失败冷却思路，核心逻辑为本项目原生 TypeScript 实现。

## 安装

```bash
dsh plugin --profile web add dsh-web-search-pro   # 自动装 dsh-browser（dependency）+ 自动挂载 browser 行（本 patch）
# 或本地目录 / tarball：
dsh plugin --profile web add ./dsh-web-search-pro
# 重启（web profile 关闭了 HMR）：
dsh --profile web
```

> npm 安装会解析 `@anweat/dsh-browser`；本地联调可用 `dsh plugin --profile web add ../dsh-browser ../dsh-web-search-pro` 一条命令显式列两个。
> 依赖 `@deepseek-ai/*` 已发布到 npm（`^0.1.0-rc.6`，与社区 dsh-cc-tui 一致）。
> 若你的 harness 是本地源码 checkout（如 `0.1.0-rc.5`），版本号可能有出入——用
> `dsh plugin --profile web add ./<path>` 并在 profile 的 `pnpm-workspace.yaml`
> 里对齐版本后重装即可。

## 从旧版本升级

升级 Web Search Pro 时应同时升级浏览器插件。`dsh-web-search-pro >= 0.1.6` 要求 `@anweat/dsh-browser >= 0.1.7`；旧版 browser 不包含完整的 Recipe、外部 userscript、OpenCLI Bridge 和四级 `automationMode` 能力。

```bash
# npm 安装：显式升级两个包，避免 profile 锁文件继续保留旧版 browser
dsh plugin --profile web add @anweat/dsh-browser@^0.1.7 dsh-web-search-pro@^0.1.6

# 本地 checkout 联调：两个目录一起重新挂载
dsh plugin…
