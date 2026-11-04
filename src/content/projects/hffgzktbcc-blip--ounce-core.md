---
repo: "hffgzktbcc-blip/ounce-core"
name: "ounce-core"
description: "Rust runtime for open-source Switch homebrew on macOS Apple Silicon, Linux and Windows. Every claim is backed by a real program's frame."
readmeQualityOk: true
url: "https://github.com/hffgzktbcc-blip/ounce-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 210
forks: 21
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 4
createdAt: "2026-10-24T19:32:45Z"
lastCommitAt: "2026-11-04T08:05:20Z"
lastReleaseAt: "2026-11-03T19:04:33Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 33
maintainers: ["hffgzktbcc-blip", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc7245e7337f2b0a924461a5bf6c416ce9c04a84b8e9165326b725a57e2ff40f/hffgzktbcc-blip/ounce-core"
discussionCount: 2
---

**An inspectable AArch64 runtime for open-source Switch homebrew, measured by real frames.**

[Explore the architecture](#the-system) · [Get started](#quickstart) · [See proven progress](#what-is-proven) · [Roadmap](#the-road-ahead) · [Research & provenance](#responsible-research)

---

## A different kind of computing garden

Every program is a conversation between instructions, memory, operating-system services and hardware. **Ounce-Core** is an experimental Rust research runtime that makes that conversation observable.

It brings together interpreters, tiered AArch64 execution, Horizon-style service models, software graphics and optional `wgpu` presentation. The root crate forbids unsafe Rust; the optional Tier-4 recompiler owns a separate unsafe boundary for native code generation and executable memory. The goal is to test execution behaviour systematically—not to confuse a successful build with demonstrated compatibility.

> **Headline metric: [15/20 outside homebrew programs pass their pre-registered first-frame oracle](#what-is-proven)** (count derived from the [Ounce-Verify](https://github.com/hffgzktbcc-blip/ounce-core/blob/HEAD/docs/verify/README.md) canonical report in…
