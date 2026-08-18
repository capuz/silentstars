---
repo: "doublegate/RustyNES"
name: "RustyNES"
description: "[RustyNES] Cycle-accurate Nintendo Entertainment System NES emulator built in pure Rust — 172+ mappers, WebAssembly-ready, GGPO netplay, TAS tools, and RetroAchievements integration for game preservation. \"Precise. Pure. Powerful.\""
readmeQualityOk: true
url: "https://github.com/doublegate/RustyNES"
homepage: "https://doublegate.github.io/RustyNES/"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["6502", "8-bit", "cross-platform", "cycle-accurate", "emulation", "emulator", "game-preservation", "ggpo", "lua", "mapper"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-18T19:20:12Z"
lastCommitAt: "2026-08-18T04:09:27Z"
lastReleaseAt: "2025-12-28T22:34:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["doublegate", "WizzardSK", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ba6b89b2bb3592bd248f88465beeed70ca39ceaafcee16a23080f0a51a432c5/doublegate/RustyNES"
discussionCount: 0
---

# RustyNES

> **Precise. Pure. Powerful.**

</p>

</p>

## Overview

**RustyNES is a cycle-accurate Nintendo Entertainment System emulator written in
pure Rust.** It targets the Mesen2 / higan / ares accuracy bar — tight, lockstep
scheduling at PPU-dot resolution on a master-clock-precise timebase — clearing
**AccuracyCoin 100% (141/141)** and matching the Nintendulator golden log on
`nestest` with **zero diff**. (As of v2.0.3 every assigned test passes, including the
two newest upstream PPU tests, "ALE + Read" and "Hybrid Addresses", via the promoted
2-cycle-ALE fetch model — ADR 0030.)

> **Development note — AI-assisted:** RustyNES is heavily AI-assisted software,
> built with LLM tooling under a human-directed, test-driven workflow (public
> test ROMs as the oracle, a `no_std` core, and continuous CI). See
> [`docs/originality-and-provenance.md`](https://github.com/doublegate/RustyNES/blob/HEAD/docs/originality-and-provenance.md) for
> what that means for originality and licensing, and the
> [Acknowledgments](#acknowledgments) for the references and components it builds
> on. Accuracy claims are meant to be *checked* by running the public suites, not
> taken on faith;…
