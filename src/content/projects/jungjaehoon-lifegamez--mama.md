---
repo: "jungjaehoon-lifegamez/MAMA"
name: "MAMA"
description: "Local-first operating memory for AI coding agents - Claude Code, Codex, and any MCP client. Tracks decisions and their evolution. SQLite + on-device embeddings, no cloud."
readmeQualityOk: true
url: "https://github.com/jungjaehoon-lifegamez/MAMA"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["claude-code", "claude-code-plugins", "decision-tracking", "embeddings", "mcp-server", "memory-management", "sqlite", "transformers-js", "session-continuity", "reasoning-graph"]
stars: 15
forks: 7
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-11-21T12:27:04Z"
lastCommitAt: "2026-11-14T10:48:46Z"
lastReleaseAt: "2026-02-03T06:05:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["jungjaehoon-lifegamez", "hoonsam"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a5588a2a2646276dbbf868405f47cd971974b4034440ce66dedbf943af2e31/jungjaehoon-lifegamez/MAMA"
discussionCount: 0
---

# MAMA

[Documentation](https://jungjaehoon-lifegamez.github.io/MAMA/) ·
[Your first day](https://github.com/jungjaehoon-lifegamez/MAMA/blob/HEAD/docs/start/tutorial.md) · [How it works](#how-it-works) ·
[What you can connect](#what-you-can-connect) · [Security](#security) · [Roadmap](#roadmap)

MAMA is a **work agent that runs on your own computer**. It follows the conversations, files and
schedules in the tools you connect, keeps them as they were, and keeps a history of each piece of
work: what changed, why, who did it and what the feedback was. You talk to it in your messenger.
It answers from that history, sends you reports, and remembers how you want things done.

The same repository also gives Claude Code a **development memory** (decisions and checkpoints
that survive a new session), and both are built on **mama-core**, a shared engine other products
can use.

MAMA runs no hosted service. The record stays on your machine. Only the content a run needs
leaves it, through the AI CLI you logged into and the services you connected.

## Why

An assistant is only as useful as what it remembers, and memory kept on someone else's server
disappears when the service changes. MAMA…
