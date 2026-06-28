---
repo: "zu2/chibicc-6800-v1"
name: "chibicc-6800-v1"
description: "A Small C Compiler for MC6800 (fork from chibicc)"
url: "https://github.com/zu2/chibicc-6800-v1"
homepage: "https://www.zukeran.org/shin/d/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["6800", "8bit", "mc6800", "motorola", "c", "compiler"]
stars: 10
forks: 2
openIssues: 4
closedIssues: 47
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-12-31T19:32:54Z"
lastCommitAt: "2026-06-28T12:54:57Z"
lastReleaseAt: "2025-06-06T02:32:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 76
maintainers: ["zu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a8ecd18c001342d8952050ab5a6218128d93115bdc5755f4a9609dc813c953c/zu2/chibicc-6800-v1"
postedAt: "2026-06-26T06:54:23.801Z"
---

# chibicc-6800-v1: A Small C Compiler for MC6800

This project is a fork of [@rui314](https://www.sigbus.info/)'s [chibicc](https://github.com/rui314/chibicc/), modified to create a C compiler for the Motorola MC6800 architecture.

This project was created as a tool for studying compilers for the MC6800, and while it includes extra code and comments that may not be essential, they reflect the learning process and experimentation involved in developing the compiler.

There are many aspects of the object code generation method and speed that cannot be understood without actually creating it. There may be unnecessary parts added for testing code generation.

However, it is a compiler that works reasonably well. I hope it will be helpful for you to create another fork.

Dhrystone & Whetstone works now. 

- https://github.com/z88dk/z88dk/tree/master/support/benchmarks/dhrystone21
- https://github.com/z88dk/z88dk/tree/master/support/benchmarks/whetstone
----
# Topics

- **Data types:** `int` and pointers are 16-bit; `long` and `float` are 32-bit. `double` and `long long` (64-bit or more) are unsupported.
- **Structs/unions:** Passing/returning by value and bit fields are implemented.
-…
