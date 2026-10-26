---
repo: "Mojo8898/aliasr"
name: "aliasr"
description: "Aliasr is a modern, feature-rich TUI launcher for pentest commands."
readmeQualityOk: true
url: "https://github.com/Mojo8898/aliasr"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 117
forks: 10
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2025-12-30T22:03:33Z"
lastCommitAt: "2026-10-26T20:59:41Z"
lastReleaseAt: "2026-10-24T02:27:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["Mojo8898", "c0inslot"]
openGraphImageUrl: "https://opengraph.githubassets.com/467c2990809eff06822c629eac7504047852afcbd260724ec5a127f82fdfadb2/Mojo8898/aliasr"
---

# Aliasr

**Aliasr** is a modern, feature-rich TUI launcher for penetration testing commands inspired by [Arsenal](https://github.com/Orange-Cyberdefense/arsenal), but with significantly improved functionality.

## Features

Some of the largest improvements Aliasr implements include:

- [x] Significantly expanded tmux integration.
- [x] Cheat variations that allow for different authentication methods to be built into a single parameter.
- [x] Automatic parameter population based on history and other sources.
- [x] [Exegol-history](https://github.com/ThePorgs/Exegol-history) (SQLite) integration for credential and host management.
- [x] [NetExec](https://github.com/Pennyw0rth/NetExec) (`nxcdb`) integration - credentials and hosts are pulled in on startup and kept in sync.
- [x] A built-in `scan` that fingerprints a target with NetExec and auto-fills your globals.

## Documentation

Full documentation lives in the **[wiki](https://github.com/Mojo8898/aliasr/wiki)**, which serves as a table of contents for the detailed guides:

- [Commands](https://github.com/Mojo8898/aliasr/wiki/01-%E2%80%90-Commands) - the `audit`, `send`, `scan`, `list`, and `clear` subcommands
-…
