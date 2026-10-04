---
repo: "AetherVM/AetherVM"
name: "AetherVM"
description: "AetherVM - Lift. Instrument. Emulate. Recover."
readmeQualityOk: true
url: "https://github.com/AetherVM/AetherVM"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["aarch64", "android", "arm64", "binary-analysis", "dynamic-analysis", "emulation", "ios", "linux", "llvm", "llvm-ir"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-11T10:51:53Z"
lastCommitAt: "2026-10-04T10:01:07Z"
lastReleaseAt: "2026-09-10T22:33:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["GeekNeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4306821e998ad65406fd03d703847d9476f00907edeca06245f2a4546a152ad9/AetherVM/AetherVM"
discussionCount: 1
---

# AetherVM - Lift. Instrument. Emulate. Recover.
**AetherVM** is an LLVM-native binary analysis and emulation platform built around instruction lifting to [LLVM IR](http://llvm.org/docs/LangRef.html). It unifies static, dynamic, and symbolic analysis through a common intermediate representation, enabling advanced instrumentation, runtime recovery, deobfuscation, and program understanding.

AetherVM is motivated by and partially derived from [ICPP](https://github.com/vpand/icpp) and [Remill](https://github.com/lifting-bits/remill).

## Features
- **Dual entry points** — drive the engine from raw architecture state (`Machine`) for shellcode-style analysis, or from a loaded `Binary` for full lifting/instrumentation/analysis workflows.
- **AArch64 & x86_64** — a single unified `Register` enumeration and `RegisterValue`/`RegisterValueSIMD` representation cover both architectures, including flags (`NZCV`/`rflags`), FP/SIMD (`Q0-31`/`XMM0-31`), and legacy x87/MMX state.
- **Rich event/instrumentation hooks** — opt-in, bitfield-configurable events for lifting, memory access, instructions, basic blocks, functions, syscalls, traps, and host bridge calls, delivered through a single…
