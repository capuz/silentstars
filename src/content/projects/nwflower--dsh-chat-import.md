---
repo: "Nwflower/dsh-chat-import"
name: "dsh-chat-import"
description: "Import conversation history from 25+ AI coding agents into DeepSeek Harness as resumable sessions — tool calls, reasoning and results kept intact, with reverse export and sync. | 把 25+ AI 编程 Agent 的聊天记录导入 DeepSeek Harness 继续对话，保留工具调用、推理与结果，支持反向导出与同步。"
readmeQualityOk: true
url: "https://github.com/Nwflower/dsh-chat-import"
homepage: "https://www.npmjs.com/package/dsh-chat-import"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "agent", "ai-agents", "automation", "chatgpt", "claude-code", "codex", "cursor", "deepseek", "deepseek-harness"]
stars: 179
forks: 24
openIssues: 0
closedIssues: 30
watchers: 1
contributors: 19
recentReleases: 10
createdAt: "2026-08-13T14:21:58Z"
lastCommitAt: "2026-09-19T02:48:28Z"
lastReleaseAt: "2026-08-23T14:39:10Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["Nwflower", "JunkaiWang-TheoPhy", "jytx"]
openGraphImageUrl: "https://opengraph.githubassets.com/9973aadf2ef818e8434593fe8b7efde2e409de07ab2dd855521ca4c72e89d8a0/Nwflower/dsh-chat-import"
discussionCount: 1
---

# DSH Chat Import

**A DeepSeek Harness plugin that imports conversation history from 25+ AI coding tools, so you can continue right where you left off.**

> **All sessions, continued in DSH.**

</div>

## Intro

`DSH Chat Import` imports conversation history with full context from other agents, turning it into a seamlessly resumable DeepSeek Harness session.

**27 formats** are covered today — 25 external agent tools, DSH and any local JSONL. The full list is under [Supported Agents](#supported-agents). Export back to: Claude Code, Codex, Kimi Code, opencode.

## Supported Agents

Every source below becomes an independent DSH session, with tool calls, tool results and reasoning kept intact.

**Terminal agents**

<table>
  <tr>
    <td align="center" width="20%"><a href="https://github.com/anthropics/claude-code"><img src="./assets/agents/claude.svg" width="56" height="56" alt="Claude Code" /><br /><b>Claude Code</b></a></td>
    <td align="center" width="20%"><a href="https://github.com/openai/codex"><img src="./assets/agents/codex.svg" width="56" height="56" alt="Codex" /><br /><b>Codex</b></a></td>
    <td align="center" width="20%"><a…
