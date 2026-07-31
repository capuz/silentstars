---
repo: "nosman/gossamer"
name: "gossamer"
description: "Track your thought process alongside your code"
readmeQualityOk: true
url: "https://github.com/nosman/gossamer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T04:55:33Z"
lastCommitAt: "2026-07-31T06:28:20Z"
lastReleaseAt: "2026-03-24T04:19:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["nosman"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a15291cbd8dde900d1396ef46dccfdec48ebd4d2a5c0591c360447c0358dbdd/nosman/gossamer"
---

# gossamer

Gossamer is an [Entire](https://entire.io) (`entire`) CLI plugin for tracking AI coding sessions across your git repositories. It sits on top of entireio, which checkpoints AI agent conversations to a dedicated `entire/checkpoints/v1` git branch as you work. Gossamer ingests those checkpoints (plus live Claude Code session logs) into a local SQLite database, gives you an interactive terminal UI for browsing repos, worktrees, and past sessions, and layers semantic search on top via a local embedding/vector-search library (witchcraft) — so you can find "that session where I fixed the auth bug" without remembering which repo or day it happened. It also wires into Claude Code's hooks to auto-track sessions as they start and stop, and provides shell helpers (`gr`) and worktree-aware resume/launch commands so you can jump straight back into any tracked conversation.

Gossamer ships as the binary `entire-gossamer`, invoked as `entire gossamer ...` once installed (or directly as `entire-gossamer ...` — see [Install](#installation)). It complements entire's own session/checkpoint commands (`entire session ...`, `entire checkpoint ...`) rather than replacing them: entire has no…
