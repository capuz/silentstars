---
repo: "zu2/chibicc-6800-v1"
name: "chibicc-6800-v1"
description: "A Small C Compiler for MC6800 (fork from chibicc)"
readmeQualityOk: true
url: "https://github.com/zu2/chibicc-6800-v1"
homepage: "https://www.zukeran.org/shin/d/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["6800", "8bit", "mc6800", "motorola", "c", "compiler"]
stars: 10
forks: 2
openIssues: 5
closedIssues: 50
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-12-31T19:32:54Z"
lastCommitAt: "2026-07-09T19:59:01Z"
lastReleaseAt: "2025-06-06T02:32:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 76
maintainers: ["zu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/cac5974e25973ae636178b49e7b0ee7fb7831d513211a89811ae62e9f2dd1465/zu2/chibicc-6800-v1"
postedAt: "2026-06-26T06:54:23.801Z"
---

# chibicc-6800-v1: A small C Compiler for MC6800

## Overview

This project is a fork of [@rui314](https://www.sigbus.info/)'s [chibicc](https://github.com/rui314/chibicc/), modified to create a C compiler for the Motorola MC6800 architecture.

This project was created as a tool for studying compilers for the MC6800, and while it includes extra code and comments that may not be essential, they reflect the learning process and experimentation involved in developing the compiler.

A lot of things about object code generation and performance only became clear once I actually implemented it. Some parts of the code may be there just for testing.

However, it works reasonably well on the MC6800. I hope it may still be of some use.

Dhrystone and Whetstone benchmarks now run successfully on the MC6800.

- https://github.com/z88dk/z88dk/tree/master/support/benchmarks/dhrystone21
- https://github.com/z88dk/z88dk/tree/master/support/benchmarks/whetstone
----
# Topics

- **Data types:** `int` and pointers are 16-bit; `long` and `float` are 32-bit. `double` and `long long` (64-bit or more) are unsupported.
- **Structs/unions:** Passing/returning by value are implemented. but this increases…
