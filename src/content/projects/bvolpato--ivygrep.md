---
repo: "bvolpato/ivygrep"
name: "ivygrep"
description: "Turn code tasks, diffs, and stack traces into local, relationship-aware context packs for coding agents."
readmeQualityOk: true
url: "https://github.com/bvolpato/ivygrep"
homepage: "https://bvolpato.github.io/ivygrep/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["mcp", "cli", "code-intelligence", "code-search", "coding-agents", "developer-tools", "local-first", "model-context-protocol", "rust", "semantic-search"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 89
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T18:23:55Z"
lastCommitAt: "2026-11-27T12:55:08Z"
lastReleaseAt: "2026-04-04T03:47:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["bvolpato", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1530c683bd286c26fa8e39a23d87fa941bddd2aeafa2d83fa303fcf0372275ff/bvolpato/ivygrep"
discussionCount: 0
---

Local search for code and notes, and context packs for coding agents.

## What it does

- **Answers questions about code.** Ask in plain words and get ranked files, line numbers, and previews. Exact text, symbols, references, and callers use the same index.
- **Feeds coding agents.** `ig context` builds one evidence pack for a task: the code, its definitions, callers, dependencies, and tests, within a token budget. Claude Code, Codex, Cursor, Gemini CLI, OpenCode, and other MCP clients can call it.
- **Stays on your machine.** Files, queries, embeddings, and indexes are local. There is no account and no telemetry. The default model downloads 33.5 MB of pinned assets on first use and runs on CPU.
- **Keeps up.** A daemon watches your files and updates what changed. Git worktrees share one base index.

ivygrep runs on macOS, Linux, and Windows. It supports 45 language and file types.
