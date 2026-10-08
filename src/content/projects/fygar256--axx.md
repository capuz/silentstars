---
repo: "fygar256/axx"
name: "axx"
description: "generalized assembler axx"
readmeQualityOk: true
url: "https://github.com/fygar256/axx"
language: "C"
languages: ["C", "Python", "Assembly"]
languagePcts: [42, 31, 24]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-04T10:26:31Z"
lastCommitAt: "2026-10-08T10:52:29Z"
lastReleaseAt: "2026-01-30T00:16:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 68
maintainers: ["fygar256", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/67905a9cf381307cd8e8c50e26bb944a21e1a8c3828623ae051453b8d4e05391/fygar256/axx"
---

---
title: Generalized assembler 'axx General Assembler'
tags: Terminal Python general assembler
author: fygar256
slide: false
---

# axx — An assembler conceived in 1986, dormant for 38 years

## The 30-second version

axx aims to let you build an assembler for **any instruction set** from a single declarative text file — no C++, no Scheme, no code generation step.

```
RET :: 0xc3
```

That one line is a complete assembler for the x86_64 `RET` instruction. Stack up lines in the same shape (`instruction syntax :: error conditions :: output bytes`) and you get an assembler for anything from the Intel 4004 to x86_64 with AVX-512.

- GitHub: https://github.com/fygar256/axx
- Author: fygar256 (Taisuke Maekawa/前川田井介)
- License: MIT

## Why it exists

The idea, the name, and a prototype written in C already existed in 1986, when the author was a university student working part-time at Tokyo Denshi Sekkei. The original listing resurfaced 38 years later and was rewritten in Python and released in 2024.

That gap wasn't just dormancy — it doubled as a validation period. VLIW, EPIC, processors whose word size isn't 8 bits: all of these appeared during those 38 years, and the core idea…
