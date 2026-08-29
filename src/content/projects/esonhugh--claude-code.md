---
repo: "Esonhugh/claude-code"
name: "claude-code"
description: "self maintain claude code. A Branch begins https://github.com/Ta0ing/claude-code_evil"
readmeQualityOk: true
url: "https://github.com/Esonhugh/claude-code"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [71, 28]
stars: 39
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-10T02:54:17Z"
lastCommitAt: "2026-08-29T10:22:01Z"
lastReleaseAt: "2026-06-25T16:38:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 40
maintainers: ["Esonhugh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e88c4c214510f1baf2f81f418b27801d628adf45fc901bfc7834ac549f2b46b2/Esonhugh/claude-code"
---

# Unofficial Claude Code

基于 Claude Code `2.1.88` 分发产物恢复的非官方 TypeScript/TSX 源码工作区，并持续维护本地 CLI、Agent、Workflow、OpenAI/Codex 兼容和调试能力。

> 本项目不是 Anthropic 官方产品、官方源码分发或官方 Claude Code release，也未获得 Anthropic 背书。公开包只分发 launcher 与对应平台二进制，不包含本仓库源码。

## 作者与维护者

- 项目维护者：**Esonhugh**
- 原始产品与上游实现：**Anthropic Claude Code**
- 公开包：`@esonhugh/claude-code`
- 恢复基线：Claude Code `2.1.88`
- 当前本地发布线：`2.1.214`

本仓库包含从公开 bundle/source map 恢复的上游代码和本地维护改动。上游归属与本地维护者身份应分别理解；完整本地变更以 [`CHANGELOG.md`](https://github.com/Esonhugh/claude-code/blob/HEAD/CHANGELOG.md) 为准。

## 项目概况

本项目主要用于：

1. 保存从 Claude Code 分发产物恢复的可读 TypeScript/TSX 源码树。
2. 提供可构建、可调试、可进行受控二次开发的本地 Claude Code CLI。
3. 在 `2.1.88` 基线上维护 Agent、Workflow、OpenAI/Codex、交互终端和会话命令等扩展。
4. 保留恢复工程中的类型声明、stub 与 build shim，便于后续逐步替换或验证。
5. 通过 binary-only 流程发布非官方 launcher：正式公开发布由 tag 驱动，本地 binary 由 `Makefile VERSION` 注入版本；两者都不公开分发本仓库源码。

### 当前基线

| 项目 | 当前值 |
| --- | --- |
| 恢复基线 | `2.1.88` |
| 本地发布线 | `2.1.214` |
| 源码版本 | `0.0.0-dev` |
| 包管理器 | `bun@1.3.14` |
| Node.js | `>=18` |
| JS 构建产物 | `dist/cli.js` |
| 本地 binary | `built-claude` |

源码中的 `package.json` 始终保留 `0.0.0-dev`。正式构建版本由 Git tag 或 `CLAUDE_CODE_VERSION` 注入，`Makefile` 中的 `VERSION` 用于本地 binary 构建。

##…
