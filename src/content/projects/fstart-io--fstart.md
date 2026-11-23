---
repo: "fstart-io/fstart"
name: "fstart"
description: "Fast minimal boot firmware written in rust"
readmeQualityOk: true
url: "https://github.com/fstart-io/fstart"
homepage: "https://fstart.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 21
forks: 1
openIssues: 11
closedIssues: 14
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2024-07-05T14:18:34Z"
lastCommitAt: "2026-11-23T12:21:47Z"
lastReleaseAt: "2026-11-18T20:52:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["ArthurHeymans"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b8183f3d71df86ab312ee30be92dc1cd23dd5a1da242b15fd9946193f5f5c97/fstart-io/fstart"
discussionCount: 5
---

# fstart

A firmware framework in Rust using Rust board crates with builder-pattern board
metadata, fixed handwritten stage flow, and step-based hardware initialization.

Supports RISC-V 64, AArch64, ARMv7 and x86. Boots Linux and UEFI.

**Experimental.** This is early-stage software. Internals, APIs, and the board
file format may change drastically without notice.

## Quick start

Install [Rust via rustup](https://rustup.rs/) and QEMU (on macOS, `brew install qemu`).
Run the commands from the repository root so rustup selects the pinned nightly.
The `halt` payload boots the firmware without kernel or firmware payload files.
Look for `ramstage: ready for payload`, then exit QEMU (`Ctrl-A`, then `X`).
