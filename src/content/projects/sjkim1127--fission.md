---
repo: "sjkim1127/Fission"
name: "Fission"
description: "Rust-first reverse-engineering and decompilation workspace featuring Ghidra SLEIGH lifting, NIR/HIR structuring, and AI-assisted terminal/desktop UIs."
readmeQualityOk: true
url: "https://github.com/sjkim1127/Fission"
homepage: "https://sjkim1127.github.io/Fission/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["binary-analysis", "decompiler", "reverse-engineering", "rust", "static-analysis", "arm64", "elf", "powerpc", "sleigh", "x86-64"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2025-12-06T14:23:12Z"
lastCommitAt: "2026-07-06T07:03:48Z"
lastReleaseAt: "2026-07-01T07:13:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["sjkim1127", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/044ec441fa14f30a0e8a305a81ed422b8184b408b912416148cff3b315428406/sjkim1127/Fission"
fundingLinks: ["GITHUB:https://github.com/sjkim1127"]
discussionCount: 0
---

</div>

---

# Fission

Fission is a Rust-native reverse-engineering and binary decompilation workspace. It is built around a Fission-owned intermediate-representation pipeline, with Ghidra-style Sleigh semantics feeding Rust-owned NIR, HIR, structuring, rendering, automation, and quality gates.

The project goal is not only to decode instructions. The goal is to produce decompiler output that is mechanically traceable, semantically defensible, and eventually readable enough to be useful in day-to-day reverse engineering.

This README is intentionally long. It is a practical orientation document for contributors, operators, and future agents working in the repository. The shorter source-of-truth references remain in `docs/`, `AGENTS.md`, and the crate-local `AGENTS.md` files.

## Table of Contents

- [Project Status](#project-status)
- [Quick Start](#quick-start)
- [Repository Tour](#repository-tour)
- [Architecture in One Page](#architecture-in-one-page)
- [Core Pipeline](#core-pipeline)
- [Crate Guide](#crate-guide)
- [CLI Guide](#cli-guide)
- [Resource Bundle and Git LFS](#resource-bundle-and-git-lfs)
- [Decompiler Quality Loop](#decompiler-quality-loop)
- [NIR and HIR…
