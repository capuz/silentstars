---
repo: "HaroldMth/sven"
name: "sven"
description: "Sven - Package Manager for LFS "
url: "https://github.com/HaroldMth/sven"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-02T20:06:58Z"
lastCommitAt: "2026-06-27T00:36:57Z"
lastReleaseAt: "2026-05-18T22:53:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 55
maintainers: ["HaroldMth"]
openGraphImageUrl: "https://opengraph.githubassets.com/07df93b1f1b445e335e9b6df9ca19abb0816fa68b66893576cd74727ef86c551/HaroldMth/sven"
---

# Sven

**Sven** is the package manager for **Seven OS** — a Linux From Scratch (LFS)
based distribution. It bridges two worlds: the convenience of a real
repository-backed package manager (à la `pacman`), and the reality of a
hand-built, non-systemd LFS/BLFS system.

Concretely, Sven:

- Resolves and installs packages from the **official Arch repos + AUR**
- **Filters out systemd-only dependencies** so packages stay installable on
  SysVinit/OpenRC hosts, suggesting non-systemd alternatives where one exists
- Tracks everything it installs in a **local package database**, with
  rollback snapshots for safe undos
- Can **adopt** software you already built by hand from LFS/BLFS — so you
  don't have to start your package-managed history from zero
- Leans on a small **C core** (`libsven`) for the hot paths — version
  comparison, dependency resolution, systemd filtering, topological sort,
  and (when `libarchive-dev` is available) extraction — with safe pure-Python
  fallbacks for everything else

## How this project is built

Sven is **architected by a human, coded by AI.** Harold (HANS BYTE) designs
the system — the package format strategy, the systemd-filtering approach,
the…
