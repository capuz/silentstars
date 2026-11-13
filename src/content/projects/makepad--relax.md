---
repo: "makepad/relax"
name: "relax"
description: "Relax Rust JIT"
readmeQualityOk: true
url: "https://github.com/makepad/relax"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 305
forks: 18
openIssues: 7
closedIssues: 92
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-11-11T19:12:58Z"
lastCommitAt: "2026-11-13T05:35:54Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 26
maintainers: ["moorbrook", "kioku", "Laotree"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd8b8ff77149e6e273e43cbece672e279e2ba3c5c090b272b7e4777c596fb104/makepad/relax"
---

# Relax

> [!WARNING]
> **Experimental.** Relax is for development iteration: running, testing and live-editing your program while you work on it. Build anything you release with Rust itself: `cargo build --release` with rustc.

### Rust without the wait.

**rustc builds your program, then you run it. Relax runs your program while it builds it.**

Relax is a live compiler and JIT runtime for Rust, written in Rust. It runs a Cargo package straight
from source, with no rustc, LLVM or linker in the loop: it compiles each function when it is first
called, optimises the hot ones while the program runs, and patches your edits into the running process.

## Relax vs cargo and rustc

| | cargo + rustc | **Relax** |
| --- | --- | --- |
| **Large 3D game, clean checkout → first frame** | ~3 min build, then start | **11 s** on an M4 MacBook, straight from source |
| **Same game, second run → first frame** | start the built binary | **1.15 s** on an M4 MacBook, nothing recompiled |
| **Small app → first frame** | build it first | **3.7 s** cold, **0.41 s** warm (M4 MacBook) |
| **Change one function in a running program** | rebuild, relink, restart: state lost | **patched in**: state kept |
|…
