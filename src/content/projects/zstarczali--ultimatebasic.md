---
repo: "zstarczali/UltimateBasic"
name: "UltimateBasic"
description: "A modern BASIC-like language that compiles directly to 6502 machine code for the Commodore 64 and Commodore 64 Ultimate. It produces .prg files that run in VICE or on real hardware, and can also build .d64 disk images."
readmeQualityOk: true
url: "https://github.com/zstarczali/UltimateBasic"
homepage: "https://www.c64va.pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "freeware", "linux", "osx", "windows", "compiler", "rust-cli"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-05-22T21:01:15Z"
lastCommitAt: "2026-11-27T16:24:04Z"
lastReleaseAt: "2026-10-17T10:09:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 56
maintainers: ["zstarczali"]
openGraphImageUrl: "https://opengraph.githubassets.com/00bf1e27d4d4d70ebe5a2c744ca11faaf7bf6b94623a503b0a2d74ad12ac3a7e/zstarczali/UltimateBasic"
---

# Ultimate Basic

Current version: **1.6.9**

A modern BASIC-like language that compiles directly to 6502 machine code for the
**Commodore 64** and **Commodore 64 Ultimate**. It produces `.prg` files that run in
VICE or on real hardware, and can also build `.d64` disk images.

Ultimate Basic looks like classic BASIC but compiles ahead of time — no interpreter,
no line numbers required. It adds typed variables (`int`/`word`/`float`/`string`/arrays),
subroutines and functions, structured control flow, and direct, high-level access to the
C64's hardware: bitmap and block graphics, sprites, SID sound and music, raster/CIA/NMI
interrupts, REU transfers, disk I/O, CRT cartridge export, and inline 6502 assembly.

Hires bitmap drawing (`plot`, `line`, `rect`, `circle`, `paint`) picks its color from
`color pen c` — a persistent foreground color stamped into each touched cell. Multicolor
bitmap mode has its own shape commands — `mplot`, `mline`, `mrect`, and `mcircle` — where
the trailing `color` argument selects the 2-bit color source (0–3).
