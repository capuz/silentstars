---
repo: "intent-hq/intentd"
name: "intentd"
description: "Rust backend daemon for Intent — agent orchestration, workspaces, and the JSON-RPC wire protocol"
readmeQualityOk: true
url: "https://github.com/intent-hq/intentd"
homepage: "https://intentapp.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["agent-orchestration", "ai-agents", "daemon", "json-rpc", "rust"]
stars: 14
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 3
createdAt: "2026-06-17T13:26:39Z"
lastCommitAt: "2026-11-22T01:42:52Z"
lastReleaseAt: "2026-07-23T11:52:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["panghy", "intent-hq-ci", "wookiehangover"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8d30fa70d85a6a1fb5876298204d81c3d56f7b29353d1dbb27228f7f30916e4/intent-hq/intentd"
---

# intentd

`intentd` is a local-first, headless Rust daemon that owns the Intent domain model —
workspaces, notes, tasks, comments, agents, git, pull requests, scripts, terminals, files,
and events — and exposes it over a **JSON-RPC 2.0** API. Clients (a desktop UI, a CLI, or an
agent acting as an MCP client) are thin: all business logic lives in the daemon.

This repo is consumed as a git submodule by [intent-hq/intent](https://github.com/intent-hq/intent).

## What it is

- **Local-first.** The default transport is a **Unix-domain socket** (mode `0600`,
  newline-delimited JSON-RPC frames). A secure **WSS/TLS** LAN transport (bearer auth,
  origin allow-list, TLS fingerprint pinning) runs alongside it; there
  is no plaintext TCP product transport.
- **Single source of truth.** The daemon owns all durable state in **SQLite** (via `sqlx`
  with embedded migrations); clients hold only ephemeral UI state.
- **One service layer, many transports.** Transports are thin; the shared `WorkspaceApi`
  service surface is the single code path every listener — and the agent-facing MCP
  server — calls.
