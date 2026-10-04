---
repo: "AOSC-Dev/ciel-rs"
name: "ciel-rs"
description: "A tool for controlling AOSC OS packaging environments using multi-layer filesystems and containers (version 3)"
readmeQualityOk: true
url: "https://github.com/AOSC-Dev/ciel-rs"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [63, 37]
stars: 23
forks: 12
openIssues: 3
closedIssues: 14
watchers: 27
contributors: 110
recentReleases: 0
createdAt: "2021-01-08T10:00:44Z"
lastCommitAt: "2026-10-04T10:02:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 70
undervaluedScore: 38
maintainers: ["MingcongBai", "eatradish", "liushuyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d953dd2cb54ad396c800d4f340d29a698d48107f83d1c501b3482ddc80257c10/AOSC-Dev/ciel-rs"
discussionCount: 0
---

# Ciel 3
An **integrated packaging environment** for AOSC OS.

**Ciel** /sjɛl/ uses *systemd-nspawn* container as its backend and *overlay* file system as support rollback feature.

## Manual

```bash
ciel --help
```

## Installation

```bash
cargo build --release
install -Dm755 target/release/ciel-rs /usr/local/bin/ciel
PREFIX=/usr/local ./install-assets.sh
```

## Dependencies

Building:
- Rust w/ Cargo (Rust 1.80.0+)
- C compiler
- pkg-config (for detecting C library dependencies)
- make (when GCC LTO is used, not needed for Clang)

Runtime:
- Systemd
- D-Bus
- OpenSSL
- liblzma (optional)
- libgit2 (optional)

Runtime Kernel:
- Overlay file system
