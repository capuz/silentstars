---
repo: "lee-to/ai-workspace"
name: "ai-workspace"
description: "AI Workspace - Give your AI agents memory that spans across projects."
readmeQualityOk: true
url: "https://github.com/lee-to/ai-workspace"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "mcp"]
stars: 61
forks: 3
openIssues: 0
closedIssues: 31
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-17T14:41:42Z"
lastCommitAt: "2026-10-30T10:22:48Z"
lastReleaseAt: "2026-05-26T13:28:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 30
maintainers: ["lee-to", "ichinya"]
openGraphImageUrl: "https://opengraph.githubassets.com/79d4c1b2cc1882297cd02b9a7b2dbd1f4240f940bae4710505f6d98bda4d5bdc/lee-to/ai-workspace"
---

# AI Workspace

**Give your AI agents memory that spans across projects.**

AI coding agents (Claude Code, Cursor, Windsurf, etc.) are powerful — but they only see one project at a time. When your work involves a shared API contract, a common deploy process, or a monorepo split into microservices, the agent starts every conversation blind to the bigger picture.

AI Workspace fixes that. It's a lightweight CLI + [MCP server](https://modelcontextprotocol.io) that lets you share files, directories, and notes across related projects. Your agents get cross-project context automatically — no copy-pasting, no symlinks, no custom prompts.

It also includes a local Rust-only CodeGraph MVP: registered projects can index shared Rust source scopes into SQLite as files, symbols, and call relationships, then expose that structure to agents through CLI and MCP tools.

For teams that need the same curated context away from a developer machine, optional [cloud synchronization](https://github.com/lee-to/ai-workspace/blob/HEAD/docs/cloud.md) pushes explicit project snapshots to PostgreSQL and exposes a separate seven-tool, read-only hosted MCP endpoint.

Local context distinguishes a logical project…
