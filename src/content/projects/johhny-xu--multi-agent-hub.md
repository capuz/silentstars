---
repo: "Johhny-Xu/multi-agent-hub"
name: "multi-agent-hub"
description: "Self-hosted multi-agent collaboration hub: a single MCP task bus dispatches 8 AI agents (CodeBuddy/Antigravity/Copilot/MiniMax/TraeCode/ZCode) in a unified way. When quota runs out, tasks are automatically reassigned to the next channel. A web page shows an overview of sessions and quotas. Runs the official CLI in headless mode and never gets accounts banned."
originalDescription: "自托管多智能体协作枢纽：一条 MCP 任务总线统一调度 8 种 AI 代理（CodeBuddy/Antigravity/Copilot/MiniMax/TraeCode/ZCode），额度耗尽自动改派下一通道，网页端总览会话与配额。官方 CLI 无头模式，绝不封号。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Johhny-Xu/multi-agent-hub"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [62, 22]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-07T02:18:10Z"
lastCommitAt: "2026-10-31T15:58:17Z"
lastReleaseAt: "2026-10-22T03:03:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Johhny-Xu"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ab20fa2f488df4f05297b3845748053678b32bd845e2e097e3a33b58ccc738b/Johhny-Xu/multi-agent-hub"
discussionCount: 0
---

# multi-agent-hub

[English](https://github.com/Johhny-Xu/multi-agent-hub/blob/HEAD/README.en.md) · **Simplified Chinese**

**multi-agent-hub** is a local multi-AI-agent dispatch hub. It connects the 14 AI coding CLIs scattered across your computer (the execution endpoints it dispatches to, collectively called **Workers**) into one shared task pool. When you use several tools at once, such as CodeBuddy, Copilot, Antigravity, and TraeCode, you don't need to switch tools manually or restate your requirements when one account's quota runs out. The current client can hand the task directly to another AI to continue.

**Current version: v1.0.19** · License: [Apache-2.0](https://github.com/Johhny-Xu/multi-agent-hub/blob/HEAD/LICENSE) · Changelog: [CHANGELOG.md](https://github.com/Johhny-Xu/multi-agent-hub/blob/HEAD/CHANGELOG.md)

| Access form | Use case | What you need to do |
| --- | --- | --- |
| **Direct connection from any MCP client** | Cursor, Claude Desktop, Windsurf, Cline / Roo Code, Continue, and other clients that support MCP (Model Context Protocol) | Enter one MCP URL (`http://127.0.0.1:8790/mcp`) |
| **6 native host plugins** | Hosts that initiate tasks: Codex, ZCode,…
