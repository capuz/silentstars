---
repo: "aya-rs/bpf-linker"
name: "bpf-linker"
description: "BPF static linker"
readmeQualityOk: true
url: "https://github.com/aya-rs/bpf-linker"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 291
forks: 61
openIssues: 10
closedIssues: 35
watchers: 5
contributors: 21
recentReleases: 0
createdAt: "2020-11-27T05:50:59Z"
lastCommitAt: "2026-08-17T04:19:41Z"
lastReleaseAt: "2025-02-26T17:31:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 38
maintainers: ["vadorovsky", "tamird", "crabby-the-crab"]
openGraphImageUrl: "https://opengraph.githubassets.com/188ffbf12a88ec26df85a39cbfb17d2bbaabb384f2ecbb0972fca229bb418575/aya-rs/bpf-linker"
---

# BPF Linker 🔗

bpf-linker aims to simplify building modern BPF programs while still supporting
older, more restrictive kernels.

[build-badge]: https://img.shields.io/github/actions/workflow/status/aya-rs/bpf-linker/ci.yml
[build-url]: https://github.com/aya-rs/bpf-linker/actions/workflows/ci.yml

## Overview

bpf-linker can be used to statically link multiple BPF object files together
and optionally perform optimizations needed to target older kernels. It
operates on LLVM bitcode, so the inputs can be bitcode files (.bc), LLVM IR
files (.ll), or object files with embedded bitcode (.o), optionally stored
inside ar archives (.a).

## Installation

### cargo-binstall

The recommended installation method is via
[cargo-binstall][cargo-binstall]. Install `cargo-binstall` first, then run:

```sh
cargo binstall bpf-linker
```

[cargo-binstall]: https://github.com/cargo-bins/cargo-binstall

### Manual download

Download the tarball from the [releases page][releases] that matches your Rust
target triple. The published binaries currently use `*-apple-darwin` for macOS
and `*-unknown-linux-musl` for Linux, and `*-pc-windows-gnullvm` for Windows.

After downloading, unpack the archive into…
