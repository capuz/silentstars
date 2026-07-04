---
repo: "wuisabel-gif/MemWhale"
name: "MemWhale"
description: "MemoryWhale is a Rust/Tauri local-first terminal memory system that records commands, arguments, logs, sessions, errors, bookmarks, and debug history into SQLite so work survives across machines, SSH sessions, containers, and crashes."
readmeQualityOk: true
url: "https://github.com/wuisabel-gif/MemWhale"
homepage: "https://wuisabel-gif.github.io/MemWhale/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["cli", "command-line", "debugging", "developer-tools", "jetson", "knowledge-graph", "local-first", "memory", "react", "robotics"]
stars: 36
forks: 21
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-17T18:47:53Z"
lastCommitAt: "2026-07-04T22:18:02Z"
lastReleaseAt: "2026-07-02T23:20:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 55
maintainers: ["wuisabel-gif"]
openGraphImageUrl: "https://opengraph.githubassets.com/8300da0cce258278c5369a15ca1d2eba17281a048ec35cdc35dea93af25c0eac/wuisabel-gif/MemWhale"
---

</p>

<h1 align="center">MemoryWhale</h1>

</p>

  🐬 <b>Sibling project:</b> <a href="https://github.com/wuisabel-gif/Delphin">Delphin</a> — the duplex communication layer (talk to your agent while it thinks). MemoryWhale is the memory layer — see <a href="ECOSYSTEM.md">ECOSYSTEM.md</a>.
</p>

Shell history remembers commands loosely. It does not preserve the debugging
situation: the machine, the working directory, the exact flags, the error
output, and the note about what the attempt meant. When the terminal crashes,
the SSH session drops, or the scrollback scrolls away, that context is gone —
and you (or your AI agent) re-debug what was already solved.

**MemoryWhale records commands, arguments, output, errors, and whole sessions
into local SQLite, so what already failed stays searchable** — across crashes,
SSH drops, and machine switches. Everything stays on your machine; nothing is
uploaded.

</p>

## Install

Prebuilt binaries for Linux x86_64/aarch64 (incl. Jetson) and macOS — no Rust
toolchain needed:

```bash
curl -fsSL https://raw.githubusercontent.com/wuisabel-gif/MemWhale/main/install.sh | sh
```

Installs into `~/.local/bin` (override with `PREFIX=/usr/local`). Other…
