---
repo: "Manhhao/Hoshi-Reader-Desktop"
name: "Hoshi-Reader-Desktop"
description: "Japanese EPUB reader for macOS and Windows"
readmeQualityOk: true
url: "https://github.com/Manhhao/Hoshi-Reader-Desktop"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [34, 33]
stars: 38
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-07-01T18:23:25Z"
lastCommitAt: "2026-09-30T09:55:40Z"
lastReleaseAt: "2026-09-29T23:51:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 35
maintainers: ["Manhhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6d4ed18c53d6dbd112a3ef45e03c4faae3c8e9cca875b764e4661bd4208ab31/Manhhao/Hoshi-Reader-Desktop"
fundingLinks: ["GITHUB:https://github.com/Manhhao", "KO_FI:https://ko-fi.com/manhhao"]
---

# Hoshi Reader Desktop

Desktop version of [Hoshi Reader](https://github.com/Manhhao/Hoshi-Reader) and [Hoshi Reader Android](https://github.com/HuangAntimony/Hoshi-Reader-Android), made using Tauri and Svelte.
</p>

</div>

## Download

Download the `.dmg` for macOS 15+ (Apple Silicon) or the `-setup.exe` for Windows.

## Features

- Vertical (縦書き) and horizontal (横書き) text
- Pop-up dictionary with support for Yomitan term, frequency, pitch and kanji dictionaries
- Audio support for local and remote sources
- Sasayaki (audiobooks)
- Reading statistics
- Mining using AnkiConnect (mainly supports handlebars used by [Lapis](https://github.com/donkuri/lapis#how-to-use-lapis))
- Syncing of books, shelves, bookmarks, highlights and Sasayaki with iOS and Android

## Development

### Prerequisites

- [Rust](https://rustup.rs/) 1.88+
- [Node.js](https://nodejs.org/) 22.12+
- [pnpm](https://pnpm.io/)
- [CMake](https://cmake.org/) 3.24+
- A C++23 compiler
  - macOS: Xcode Command Line Tools
  - Windows: Visual Studio with *Desktop development with C++ workload* and *C++ Clang tools for Windows*

### Run

```sh
pnpm install
pnpm tauri dev
```

### Build

Build release bundles without signing…
