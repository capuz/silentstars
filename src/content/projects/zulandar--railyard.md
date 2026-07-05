---
repo: "zulandar/railyard"
name: "railyard"
description: "Railyard is a multi-agent orchestration system for AI-driven software development, coordinating planning, execution, and verification across isolated git tracks."
readmeQualityOk: true
url: "https://github.com/zulandar/railyard"
homepage: "https://therailyard.io"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 10
forks: 0
openIssues: 24
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T23:34:22Z"
lastCommitAt: "2026-07-05T20:17:33Z"
lastReleaseAt: "2026-03-11T00:01:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 41
maintainers: ["zulandar"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f68f5290424f3d9c51bd34b173c643acf7de5666b6ab09480bcebe308893ddd/zulandar/railyard"
---

</p>

  &nbsp;&middot;&nbsp;
</p>

</p>

Multi-agent AI orchestration for coding. Railyard coordinates multiple AI coding agents (Claude Code, Codex, Gemini, Copilot) across tracks (backend, frontend, infra) with per-branch isolation, a MySQL database, semantic code search, and automated supervision.

Each developer runs their own Railyard instance against the same repo. Agents work on isolated branches (`ry/{owner}/{track}/{car-id}`), and a supervisor (Yardmaster) handles merges, stall detection, and dependency management.

### Feature Highlights

- **Multi-Agent Orchestration** — run N engines in parallel across your repo, each claiming and completing work independently
- **Any AI CLI** — first-class support for Claude Code, Codex, Gemini CLI, and GitHub Copilot, switchable per-track
- **Track-Based Routing** — partition your repo into tracks (backend, frontend, infra) with distinct languages, conventions, and file patterns
- **MySQL State Store** — all cars, engines, messages, and audit logs live in a single queryable MySQL database
- **Semantic Code Search** — CocoIndex + pgvector give every engine MCP-powered search by meaning, with per-branch overlay indexes
- **Yardmaster…
