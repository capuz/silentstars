---
repo: "HaipingShi/coderail"
name: "coderail"
description: "A governance kit for AI coding agents. Keeps every task tied to the project's North Star with task contracts, harness gates, drift checks, and short handoffs. K0-K6 kernel + 10 skills."
readmeQualityOk: true
url: "https://github.com/HaipingShi/coderail"
homepage: "https://github.com/HaipingShi/coderail"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-governance", "ai-agents", "ai-coding", "claude-code", "codex", "developer-tools", "llm", "north-star", "prompt-engineering", "spec-driven-development"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-03T04:32:55Z"
lastCommitAt: "2026-07-08T05:40:26Z"
lastReleaseAt: "2026-07-08T03:18:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 32
maintainers: ["HaipingShi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e98d494a4ea3e068f23254033597aca0f243e577e71e83e87b97b7701e7d62c/HaipingShi/coderail"
---

# CodeRail

🛤️ **Draft before coding. Verify before done. Close out before stopping.**
🛤️ **先对齐再编码，先验证再完成，停止前先收口。**

CodeRail is a lightweight governance rail for AI coding agents. It keeps long-running coding work aligned through a small repo-local kernel: North Star, Architecture Blueprint Layer, CodeRail Coordinate, Coordinate Contract Drafts, task contracts, verification-before-complete, automatic task-scoped commits, CI Gate, runtime state inspect, short handoffs, asset boundaries, and trace links.

CodeRail 是一个面向 AI 编码 Agent 的轻量级治理轨道。它不是任务系统或重型工作流引擎，而是在你的仓库里放入一套小而稳定的执行内核：North Star、Architecture Blueprint Layer、CodeRail Coordinate、契约草案、任务契约、完成前验证、自动任务级提交、CI Gate、运行态检查、交接摘要、资产边界和可追踪链接。

Version: **v0.7.2**

## ✨ What It Does / 它解决什么

| Icon | English | 中文 |
|---|---|---|
| 🎯 | Keeps every coding action tied to a North Star outcome. | 让每个编码动作都能回到明确的目标。 |
| 🧭 | Compresses work into G/T/S/V/X/P before implementation. | 开始实现前，把任务压缩成 G/T/S/V/X/P。 |
| 🧾 | Drafts a contract for vague, risky, or cross-module requests. | 对模糊、高风险、跨模块需求先生成契约草案。 |
| ✅ | Blocks "done" until verification, scope, persistence, and trace are present. | 没有验证、范围约束、持久化和 trace，不允许标记完成。 |
| 🧹 | Auto-commits…
