---
repo: "jomvick/komet"
name: "komet"
description: "Komet — control your coding agents locally by default, with optional multi-device sync."
readmeQualityOk: true
url: "https://github.com/jomvick/komet"
homepage: "https://komet-eight.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 8
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-08-17T21:45:55Z"
lastCommitAt: "2026-08-28T12:23:33Z"
lastReleaseAt: "2026-08-24T16:31:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["jomvick", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbf4c5235f6b78d76f81f30d57bcb0b44c949d8f77841959c129818f98e500dc/jomvick/komet"
---

# Komet

> Control your coding agents (Claude Code, Codex, Cursor, Grok, Hermes, OpenCode, Pi) — **100% local by default**, optional multi-device sync.

Komet is a native **Rust + gpui** controller in a single binary. Each device runs a small engine that stores sessions locally. No account, no network required at install — sync only activates if you self-host it.

---

## Principles

- **Local-first** — works fully offline, data stays on device
- **Single binary** — UI + engine, headed or headless mode
- **Multiple agents** — unified ACP protocol (Claude, Codex, Cursor, Grok, Hermes, OpenCode, Pi)
- **Optional sync** — Loro CRDT via a self-hosted `komet-sync` server (SQLite + bearer token)

> **Security:** komet's sandbox settings constrain the agent CLI's own permissions — they are not an OS-level boundary. See [docs/security.md](https://github.com/jomvick/komet/blob/HEAD/docs/security.md).

---

## Installation

All binaries are available on [**GitHub Releases**](https://github.com/jomvick/komet/releases).

### Linux

**One-line install (recommended)**
```bash
curl -fsSL https://raw.githubusercontent.com/jomvick/komet/main/install.sh | sh
komet status
```
Installs `komet` to…
