---
repo: "tphakala/agy-mcp"
name: "agy-mcp"
description: "agy-mcp: Model Context Protocol (MCP) server for Google Antigravity CLI (agy) with async supervision and completion wakes."
readmeQualityOk: true
url: "https://github.com/tphakala/agy-mcp"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agy", "ai-agents", "antigravity", "cli", "code-review", "gemini", "golang", "mcp", "mcp-server", "model-context-protocol"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 67
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-06-09T11:07:26Z"
lastCommitAt: "2026-09-05T07:47:22Z"
lastReleaseAt: "2026-08-20T07:08:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 59
maintainers: ["tphakala", "dependabot[bot]", "deepfriedrabbit"]
openGraphImageUrl: "https://opengraph.githubassets.com/0187fd951357eed97ef47ffede759ca028c4107746267c098d9bf638d3b039db/tphakala/agy-mcp"
---

</p>

</p>

An MCP (Model Context Protocol) server that wraps the [Antigravity CLI](https://antigravity.google) (`agy`), so any MCP client (Claude Code, Cursor, Cline, and others) can run `agy` prompts, peer reviews, and follow-up turns as native tools.

> Status: feature complete (stdio and HTTP transports, async and sync job lifecycle, model and session discovery, per-run controls and structured output, cross-platform builds) and verified against a live agy, with 1.1.15 the minimum supported version.

## Why

Driving `agy` from a shell for automation has two recurring problems:

- `agy -p` (print mode) reads stdin even when the prompt is passed with `-p`. If stdin is an open pipe that never closes, it blocks indefinitely. The fix is to always close stdin (`</dev/null`), which is easy to forget.
- A review can run for many minutes. A single blocking call ties up the caller and can exceed a client's tool-call timeout with nothing recoverable.

`agy-mcp` solves both by running `agy` as managed, asynchronous jobs behind a small, typed tool surface, and by capturing output to disk, with a completed run's result and metadata `fsync`'d, so the result survives a client disconnect, a…
