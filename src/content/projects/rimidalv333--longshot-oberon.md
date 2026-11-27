---
repo: "rimidalv333/longshot-oberon"
name: "longshot-oberon"
description: "Port of Longshot targeting 0400486024DEC000 rev 1.1.1 NS2 for Oberon (base PS5 only) optimized for RDNA2-class GPU (compute shaders) and a stable 30 (up to 60 with framegen). Build on Linux/Windows(WSL) - No copyrighted files included"
readmeQualityOk: true
url: "https://github.com/rimidalv333/longshot-oberon"
language: "C++"
languages: ["C++", "C"]
languagePcts: [52, 41]
topics: ["bc250", "oberon", "port", "ps5", "ps5-homebrew", "static-recompilation"]
stars: 47
forks: 1
openIssues: 3
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-11-24T08:19:06Z"
lastCommitAt: "2026-11-27T12:53:15Z"
lastReleaseAt: "2026-11-27T12:07:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 26
maintainers: ["rimidalv333"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd081c55511358fe63a5f881c2094dc6225787abfd11bf7f0842e541c70e68d9/rimidalv333/longshot-oberon"
---

Title <code>PPSA93339</code> · locked 30 fps STABLE up to 60 with built-in framegen · built from your own game file in one command, on Linux, WSL or Windows

---
## Introduction

Longshot Oberon is a port of [Longshot](#upstream-longshot-for-pc), the static recompilation of *The Legend of Zelda:
Ocarina of Time* for Nintendo Switch 2, to the **base PS5**. *Oberon* is the codename of the base PS5's system-on-chip,
and this port is tuned for it specifically: its 12 GB of memory for a title, its 6.5 cores' worth of CPU time, and its
RDNA2-class GPU driven through RADV, Mesa's Vulkan driver, built for the console.

The game's ARM64 code is translated to C ahead of time and compiled for the console's Zen 2 CPU. The game's NVN graphics
calls are recorded and replayed through Vulkan, and its shaders are translated to SPIR-V. Nothing is emulated at run time.
