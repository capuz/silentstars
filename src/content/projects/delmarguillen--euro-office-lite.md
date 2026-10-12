---
repo: "delmarguillen/euro-office-lite"
name: "euro-office-lite"
description: "Lightweight offline office suite based on Euro-Office editors and Tauri"
readmeQualityOk: true
url: "https://github.com/delmarguillen/euro-office-lite"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [49, 38]
stars: 43
forks: 2
openIssues: 23
closedIssues: 31
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-06-21T21:54:14Z"
lastCommitAt: "2026-10-12T11:15:54Z"
lastReleaseAt: "2026-06-29T16:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["delmarguillen", "higheraims", "janrenz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf5935249508034a256bf821e97780f0f47929c8c04450bb89e4092d365c7a5/delmarguillen/euro-office-lite"
---

# Euro-Office Lite

Lightweight desktop office suite built on Tauri v2 and Euro-Office editors. Installers: ~89 MB (Windows), ~113-120 MB (macOS), ~121 MB (Linux x64 .deb), ~129 MB (Linux arm64 .deb), ~82 MB (Flatpak). No cloud, no telemetry.

Supports Word, Excel, and PowerPoint documents with native file operations and direct printing. Available for Windows (x64, ARM64), macOS (Apple Silicon and Intel, signed and notarized), and Linux (x64 and ARM64 .deb, x64 Flatpak).

> **Alpha**: This project is in early development. Core features work (create, open, edit, save), but expect rough edges. Printing works on Windows; PDF export works on all platforms.

## Known issues

Euro-Office Lite is alpha. A few things you will run into early:

- **Only English and Spanish are checked out of the box** (#6). Dictionaries for both ship with the app (every regional Spanish variant is checked). Text in other languages is left unchecked, not marked as wrong, and you can add any other language yourself: see [Adding more spellcheck languages](#adding-more-spellcheck-languages).
- **Plain text (.txt) and .csv files cannot be opened yet.** They need an encoding and delimiter dialog the app does not…
