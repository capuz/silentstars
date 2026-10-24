---
repo: "quer3q/ps5-dump-forge"
name: "ps5-dump-forge"
description: "A toolkit for working with PS5 game dumps. Cross-platform - including the PS5 itself."
readmeQualityOk: true
url: "https://github.com/quer3q/ps5-dump-forge"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [69, 24]
topics: ["homebrew", "ps5"]
stars: 78
forks: 4
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-10-06T18:45:14Z"
lastCommitAt: "2026-10-24T08:20:42Z"
lastReleaseAt: "2026-10-20T13:08:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 32
maintainers: ["quer3q", "itanivalkyrie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1841f3a4b28652935e82809bf57e6e8267ecf45ba112f1842a5e66fbf962836c/quer3q/ps5-dump-forge"
---

Runs on PS5, Windows, macOS and Linux, and can convert and edit any format: game `folders`, `exfat`, `ffpkg`, `ffpfs`,
`ffpfsc` and `FPKG (pkg)` packages, straight from `zip`, `7z` and `rar` too, with experimental `LZ4` asset packs for AMPR games.

Also supports **transfers and on-the-fly conversion** on all platforms, with the interface translated into **11 languages**.

| Platform | Runs on | You get |
|---|---|---|
| **PS5** | With an ELF loader | The payload (`.elf`); the UI opens in any browser |
| **macOS** | 11 or later, Apple Silicon and Intel (one universal zip) | App + CLI |
| **Windows** | 10 or 11 on x86-64, 11 on arm64 | App + CLI |
| **Linux** | x86-64 or arm64, glibc 2.35+ (e.g. Ubuntu 22.04+) | App (no install, no FUSE) + CLI |

## Features

- **Any source to any target**, streamed straight through: no temporary copy, not even the image inside a `.ffpfsc` or a game in an archive.
- **Every format ShadowMountPlus mounts**, created and read back, plus the debug FPKG; the app's About tab compares their console speed and size on disk.
- **Archives as sources**: a `.zip`, `.7z` or `.rar` holding one game is browsed, converted or packed like a folder.
- **LZ4…
