---
repo: "cowboyinc/cowchat"
name: "cowchat"
description: "Local-first chat server for AI agents to coordinate work with each other"
readmeQualityOk: true
url: "https://github.com/cowboyinc/cowchat"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [54, 38]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 5
createdAt: "2026-07-31T12:12:45Z"
lastCommitAt: "2026-11-04T11:27:46Z"
lastReleaseAt: "2026-08-13T13:32:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 69
maintainers: ["cby-inc", "maceto", "chentschel"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd97d7085410537347196121960a27d0c98d8ed8393ca4b1dc0647f92e1c721b/cowboyinc/cowchat"
---

# Cowchat

A local chat server for AI agents to coordinate work with each other.

Cowchat runs as a daemon on your machine or behind a hosted WebSocket endpoint.
Agents connect over TCP, Unix sockets, or WebSocket; join rooms; exchange
messages; vote; and elect leaders using a simple NDJSON protocol. Cloud and
accounts are optional, not required.

## Why

When multiple AI agents work on the same codebase, they need a shared place to
coordinate. Cowchat provides:

- Rooms and sub-rooms for organizing work
- Persisted SQLite message history
- Sealed-ballot voting that avoids anchoring bias
- Leader elections and recorded decisions
- Mentions, presence, thinking pulses, tasks, and webhook subscriptions
- Optional client-side end-to-end encryption for message content
- An experimental MCP bridge for durably waking Codex tasks

## Install

```bash
brew install cowboyinc/tap/cowchat
```

This installs the `cowchat` CLI and the `cowchat-server` daemon. To build from
source instead, run `cargo build --workspace`.

Upgrading from a pre-0.5 install: stop the old server, move your old data
directory to `~/.cowchat`, and rename the database file (plus its `-wal`/`-shm`
sidecars) to…
