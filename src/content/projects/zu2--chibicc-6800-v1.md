---
repo: "zu2/chibicc-6800-v1"
name: "chibicc-6800-v1"
description: "C Compiler for MC6800 (fork from chibicc)"
readmeQualityOk: true
url: "https://github.com/zu2/chibicc-6800-v1"
homepage: "https://www.zukeran.org/shin/d/"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["6800", "8bit", "mc6800", "motorola", "c", "compiler", "basicmaster", "jr100", "jr200"]
stars: 12
forks: 3
openIssues: 1
closedIssues: 63
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-12-31T19:32:54Z"
lastCommitAt: "2026-08-27T23:46:53Z"
lastReleaseAt: "2025-06-06T02:32:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 76
maintainers: ["zu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/b405068b18af1e2e7945223eabac393812e460460ea48e6bb9c0b3b827d5853c/zu2/chibicc-6800-v1"
postedAt: "2026-06-26T06:54:23.801Z"
---

# chibicc-6800-v1: C Compiler for MC6800

## Overview

This is a Motorola MC6800 cross-compiler based on [@rui314](https://www.sigbus.info/)'s [chibicc](https://github.com/rui314/chibicc/).

The compiler targets the MC6800 and is designed to generate efficient code. It works well on the MC6800 and provides good performance.

Many C programs, including Dhrystone and Whetstone benchmarks, now run on the MC6800. The compiler also supports IEEE 754 32-bit floating-point operations through an assembly implementation.

Some test code or implementation notes may still remain. Feedback and bug reports are always welcome.

----
# Topics

- **Data types:** `int` and pointers are 16-bit; `long` and `float` are 32-bit. `double` and `long long` (64-bit or more) are unsupported.
- **Function parameters:** Only the first parameter is passed via registers (A/B/@long). If the first parameter is a struct/union, all parameters are passed via the stack.
- **Return values:** Struct/union return values pass their address as an implicit first argument in a register. All other normal arguments are passed on the stack.
- **IEEE 754 floating-point:** 32-bit floating-point arithmetic is implemented in…
