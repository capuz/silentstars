---
repo: "untrustedmodders/plugify-plugin-s2sdk"
name: "plugify-plugin-s2sdk"
description: "Source 2 SDK Plugin"
readmeQualityOk: true
url: "https://github.com/untrustedmodders/plugify-plugin-s2sdk"
homepage: "https://api.plugify.net?file=https://raw.githubusercontent.com/untrustedmodders/plugify-plugin-s2sdk/refs/heads/main/plugify-plugin-s2sdk.pplugin.in"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["counter-strike-2", "cs2", "plugin", "plugify", "plugify-plugin"]
stars: 16
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-01-20T10:54:28Z"
lastCommitAt: "2026-07-04T22:20:56Z"
lastReleaseAt: "2025-03-09T14:56:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 67
maintainers: ["qubka", "github-actions[bot]", "NapasP"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/745854740/2e1d4685-54d6-4930-aa6c-321b768b2241"
---

# Source2 SDK Plugin

## Overview

The **Source2 SDK** is a plugin for the [Plugify](https://github.com/untrustedmodders/plugify) framework that makes it easier to build custom plugins for games running on the Source 2 engine. It provides a clean interface to extend game functionality, hook into engine systems, and create gameplay or debugging tools.

With this SDK, developers can quickly prototype plugins without reverse-engineering effort. The design emphasizes clarity, modularity, and ease of extension.

[Join our Discord](https://discord.gg/rX9TMmpang) to discuss plugin development, share examples, or get help.

## Advantages

There are several ways to mod Source 2 games today — [CounterStrikeSharp](https://github.com/roflmuffin/counterstrikesharp), [ModSharp](https://github.com/Kxnrl/modsharp-public), [Swiftly](https://github.com/swiftly-solution/swiftlys2), and others. S2SDK + Plugify takes a fundamentally different approach on several dimensions.

### 1. Source 2 Support Is a Dedicated Plugin, Not a Core Dependency

Unlike frameworks that bake game-specific logic deep into their core runtime, S2SDK is a **separate, self-contained Plugify plugin**. This means the host…
