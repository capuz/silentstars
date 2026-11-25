---
repo: "x86sim/x86sim"
name: "x86sim"
description: "Run Apple's iOS Simulator on a regular Linux PC, no Mac required. Boots the real iOS 27 simulator by translating it on the fly, with graphics on your GPU."
readmeQualityOk: true
url: "https://github.com/x86sim/x86sim"
language: "Swift"
languages: ["Swift"]
languagePcts: [40]
topics: ["binary-translation", "darling", "dynarmic", "ios-simulator", "linux", "metal", "vulkan"]
stars: 143
forks: 8
openIssues: 4
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-28T20:10:22Z"
lastCommitAt: "2026-11-25T03:15:00Z"
lastReleaseAt: "2026-11-12T00:35:35Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 32
maintainers: ["designgears"]
openGraphImageUrl: "https://opengraph.githubassets.com/416c35e1957a5cab49230d478d4a6d772735bb4f1aee1cbe53b96561314748fc/x86sim/x86sim"
discussionCount: 1
---

# x86Sim

**Apple's iOS, iPadOS, tvOS, watchOS and visionOS simulators on x86-64 Linux.**

[Download](https://github.com/x86sim/x86sim/releases/latest) · [Quick start](#quick-start) · [Usage](#usage) · [For AI agents](#for-ai-agents) · [Building apps](#building-and-shipping-apps) · [vs Apple's Simulator](https://github.com/x86sim/x86sim/blob/HEAD/docs/PARITY.md) · [Architecture](https://github.com/x86sim/x86sim/blob/HEAD/docs/ARCHITECTURE.md) · [Developing](https://github.com/x86sim/x86sim/blob/HEAD/docs/DEVELOPMENT.md)

## About

Apple ships its device simulators only for Macs. x86Sim runs the same arm64 simulator runtimes, unmodified, on an
ordinary x86-64 Linux PC. It downloads a runtime from Apple onto your machine, runs it on a macOS-compatible system
layer, translates its arm64 code to x86-64 and draws its Metal graphics with Vulkan.

It comes with a desktop launcher, a `simctl`-style command line, a browser view and an MCP server, so devices can be
used by hand, from scripts or by an AI agent. No Mac and no Apple ID are needed. [PARITY.md](https://github.com/x86sim/x86sim/blob/HEAD/docs/PARITY.md)
compares it with Apple's Simulator feature by feature, gaps included.
