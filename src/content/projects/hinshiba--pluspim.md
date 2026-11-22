---
repo: "hinshiba/PlusPim"
name: "PlusPim"
description: "A MIPS debugger implementing the Debug Adapter Protocol"
originalDescription: "Debug Adapter Protocolを実装したMIPSのデバッガ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/hinshiba/PlusPim"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["debugger", "emulator"]
stars: 8
forks: 0
openIssues: 6
closedIssues: 70
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2025-12-18T01:54:32Z"
lastCommitAt: "2026-11-22T11:50:51Z"
lastReleaseAt: "2026-10-12T16:39:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 72
maintainers: ["hinshiba", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d44bd7cdeb6320f9d818e4e08b63818655f3eb2685b84e2971f496642b1df68c/hinshiba/PlusPim"
discussionCount: 3
---

# PlusPim

A DAP-compatible MIPS assembly language debugger

## Overview

PlusPim is a debugging tool for MIPS assembly code that supports the Debug Adapter Protocol. By combining a backend written in `.NET` with a frontend VS Code extension, it provides a convenient debugging experience.

This project consists mainly of two parts:
1. **PlusPim**: A `.NET 11` application that implements the [Debug Adapter Protocol (DAP)](https://microsoft.github.io/debug-adapter-protocol/) and handles MIPS emulation and debugging logic.
2. **VS Code extension**: An extension that integrates the debugger into VS Code and provides the user interface for debugging commands.

It is a so-called time-travel debugger and supports backward stepping.
