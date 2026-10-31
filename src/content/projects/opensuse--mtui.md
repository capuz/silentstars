---
repo: "openSUSE/mtui"
name: "mtui"
description: "Maintenance Test Update Installer"
readmeQualityOk: true
url: "https://github.com/openSUSE/mtui"
homepage: "https://opensuse.github.io/mtui/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["maintenance", "rust", "suse"]
stars: 7
forks: 12
openIssues: 11
closedIssues: 110
watchers: 10
contributors: 49
recentReleases: 5
createdAt: "2022-08-12T10:35:55Z"
lastCommitAt: "2026-10-31T19:01:27Z"
lastReleaseAt: "2026-09-15T14:17:52Z"
status: "thriving"
tags: ["hidden_gem", "community_watch", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 90
maintainers: ["mimi1vx", "plusky", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/524047243/6fcc0380-9870-4540-9bec-718fe6a1e07d"
---

# mtui

An **improved, idiomatic Rust successor** to MTUI — the **M**aintenance **T**est
**U**pdate **I**nstaller, SUSE QE's tool for validating maintenance updates: load
a request by RRID, install and test it on reference hosts over SSH in parallel,
then approve or reject. It drives OBS/IBS and Gitea review workflows and
openQA/QEM; reports load from and upload to TeReGen's v2 API.

mtui is memory-safe, async-native, and distributed as static binaries, while
preserving the data-format and workflow contracts that keep it interoperable with
the SUSE maintenance ecosystem.

## Design goals

- **Safety & robustness** — strong types, exhaustive error enums, no interpreter.
- **Performance** — async I/O (`tokio`), true parallel host fan-out, fast startup.
- **Distribution** — two static binaries (`mtui`, `mtui-mcp`), no runtime
  interpreter or virtualenv; generated shell completions and man pages.
- **Maintainability** — a Cargo workspace with clean crate boundaries and one
  composition root.

## Two surfaces

- `mtui` — interactive REPL (line editing, tab completion, history).
- `mtui-mcp` — a Model Context Protocol server whose tools are **synthesised from
  the command registry**,…
