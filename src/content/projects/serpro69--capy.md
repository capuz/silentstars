---
repo: "serpro69/capy"
name: "capy"
description: "🦫 Privacy-first virtualization layer for LLM context with MCP protocol for tool access."
readmeQualityOk: true
url: "https://github.com/serpro69/capy"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["agents", "antigravity", "claude", "claude-ai", "claude-code", "claude-code-plugins", "codex", "copilot", "gemini", "mcp"]
stars: 15
forks: 0
openIssues: 15
closedIssues: 38
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-03-18T19:51:41Z"
lastCommitAt: "2026-11-21T13:26:50Z"
lastReleaseAt: "2026-09-24T17:49:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 56
maintainers: ["serpro69"]
openGraphImageUrl: "https://opengraph.githubassets.com/8326ca91257854b4eb33f00ffe947f67262e6d4da88ed9a9df12745da4602f41/serpro69/capy"
---

# capy

**C**ontext-**A**ware **P**rompting ...or "**Y**et another solution to LLM context problem"

capy helps coding agents work with large outputs without filling their context window. It is a local MCP server with integrations for Claude Code and Codex CLI, distributed as a Go binary.

- **Extract what matters.** Process logs, API responses, web pages, and large files in subprocesses; return summaries or search results to the agent.
- **Keep knowledge across sessions.** Index project documentation and notes, then retrieve relevant passages on demand.
- **Archive conversations.** Search, browse, and restore Claude Code and Codex sessions from an encrypted session vault.

Storage and search run locally, with mandatory database encryption and no telemetry, account, or hosted service. Fetches and submitted code can make network requests; results returned to your agent follow that agent's data policies.
