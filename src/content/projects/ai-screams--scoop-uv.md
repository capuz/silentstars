---
repo: "ai-screams/scoop-uv"
name: "scoop-uv"
description: "🍨 One scoop, endless envs — centralized Python virtual environment manager with auto-activation ⚡"
readmeQualityOk: true
url: "https://github.com/ai-screams/scoop-uv"
homepage: "https://ai-scream.ai/scoop-uv/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-scream", "bash", "cli", "developer-tools", "environment-manager", "fish", "powershell", "pyenv-alternative", "python", "rust"]
stars: 8
forks: 5
openIssues: 2
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-03T07:48:27Z"
lastCommitAt: "2026-11-04T11:27:47Z"
lastReleaseAt: "2026-01-07T02:21:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 77
maintainers: ["pignuante", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd97d7085410537347196121960a27d0c98d8ed8393ca4b1dc0647f92e1c721b/ai-screams/scoop-uv"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/pignuante"]
discussionCount: 0
---

# 🍨 scuv

> ⚠️ **Work in Progress** — Under active development. API may change.

> 📢 **Renamed in v0.15.0:** the CLI command is now **`scuv`** (formerly `scoop`) — renamed to coexist with [Scoop](https://scoop.sh), the Windows package manager. The crate/repo keep the name `scoop-uv`. Since v0.16.0 the legacy `SCOOP_*`/`.scoop-*` settings are no longer read — see the [CHANGELOG](https://github.com/ai-screams/scoop-uv/blob/HEAD/CHANGELOG.md) for migration notes.

**One scoop, endless envs — pyenv-style Python environment manager powered by uv**

---

## What is scuv? 🍨

**scuv** scoops up uv's blazing speed — centralizing all your Python virtual environments in one place.

> 🍨 Think of it like running an ice cream parlor:
> - **The Freezer** (`~/.scuv/`) keeps all your flavors fresh
> - **Flavors** are your virtualenvs — mix once, serve anywhere
> - **One scoop** is all you need to get the right env

| The Old Way (Yuck 🫠)                | The scuv Way (Fresh 🍨)             |
|-------------------------------------|--------------------------------------|
| `.venv` scattered across projects   | `~/.scuv/virtualenvs/` centralized  |
| Manual `source .venv/bin/activate`  |…
