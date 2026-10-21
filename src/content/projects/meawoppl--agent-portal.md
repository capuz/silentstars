---
repo: "meawoppl/agent-portal"
name: "agent-portal"
description: "Elegant web interface for agentive development."
readmeQualityOk: true
url: "https://github.com/meawoppl/agent-portal"
homepage: "https://txcl.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["agent", "claude-code", "codex", "developer-tools", "proxy", "agent-orchestration", "ai", "ai-agents", "artificial-intelligence"]
stars: 19
forks: 3
openIssues: 8
closedIssues: 450
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-01-08T15:01:37Z"
lastCommitAt: "2026-10-21T23:36:12Z"
lastReleaseAt: "2026-10-21T23:28:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 62
maintainers: ["meawoppl", "Tohuvavohu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec9cb6f8ac452a09767d1c4bf983dcfbc0d13fd62613921ec3638c6c7e2bb4d0/meawoppl/agent-portal"
---

# Agent Portal — Try It: [txcl.io](https://txcl.io)

Run coding agents on your own machines and drive them from any browser.

Agent Portal puts a persistent daemon on each of your computers, connects it to
a server you (or we) host, and gives you a live, shareable web UI for every
agent session on every machine — from a phone, a laptop, or a tab you left open
yesterday. Hand a task to an agent on your workstation, close the lid, and pick
it up on the train: the transcript, the cost, the pending permission prompt and
the dev server it just started are all still there.

It is Rust end to end — Axum server, Yew/WebAssembly frontend, a launcher
daemon, and a typed WebSocket protocol shared by all of them.

Supported agents: **Claude Code**, **OpenAI Codex**, and **Meta Muse Code**
(experimental).

[Features Anthropic Missed](https://www.loom.com/share/38bdd5406c2443ff8c978d5d5b01e967)

---

## Quick Start

### Use the hosted portal

On each machine you want to run agents on:

```bash
curl -fsSL "https://txcl.io/api/download/install.sh" | bash

agent-portal login             # browser device-code sign-in
agent-portal service install   # run as a systemd / launchd service
```…
