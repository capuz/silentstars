---
repo: "willfaust/Madeira"
name: "Madeira"
description: "Run x86-64 Windows PC games on jailed iOS via FEX-Emu + Wine + DXMT"
readmeQualityOk: true
url: "https://github.com/willfaust/Madeira"
language: "C"
languages: ["C"]
languagePcts: [88]
stars: 23
forks: 5
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T17:25:50Z"
lastCommitAt: "2026-08-29T10:22:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 32
maintainers: ["willfaust"]
openGraphImageUrl: "https://opengraph.githubassets.com/b16c3f46a2a56f2f4187e71975d0d24cc566de113cb3397590429080438e7106/willfaust/Madeira"
---

# Madeira

Run Windows PC games on a non-jailbroken iPhone.

Madeira combines [Wine](https://www.winehq.org/) (ARM64EC),
[FEX-Emu](https://github.com/FEX-Emu/FEX) for x86-64 → ARM64 translation, and
[DXMT](https://github.com/3Shain/DXMT) for D3D11 → Metal, running as a single
Mach process on iOS with wineserver as a thread rather than a separate process.

## Status

Thumper and ULTRAKILL are playable. Marvel Cosmic Invasion has reached
gameplay, though a run has also ended in an unexplained termination and its
controls are not yet reliable. Others reach gameplay at low frame rates. This
is a research project, not a product: expect rough edges, per-title quirks and
breaking changes.

## Requirements

- A non-jailbroken iPhone. Development has been on an A15 (iPhone 13 Pro).
- JIT, which on iOS requires a debugger to attach —
  [StikDebug](https://github.com/0-Blu/StikJIT) is what this project uses.
- An Apple ID for signing. A free account works; its provisioning profiles
  expire after 7 days, so the app must be rebuilt and reinstalled weekly. The
  app's container survives reinstall, so prefixes and saves are preserved.

Because JIT requires debugger attach, this app cannot be…
