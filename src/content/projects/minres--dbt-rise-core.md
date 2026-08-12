---
repo: "Minres/DBT-RISE-Core"
name: "DBT-RISE-Core"
description: "DBT-RISE - A versatile Dynamic Binary Translation (DBT) based environment to implement instruction set simulator (ISS)"
readmeQualityOk: true
url: "https://github.com/Minres/DBT-RISE-Core"
homepage: "https://www.minres.com/#opensource"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["dbt", "iss", "llvm", "c-plus-plus", "cplusplus"]
stars: 11
forks: 5
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2017-09-25T18:55:28Z"
lastCommitAt: "2026-08-12T05:14:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 45
maintainers: ["eyck", "EAlexJ", "quic-prateek"]
openGraphImageUrl: "https://opengraph.githubassets.com/97500d44d10353bee1644e1ecd96743ae951963f7e024820d42dd5d6ac6ef7c8/Minres/DBT-RISE-Core"
---

# DBT-RISE
A versatile Dynamic Binary Translation (DBT) based environment to implement instruction set simulators (ISS)

This library contains the core elements of DBT-RISE and as such is intended to be part of a target project like [DBT-RISE-RISCV](https://github.com/Minres/DBT-RISE-RISCV) or [HIFIFE1-VP](https://github.com/Minres/HIFIVE1-VP).

It implements the basic structure to quickly develop ISS using dynamic binary translation using different options for a backend.

The different backends are:
- interp: An interpreter based backend without any dbt
- tcc: c compiler without any optimizations
- llvm: llvm IR with optimizations from llvm
- asmjit: direct host assembly generation
