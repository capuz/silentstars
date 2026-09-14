---
repo: "himkt/cafleet"
name: "cafleet"
description: "🛰️ Coding Agent Fleet (cafleet) is a coding agent orchestrator for multi-agents collaboration across coding agent providers"
readmeQualityOk: true
url: "https://github.com/himkt/cafleet"
homepage: "https://himkt.github.io/cafleet/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["agent", "coding-agent", "skills", "agent-teams", "claude-code", "codex", "opencode"]
stars: 51
forks: 4
openIssues: 1
closedIssues: 44
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-28T05:56:46Z"
lastCommitAt: "2026-09-14T09:13:08Z"
lastReleaseAt: "2026-05-24T09:47:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["himkt", "renovate-on-himkt[bot]", "bump-on-himkt[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/769c3dc0df79080773f974a75f90242e62156b01640fed582866f89c98baf9e0/himkt/cafleet"
---

# CAFleet

https://github.com/user-attachments/assets/bd2b195a-f3de-4fa3-bcc8-3c6ef9f1016a

Agent Teams reinvented for collaborative coding across multiple coding-agent backends (Claude Code, Codex, and OpenCode), with full code transparency. CAFleet is a message broker and member registry for coding agents, exposing a unified `cafleet` CLI and an admin WebUI over a single-file SQLite database. Fleets partition members into isolated namespaces, and the CLI accesses SQLite directly — no HTTP server required. It is built for developers and operators running auditable multi-agent coding teams in tmux or herdr.

## Install

Install the CLI with Homebrew, then run the setup:

```bash
brew install himkt/tap/cafleet
cafleet setup
```

Alternatively, download the archive for your platform from [GitHub Releases](https://github.com/himkt/cafleet/releases) — `cafleet-v<version>-<target>.tar.gz` for `aarch64-apple-darwin`, `x86_64-unknown-linux-musl`, or `aarch64-unknown-linux-musl` — then extract the single `cafleet` binary onto your `PATH` and run the same setup:

```bash
tar -xzf cafleet-v<version>-<target>.tar.gz
mv cafleet ~/.local/bin/
cafleet setup
```

Full guide:…
