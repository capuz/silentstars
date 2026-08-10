---
repo: "tokalang/toka"
name: "toka"
description: "Toka is a no-GC systems programming language that keeps performance and static safety as baselines while making real systems semantics explicit and everyday code easier to read, write, and maintain."
readmeQualityOk: true
url: "https://github.com/tokalang/toka"
homepage: "http://tokalang.dev/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 8
forks: 2
openIssues: 0
closedIssues: 23
watchers: 3
contributors: 2
recentReleases: 4
createdAt: "2025-12-27T02:07:34Z"
lastCommitAt: "2026-08-10T05:05:20Z"
lastReleaseAt: "2026-05-18T14:33:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/de3cf7583de75f2e8ea7eb8770a793bca989ff67673d76053c2542a82b78c6f7/tokalang/toka"
---

[Website (tokalang.dev)](https://tokalang.dev) | [Try Toka Online (Playground)](https://tokalang.dev/playground) | [v0.9.9-01 Release Notes](https://github.com/tokalang/toka/blob/HEAD/docs/release_notes_v0.9.9-01.md) | [Read the Paper](https://arxiv.org/abs/2606.01974) | [中文](https://github.com/tokalang/toka/blob/HEAD/README_zh.md)

# Toka Programming Language

**Toka is a no-GC systems programming language built around predictable performance, static safety, and AI-verifiable semantics. It makes real systems boundaries explicit for both programmers and tools.**

## Design Goal

### Baselines

Toka starts from three baselines:

- **Zero-cost performance:** low-level representation and resource costs should remain predictable, without a GC or hidden runtime layer becoming the default answer.
- **Strong static safety:** dangerous paths should be explicit enough for the compiler to check, with safety treated as a requirement rather than a convenience feature.
- **AI-verifiable semantics:** important compiler conclusions should be available as stable, machine-readable facts. An AI-assisted repair must be able to identify the relevant contract, make a minimal change, and verify the…
