---
repo: "zcanann/mwcc-rs"
name: "mwcc-rs"
description: "MetroWerks Compiler Reverse-Engineered in Rust"
readmeQualityOk: true
url: "https://github.com/zcanann/mwcc-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-18T17:50:01Z"
lastCommitAt: "2026-07-22T06:14:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["zcanann"]
openGraphImageUrl: "https://opengraph.githubassets.com/d36570a4892dfa822cf69fdad465cfe49086b92d43291fb90969119bbe044c6c/zcanann/mwcc-rs"
---

# mwcc-rs

A byte-exact reimplementation, in Rust, of **Metrowerks CodeWarrior for Embedded PowerPC** (`mwcceppc`) — the compiler that built Nintendo GameCube and Wii games — for use in decompilation.

The goal is narrow and absolute: for every configured translation unit in
`reference_projects/*`, `mwcc-rs` must emit the same relocatable object as the
real compiler, byte for byte. Equivalent code or an exact `.text` section is
useful diagnostic evidence, but it is not parity. The build registry currently
contains eight ordinarily selectable GameCube profiles and seven explicitly
experimental GameCube/Wii identities, all driven by one parameterized compiler.

GC/1.3.2r remains recognized for compatibility, but it is not a required parity gate: it was a hacked Animal Crossing compiler variant that disabled `.rodata` pooling, and the underlying stock GC/1.3.2 bug is now understood without relying on that build.

## Why this exists

A decompilation is verified by recompiling reconstructed source and checking that it reproduces the original game's machine code exactly. That makes the *compiler* a hard dependency: you must own the precise build the game shipped with, and you must be…
