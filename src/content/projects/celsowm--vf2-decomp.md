---
repo: "celsowm/vf2-decomp"
name: "vf2-decomp"
description: "Clean-room, non-matching C decompilation project for Virtua Fighter 2 Version 2.1 (Sega Model 2 / i960)"
readmeQualityOk: true
url: "https://github.com/celsowm/vf2-decomp"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-02T12:26:04Z"
lastCommitAt: "2026-08-28T15:35:05Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["celsowm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35ebb74c454db2f473715e1d9ca7a1c6d6d7d23418c11dc03072e4b1cdc0247d/celsowm/vf2-decomp"
---

# vf2-decomp

Clean-room, non-matching C17 decompilation research project for **Virtua Fighter 2 Version 2.1** on Sega Model 2A.

The goal is to recover the original game/runtime behavior into portable, readable C while continuously validating the recovered implementation against the original Intel i960 program.

> This repository contains **no ROMs** and is **not yet a complete playable port**.

## Project status

The project already contains a substantial recovered native runtime, ROM validation/reconstruction tools, Intel i960 analysis tooling, a bounded Model 2A hardware model, snapshot/resume support and strict differential validation between recovered C and the original program.

Current work is focused on expanding recovered gameplay/runtime state coverage while preserving exact CPU, procedure-count and mutable-memory behavior for accepted paths. Unsupported or unverified branches remain explicit instead of being approximated.

For detailed development history, recovered branches and release-by-release progress, see [`CHANGELOG.md`](https://github.com/celsowm/vf2-decomp/blob/HEAD/CHANGELOG.md).

For known remaining boundaries, see…
