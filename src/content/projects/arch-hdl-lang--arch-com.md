---
repo: "arch-hdl-lang/arch-com"
name: "arch-com"
description: "ARCH hardware description language and compiler"
readmeQualityOk: true
url: "https://github.com/arch-hdl-lang/arch-com"
language: "Rust"
languages: ["Rust", "SystemVerilog"]
languagePcts: [54, 21]
stars: 48
forks: 5
openIssues: 21
closedIssues: 53
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-10T05:05:13Z"
lastCommitAt: "2026-07-13T06:37:21Z"
lastReleaseAt: "2026-07-11T19:45:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["nogate-ai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1206621303/9feef1b3-1040-4ed9-9e2a-5243038c4af6"
discussionCount: 0
---

# arch-com

A compiler for the **ARCH** hardware description language — ingests `.arch` source files and emits deterministic, readable SystemVerilog.

**Paper**: [arXiv:2604.05983](https://arxiv.org/abs/2604.05983)

## Why a new HDL?

SystemVerilog is the industry standard, but it was designed for human experts writing RTL by hand — not for AI agents generating hardware from natural-language specs. The result is a language where silent bugs are easy to write and hard to catch:

- **Implicit width conversions**: `assign out = a + b;` silently truncates or zero-extends depending on context. Width mismatches are the #1 source of hardware bugs, and SV makes them invisible. ARCH requires every width cast to be explicit (`.trunc<N>()`, `.zext<N>()`, `.sext<N>()`), or use wrapping operators (`+%`, `-%`, `*%`) when you genuinely want modular arithmetic.

- **No clock domain safety**: crossing clock domains in SV is a convention (use a synchronizer module, hope you picked the right one). ARCH tracks `Clock<Domain>` in the type system — a signal in `Clock<SysDomain>` cannot be assigned to a `Clock<MemDomain>` register without an explicit `synchronizer` construct. The compiler auto-inserts…
