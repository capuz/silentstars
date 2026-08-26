---
repo: "davidhoo/buddy"
name: "buddy"
description: "Dual-AI-agent collaborative coding orchestrator"
readmeQualityOk: true
url: "https://github.com/davidhoo/buddy"
homepage: "https://davidhoo.github.io/buddy/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 44
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-03T05:02:45Z"
lastCommitAt: "2026-08-26T04:17:37Z"
lastReleaseAt: "2026-08-11T04:06:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["davidhoo", "zhouchang1988"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40d36f8ab2d9b3a5610c05a0487bf83627470f22e8edc16ace0a4881b3dd47b/davidhoo/buddy"
---

# Buddy

> Let's Go, Every Buddy! 让我们一起出发，每一位 Buddy！

双 AI Agent 协作编码的 macOS 桌面应用。两个 AI Actor（执行方 + 审查方）轮流工作，逐步收敛至正确结果，支持人工校准窗口与双确认结束机制。

官网：[https://davidhoo.github.io/buddy/](https://davidhoo.github.io/buddy/) · [下载](https://github.com/davidhoo/buddy/blob/HEAD/../../releases)

## 特性

- **双 Actor 协作**：执行方实现代码，审查方检查修正，循环推进直到双方确认完成
- **5 种 AI Actor**：Claude Code、Codex、Cursor CLI、OpenCode、Kimi Code
- **双确认结束**：双方均发出 `type=break` 才结束任务，单方 break 不终止
- **指令队列**：在 Actor 运行期间排队发送指令，轮次结束后自动执行
- **Git 集成**：本地化 conventional commit 消息生成、变更查看、提交与推送
- **23 套预设主题**：CSS 自定义属性驱动的主题引擎，支持自定义颜色
- **国际化**：中文简体 / 中文繁体 / 英文，CJK 自动检测
- **可恢复**：应用崩溃或重启后，任务状态从磁盘文件完整恢复

## 官网

Buddy 官网使用 GitHub Pages 部署，源码在 [`docs/`](https://github.com/davidhoo/buddy/blob/HEAD/docs/) 目录，包含：

- **首页**（`index.html`）：产品介绍、核心特性、工作原理、架构设计、支持的 AI Actor、下载、FAQ
- **最佳实践**（`best-practices.html`）：任务说明模板、推荐用法、避坑指南

推送 `docs/` 目录的变更到 `main` 分支会自动触发 GitHub Actions 部署（见 [`.github/workflows/deploy-pages.yml`](https://github.com/davidhoo/buddy/blob/HEAD/.github/workflows/deploy-pages.yml)）。

## 系统要求

- macOS 12+ (Monterey)
- 至少一个已安装的 AI CLI 工具：[Claude Code](https://docs.anthropic.com/en/docs/claude-code)、[Codex…
