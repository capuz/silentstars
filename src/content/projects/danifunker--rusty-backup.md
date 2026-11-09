---
repo: "danifunker/rusty-backup"
name: "rusty-backup"
description: "Backup your vintage computer hard disks using your modern one"
readmeQualityOk: true
url: "https://github.com/danifunker/rusty-backup"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 20
forks: 3
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-29T12:30:46Z"
lastCommitAt: "2026-11-09T04:35:09Z"
lastReleaseAt: "2026-03-03T20:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["danifunker"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5f5b61b22e9f933677f50b8e398a08d19aab532c22f5b1da6bd69fae296843f/danifunker/rusty-backup"
---

# Rusty Backup

Cross-platform GUI tool for backing up, restoring, and inspecting vintage
computer disk images. The name is a play on words — both referencing the Rust
programming language and the rusty vintage machines we're preserving.

Primary users are retro computing enthusiasts archiving CF/SD cards, IDE/SCSI
drives, and floppy images (including flux-level captures) from DOS, Windows
9x, early Linux, classic Mac OS, and Apple II / IIgs systems.

Licensed under **AGPL-3.0**. See `PROJECT-SPEC.md` for the full design
specification and `docs/` for deep-dive topics.

## Installation

Rusty Backup ships as a single self-contained binary per platform.

1. Grab the latest build for your OS from the
   [GitHub Releases page](https://github.com/danifunker/rusty-backup/releases).
2. Drop the binary where you want it:
   - **Windows** — run `Setup.exe` for the installed experience
     (Start-Menu shortcut, "Add/Remove Programs" entry, optional
     file-association registration, `rb-cli` on `PATH`), or extract the
     portable ZIP and run `rusty-backup.exe` directly. Either install
     can self-update in place from within the **About / Update** UI;
     existing portable-ZIP users…
