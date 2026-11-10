---
repo: "Onion-L/holt"
name: "holt"
description: "A native desktop coding agent built with Rust and GPUI. "
readmeQualityOk: true
url: "https://github.com/Onion-L/holt"
homepage: "https://holtagent.cc"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "ai-agent", "ai-agents", "ai-tools", "anthropic", "coding-agent", "gemini", "gpui", "harness", "kimi"]
stars: 20
forks: 0
openIssues: 28
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-02T03:49:26Z"
lastCommitAt: "2026-11-10T14:06:06Z"
lastReleaseAt: "2026-09-30T11:25:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Onion-L"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b53cf4d38473ebc08b0f0ee8f2cc2e3ec60d6a4d49cebba933ace9d541cfa0e/Onion-L/holt"
---

A local coding agent that survives crashes and lets you rewind any step.

  English · <a href="README.zh-CN.md">简体中文</a>

> [!WARNING]
> Holt is a work in progress — an experimental project under active
> development. Expect rough edges and breaking changes.

## Why Holt

Long tasks fail at the worst times. The build is two hours in, the agent is mid-run, and the app gets killed. Every other tool tells the model "it may have partly run" and starts over. Holt doesn't.

- **Survives crashes.** When the app is killed mid-run, Holt restores orphan processes, tells the model exactly which files changed since it started, and picks up the Turn automatically. The model sees what happened and decides whether to continue — it doesn't start from scratch.
- **Rewind to any step.** Every tool call that touches a file records the exact bytes before and after. If the agent goes off track, hover any tool chip and rewind — the conversation is trimmed and the files go back together, all or nothing.
- **Local only.** No cloud, no accounts, no sync, no telemetry. Chats, transcripts, credentials, and checkpoints live under `~/.holt` and nowhere else.
- **One process.** No daemon, no CLI. A native…
