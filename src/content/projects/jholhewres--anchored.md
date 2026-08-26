---
repo: "jholhewres/anchored"
name: "anchored"
description: "Persistent cross-tool memory for AI coding agents. Single binary. Zero dependencies."
readmeQualityOk: true
url: "https://github.com/jholhewres/anchored"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai", "claude-code", "cli", "cursor", "developer-tools", "golang", "knowledge-graph", "local-first", "mcp", "memory"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-30T03:22:14Z"
lastCommitAt: "2026-08-26T04:16:09Z"
lastReleaseAt: "2026-05-02T01:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["jholhewres", "aronpc", "rafaelpassarela"]
openGraphImageUrl: "https://opengraph.githubassets.com/d96eabc2f2c485b8278d909562d6b6eeef43c8f3389bad804f4ad29c71bfc7ed/jholhewres/anchored"
---

# Anchored

> Persistent cross-tool memory for AI coding agents. Local-first, single binary, zero dependencies.

Anchored gives Claude Code, Cursor, OpenCode, Gemini CLI, Codex, VS Code Copilot, OpenClaw, Hermes, devclaw, gatorclaw, and other MCP-compatible tools one shared memory database on your machine.

- Local-first: no account, no cloud dependency, no required API key.
- One binary: `anchored` is both the CLI and MCP server.
- Fast retrieval: SQLite FTS5 + local ONNX embeddings + knowledge graph.
- Safe lifecycle: memories are scored, curated, inspected, exported, forgotten, and synced with privacy filters.

For team-shared project memory, the optional self-hosted/server side lives in [`anchored_oss`](https://github.com/jholhewres/anchored/blob/HEAD/../anchored_oss). Local Anchored remains the source of truth and the hot retrieval path.

## What Anchored remembers

Anchored stores small durable memories, not raw chat dumps by default. The public categories stay intentionally simple:

| Category | Use for |
|---|---|
| `fact` | Stable truths about a user, project, team, stack, API, or system. |
| `preference` | Personal preferences, project conventions, or team rules.…
