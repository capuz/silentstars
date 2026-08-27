---
repo: "delmarguillen/euro-office-lite"
name: "euro-office-lite"
description: "Lightweight offline office suite based on Euro-Office editors and Tauri"
readmeQualityOk: true
url: "https://github.com/delmarguillen/euro-office-lite"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [44, 39]
stars: 21
forks: 1
openIssues: 17
closedIssues: 27
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-06-21T21:54:14Z"
lastCommitAt: "2026-08-27T14:25:53Z"
lastReleaseAt: "2026-06-29T16:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 45
maintainers: ["delmarguillen"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f3ae2cbab0dfce4eea30a218246e67d63b1289337be1ad1bec5415ef7161eca/delmarguillen/euro-office-lite"
---

# Euro-Office Lite

Lightweight desktop office suite built on Tauri v2 and Euro-Office editors. Installers: ~89 MB (Windows), ~113-120 MB (macOS), ~121 MB (Linux .deb), ~82 MB (Flatpak). No cloud, no telemetry.

Supports Word, Excel, and PowerPoint documents with native file operations and direct printing. Available for Windows (x64, ARM64), macOS (Apple Silicon and Intel, signed and notarized), and Linux (x64 .deb and Flatpak).

> **Alpha**: This project is in early development. Core features work (create, open, edit, save), but expect rough edges. Printing works on Windows; PDF export works on all platforms.

  <br><br>
</p>

## Known issues

Euro-Office Lite is alpha. A few things you will run into early:

- **Only English and Spanish are checked out of the box** (#6). Dictionaries for both ship with the app (every regional Spanish variant is checked). Text in other languages is left unchecked, not marked as wrong, and you can add any other language yourself: see [Adding more spellcheck languages](#adding-more-spellcheck-languages).
- **Plain text (.txt) and .csv files cannot be opened yet.** They need an encoding and delimiter dialog the app does not have; DOCX, XLSX, PPTX,…
