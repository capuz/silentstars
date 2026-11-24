---
repo: "Wallawalla47/Infernix"
name: "Infernix"
description: "C++/CUDA single-GPU inference engine for Qwen3.8 (incl. Qwen3.8-Flash-Next with offloaded experts) on the RTX 5090; grew from NInfer"
readmeQualityOk: true
url: "https://github.com/Wallawalla47/Infernix"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [61, 25]
stars: 319
forks: 42
openIssues: 9
closedIssues: 30
watchers: 1
contributors: 30
recentReleases: 8
createdAt: "2026-10-08T23:20:06Z"
lastCommitAt: "2026-11-24T01:38:27Z"
lastReleaseAt: "2026-11-20T10:00:35Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 29
maintainers: ["Wallawalla47", "dwalthour"]
openGraphImageUrl: "https://opengraph.githubassets.com/da56576615f9c7d0e38425bf06de155fdfc63323aff6d433a9f2b50ad3821c81/Wallawalla47/Infernix"
fundingLinks: ["GITHUB:https://github.com/Wallawalla47"]
---

> **AI disclaimer:** everything added since the fork from NInfer, including most of this README, was
> written with AI (mostly Claude Opus 5.5 and Qwen3.8-27B running on Infernix). It is likely to be
> neither complete nor entirely accurate. This is hobby development.

Infernix is a C++/CUDA inference engine that serves Qwen models and Thinking Machines' Inkling 2 Mini on one NVIDIA RTX 5090. It began as a fork of [NInfer](https://github.com/Neroued/ninfer) by
[Neroued](https://github.com/Neroued) and reads NInfer's `.ninfer` artifacts as well as its own
`.infernix` files.

## Headline results

One RTX 5090 on PCIe Gen5 x8, 2026-10-30/31. Every engine ran its latest version at the time,
natively on Windows, with its own recommended settings and drafter and the same 84 GiB RAM budget.
**Context**: one request, ~8K to ~250K tokens. **Replay**: an agentic coding workload, two requests
at a time. Full tables and methods: [Benchmarks](#benchmarks).
