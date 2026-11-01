---
repo: "piteengine/pite"
name: "pite"
description: "Pite -  A game engine that's handy to use, to change, to own. Performance and simplicity at the same time. "
readmeQualityOk: true
url: "https://github.com/piteengine/pite"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["game-engine", "python", "python-game-engine", "rust", "pite-engine", "rust-game-engine"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-09-30T14:06:48Z"
lastCommitAt: "2026-11-01T10:45:04Z"
lastReleaseAt: "2026-10-12T16:01:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 49
maintainers: ["mkh-user", "dependabot[bot]", "EbParsa"]
openGraphImageUrl: "https://opengraph.githubassets.com/aadb39f6f78cf1975c6739d2b11a900a77a1aa7c6a7ff1038ca5980dba78b468/piteengine/pite"
discussionCount: 1
---

# Pite

Pite - A game engine that's handy to use, to change, to own. Rust core, Python scripting, visual editor.

Build games from scenes and nodes (not ECS) - edit visually, script in Python.

## Quickstart

Install the engine bundle (engine + player binaries for all platforms, so any machine
exports for any platform) — latest stable, verified on download:

Linux / macOS Terminal:

```sh
curl -fsSL https://raw.githubusercontent.com/piteengine/pite/main/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/piteengine/pite/main/install.ps1 | iex
```

Then:

```sh
pite new hello --template minimal-2d
pite run --scene examples/minimal-2d/scenes/main.ptscn
pite check
pite edit --scene examples/minimal-2d/scenes/main.ptscn
```

Install once, then use `pite`. `new` scaffolds a project, `run` plays a scene (defaults to the project's main scene), `check` validates it, `edit` opens the editor, `vendor` pins third-party Python packages. Building from source instead: `cargo build --release -p pite-cli -p pite-player` (needs CPython 3.12 dev headers, see `CONTRIBUTING.md`).

### Export

```sh
pite export linux
```

`export linux|windows|macos` writes a…
