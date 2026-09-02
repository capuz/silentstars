---
repo: "BigStrongSun/ccswitchmulti"
name: "ccswitchmulti"
description: "CCswitch的全面升级，专门优化codex体验。支持官方订阅和第三方模型混用，自动路由，支持v2subagent使用第三方模型"
readmeQualityOk: true
url: "https://github.com/BigStrongSun/ccswitchmulti"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 32]
topics: ["ai-tools", "ccswitchmulti", "codex", "codex-multirouter", "deepseek", "desktop-app", "local-llm", "local-proxy", "multi-model-router", "openai"]
stars: 66
forks: 5
openIssues: 39
closedIssues: 2
watchers: 1
contributors: 222
recentReleases: 10
createdAt: "2026-08-09T10:33:39Z"
lastCommitAt: "2026-09-02T08:04:29Z"
lastReleaseAt: "2026-08-15T05:25:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 65
undervaluedScore: 30
maintainers: ["BigStrongSun"]
openGraphImageUrl: "https://opengraph.githubassets.com/1827fb514188716e8f11875dce1c11169fd5468bfb0a9e878f282940800bcec1/BigStrongSun/ccswitchmulti"
fundingLinks: ["GITHUB:https://github.com/farion1231"]
---

# CCSwitchMulti

### 面向八类 Agent 工具的 Provider 管理与 Codex 多模型路由工具

English | [中文](https://github.com/BigStrongSun/ccswitchmulti/blob/HEAD/README_ZH.md) | [日本語](https://github.com/BigStrongSun/ccswitchmulti/blob/HEAD/README_JA.md) | [Deutsch](https://github.com/BigStrongSun/ccswitchmulti/blob/HEAD/README_DE.md) | [Changelog](https://github.com/BigStrongSun/ccswitchmulti/blob/HEAD/CHANGELOG.md)

</div>

**求助和反馈**：可以提交 GitHub Issue，也可以扫码加入小红书讨论群一起讨论。（二维码有效期至 2026-07-20）

</div>

## CCSwitchMulti 分支说明

CCSwitchMulti 是面向 Codex 多模型工作流维护的桌面工具。它提供 Provider 数据库、本地代理、MCP/Skills 同步、会话管理、云同步和 Tauri 跨平台结构，同时加入 Codex MultiRouter 工作流，让多个模型来源可以合并到同一个 Codex Provider 后面使用。

使用 `BigStrongSun/ccswitchmulti` 发布版本时，请先阅读本节，因为这里记录的是 CCSwitchMulti 的核心能力、实现边界和使用注意事项。

### Codex 多路由配置说明书

如果你是第一次配置 Codex MultiRouter，请先看这份中文说明书：

**[CCSwitchMulti Codex 多路由使用说明](https://github.com/BigStrongSun/ccswitchmulti/blob/HEAD/docs/guides/codex-multirouter-guide-zh.md)**

它按实际操作顺序覆盖 Codex Desktop 登录、CCSwitchMulti OAuth 授权、添加 DeepSeek / GLM / 本地模型源、开启 `需要本地路由映射`、获取模型列表、配置上下文窗口、创建多模型路由、设置子 Agent 前 5 个候选模型、启动 Codex 路由、Debug 检查、重启 Codex Desktop，以及历史记录修复。

### 适合谁使用

这个分支特别适合已经有 ChatGPT Pro、Plus 或 Team 订阅，并且希望把 GPT…
