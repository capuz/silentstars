---
repo: "RikyZ90/ShibaClaw"
name: "ShibaClaw"
description: "🐕 Self-hosted security-first AI agent · 28 providers · 11 chat channels · WebUI · 3-level memory · task-schedule · automation · skills · MCP"
readmeQualityOk: true
url: "https://github.com/RikyZ90/ShibaClaw"
homepage: "https://deepwiki.com/RikyZ90/ShibaClaw"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 29]
topics: ["ai-agent", "ai-agents", "docker", "llm", "mcp", "python", "self-hosted", "agent-framework", "chatbot", "multi-agent"]
stars: 77
forks: 8
openIssues: 0
closedIssues: 22
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2026-03-20T00:26:05Z"
lastCommitAt: "2026-07-17T05:59:38Z"
lastReleaseAt: "2026-04-01T10:39:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["RikyZ90", "AmirrezaGhiasvand"]
openGraphImageUrl: "https://opengraph.githubassets.com/b97b91d69c4ac10a99e00907e99729770a41aa5536a07d5e53d8f32718b8f07a/RikyZ90/ShibaClaw"
discussionCount: 10
---

</p>

<h1 align="center">ShibaClaw</h1>
<h3 align="center">The AI agent that <b>just works</b> — securely, privately, without babysitting.</h3>

</p>

  <b>28 Providers · 11 Chat Channels · Built-in WebUI · Security-First Core · MCP Ready</b>
</p>

<h3 align="center">Built on three pillars: <b>Simplicity · Security · Privacy </b></h3>

  🌐 <a href="./README.zh-CN.md">简体中文</a> &nbsp;·&nbsp;
</p>

***

> [!WARNING]
> If you experience login issues with the WebUI post v0.9.5 update, please run `shibaclaw reset-admin` in your terminal/console to restore access.

<details open>
<summary>📢 <b>Latest Release: v0.9.8</b> — Click to see what's new</summary>

### Added
- **Channel Config Dropdowns** — Changed `group_policy` fields in channel configuration to use dropdown selectors in the WebUI for better UX.

### Fixed
- **External Package Installation on Modern Linux (PEP 668)** — Auto-injects `--break-system-packages` on `externally-managed-environment` errors during pip operations.
- **Sub-agent Session Key Propagation** — Added `session_key` to sub-agent metadata for proper context during parallel execution.
- **RAG Soft Restart Import Error** — Fixed `NameError` for dynamic RAG…
