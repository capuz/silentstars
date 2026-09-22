---
repo: "yamantaka520/Agent-Memory-OS"
name: "Agent-Memory-OS"
description: "Local-first memory engine for AI-agent teams — private/team/project ACL, associative recall, federated sync, and a built-in MCP server. One SQLite file, no LLM required. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/yamantaka520/Agent-Memory-OS"
homepage: "https://pypi.org/project/agent-memory-os/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "agent-memory", "agents", "ai", "ai-agents", "claude", "knowledge-graph", "llm", "local-first", "mcp"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-10T13:00:57Z"
lastCommitAt: "2026-09-22T08:45:16Z"
lastReleaseAt: "2026-07-10T20:17:46Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 70
maintainers: ["yamantaka520", "warrentc3"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d162b6b60e849a233f2b558d55f56c38ee6e0aad57e80fee0e6837cccf5e90/yamantaka520/Agent-Memory-OS"
---

</p>

</p>

  <b>English</b> · <a href="README.zh-Hant.md">繁體中文</a>
</p>

A **local-first memory system for AI-agent teams** — not just giving one agent a memory, but a shared memory fabric for a *fleet* of agents working together: private, team, and project-scoped memories behind a hard ACL, associative recall, and federated sync that keeps a mesh of nodes (and their org structure) in agreement. One SQLite file, zero required dependencies, Apache-2.0.

</p>

  <br><sub>The built-in web console: token-usage by agent/team/project, memory browse, and the ACL-safe association graph.</sub>
</p>

## Why

Real work happens in **teams of agents** — a project might mix Claude Code, Codex, OpenClaw, and several Hermes profiles, across multiple teams and projects, on one machine or many. They need to share the *right* knowledge with the *right* teammates and keep private what should stay private:

- **Per-agent memory** is the floor, not the ceiling: durable facts, preferences, procedures, and lessons that survive across sessions.
- **Team & project memory** is the point: a team sees `team:<id>` memory; a project (a subset of the team) sees `project:<id>` memory; nothing leaks across the…
