---
repo: "techysy/10router"
name: "10router"
description: "10Router — local AI routing gateway & dashboard (9Router 精简优化版) · npm i -g @techysy/10router"
readmeQualityOk: true
url: "https://github.com/techysy/10router"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-gateway", "ai-router", "claude-code", "codex", "proxy", "self-hosted", "token-saver"]
stars: 36
forks: 11
openIssues: 5
closedIssues: 8
watchers: 1
contributors: 242
recentReleases: 10
createdAt: "2026-08-21T08:38:52Z"
lastCommitAt: "2026-09-18T08:24:23Z"
lastReleaseAt: "2026-09-13T15:23:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 44
maintainers: ["techysy", "monkey2jack"]
openGraphImageUrl: "https://opengraph.githubassets.com/3464710ff337740291a035eec4f879ea5cfb2b18f748b35b1a7deefd4f63fe9f/techysy/10router"
---

# 🚀 10Router

基于 [decolua/9router](https://github.com/decolua/9router) v0.5.55 的本地优化快照

**✨ 单一 commit 历史，无上游提交污染；上游新功能一律学习后自行重写。**

</div>

---

## 📖 简介

10Router 是 [9Router](https://github.com/decolua/9router) 的精简优化版本。在上游 v0.5.55 基础上合并了若干本地验证过的修复，排除未完成的实验性功能，保持干净的 git 历史便于持续同步上游。

```
┌─────────────┐
│  Your CLI   │  Claude Code · Codex · Cursor · Cline · OpenCode ...
│   Tool      │
└──────┬──────┘
       │ http://localhost:20128/v1
       ↓
┌─────────────────────────────────────────┐
│            10Router (Smart Router)       │
│  • RTK Token Saver (cut tool_result)    │
│  • Format translation (OpenAI ↔ Claude) │
│  • Quota tracking                       │
│  • Auto fallback & token refresh        │
│  • Regional currency display            │
└──────────┬──────────────────────────────┘
           ↓
┌──────────────────────────────────────────┐
│     85+ Providers · 1000+ Models         │
│  Free ──→ Cheap ──→ Subscription         │
└──────────────────────────────────────────┘
```

## 🧾 版本历程

| 版本 | 核心要点 |
|------|----------|
| **v1.1.2** | 用量仪表盘（热力图 / 节点健康度 / 生涯统计）；CodeBuddy 11128 渠道级熔断；Cline/ClinePass 凭据自动刷新修复；小米 Token Plan 出口节点匹配 |
| **v1.1.1** | 跨账号「配额包到期优先」调度；Command…
