---
repo: "FiveTechSoft/HarbourRust"
name: "HarbourRust"
description: "Write Harbour. Run native. Rust architecture."
readmeQualityOk: true
url: "https://github.com/FiveTechSoft/HarbourRust"
homepage: "https://fivetechsoft.github.io/HarbourRust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [45]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2026-10-25T05:09:04Z"
lastCommitAt: "2026-11-16T04:27:34Z"
lastReleaseAt: "2026-11-15T07:05:34Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 45
maintainers: ["FiveTechSoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/4021b49a6a3346c3d0d711d7028bd0f97dde24d536a7ebe7e93b0e2ce8d881a3/FiveTechSoft/HarbourRust"
---

# HarbourRust

Write Harbour. Run native. Rust architecture.

HarbourRust is an ahead-of-time native compiler for Harbour, written in Rust. **It is NOT a Harbour-to-Rust translator.** Its ordinary path compiles supported Harbour source to x86-64 machine code and packages it with its own ELF, PE32+ or experimental Intel Mach-O writer. No Rust source is generated, and no Rust toolchain is involved when using an already-built `hbc`. Rust is the implementation language of the compiler, not an intermediate language for your program. There is no VM or interpreter. Support grows construct by construct, with byte-for-byte checks against the original Harbour compiler wherever applicable and explicit records of known differences. Unsupported syntax is rejected explicitly at compile time. Harbour sources in this repository use the standard `.prg` extension.

## Memory model

No VM, no pcode, no garbage collector. Ownership checked at compile time, with deterministic release and no pause times; one limited persistent-value path uses reference counting (see below). In the same family of GC-free designs as Rust and the recent Goose language.

## Dyn heap floats

Kind-5 Dyn values now keep their…
