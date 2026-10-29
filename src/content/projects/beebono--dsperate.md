---
repo: "beebono/DSperate"
name: "DSperate"
description: "An attempt at reimplementing DraStic-level performance with modern features"
readmeQualityOk: true
url: "https://github.com/beebono/DSperate"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 42]
stars: 55
forks: 10
openIssues: 6
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-20T21:17:57Z"
lastCommitAt: "2026-10-29T05:49:45Z"
lastReleaseAt: "2026-09-04T00:44:42Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 40
maintainers: ["beebono", "abradburne", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c5871ad1f5c31a8c5803ed3ef27a95b7cb37dc8e798d4333b7dedf86aba2595/beebono/DSperate"
---

# DSperate (Nintendo DS Emulator)

AI DISCLAIMER: Agentic coding is used here. A lot. I am not smart enough to keep track
of all of this with the wet electric meat lump that sits inside my skull.

A Nintendo DS and DSi emulator that reimplements DraStic's JIT and NEON rendering
techniques, with modern niceties from melonDS such as per-screen windows and
local wireless.
Built for and measured on ARM handhelds (the Anbernic RG DS, an RK3566 with
four A55 cores); commercial games boot and play. Everything is verified against
melonDS with frame dumps and instruction traces.

DSperate is a **clean-room** reimplementation of DraStic's *techniques*,
documented by studying its freely-distributable debug-symbol build (approved
for distribution by its developer, Exophase) and measuring it on real
hardware. No DraStic code is in this tree. See [docs/techniques](https://github.com/beebono/DSperate/blob/HEAD/docs/techniques).

## Previews

## Features

### Core

- **Both CPUs, interpreted or recompiled.** ARM946E-S and ARM7TDMI
  interpreters on every host; an ARM → AArch64 recompiler and an ARM → ARMv7
  recompiler…
