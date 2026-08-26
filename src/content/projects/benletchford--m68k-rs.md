---
repo: "benletchford/m68k-rs"
name: "m68k-rs"
description: "Pure Rust implementation of the Motorola 68000 family of CPUs (M68000, M68010, M68020, M68030, M68040, M68060, and variants (EC/LC))"
readmeQualityOk: true
url: "https://github.com/benletchford/m68k-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 36
forks: 9
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-01-07T10:38:27Z"
lastCommitAt: "2026-08-26T04:15:53Z"
lastReleaseAt: "2026-08-02T05:17:03Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 52
maintainers: ["github-actions[bot]", "rlanday", "benletchford"]
openGraphImageUrl: "https://opengraph.githubassets.com/e31025b23bfe1e7e83e6a5138c24a23a3178aaccfe5225ee1415b72d308640b7/benletchford/m68k-rs"
---

# m68k-rs

A safe, pure Rust implementation of the Motorola 68000 family CPU emulator.

One core for transaction-accurate hardware emulation and high-throughput
high-level emulation (HLE).

## Features

- **Complete CPU family support**: M68000 through M68060, including EC/LC variants and the SCC68070
- **Two explicit execution contracts**: transaction-accurate cycle scheduling for hardware emulators, and an instruction-budgeted fast path for HLE
- **Bus-visible accuracy**: 68000/68010 two-word prefetch, model-specific access ordering, and internal clock synchronization through `AddressBus::sync`
- **Memory-safe core**: The interpreter — instruction semantics, decode, exceptions, MMU, FPU — is 100% safe Rust. The optional fast paths (fastmem batch execution and the trace JIT) use a small, contract-documented `unsafe` perimeter, fenced by step-vs-batch equivalence tests
- **FPU emulation**: Software 80-bit extended precision, packed decimal, and model-specific 68881/68882/68040/68060 behavior
- **MMU emulation**: 68030/68040/68060 translation, ATCs, transparent translation, `PTEST`, fault frames, and writeback
- **HLE-ready**: Built-in trap interception for High-Level Emulation
-…
