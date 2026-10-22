---
repo: "redasm-dev/core"
name: "core"
description: "Standalone C17 disassembler engine library for REDasm"
readmeQualityOk: true
url: "https://github.com/redasm-dev/core"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["binary-parser", "c17", "disassembler-library", "low-level-programming"]
stars: 63
forks: 21
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2018-11-29T16:28:45Z"
lastCommitAt: "2026-10-22T08:52:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 48
maintainers: ["Dax89"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e9ea01dde1b918bbbce2f035cb4a529636668096aa87dc9686ea19766e4d4d4/redasm-dev/core"
---

# REDasm Core Engine
This repository contains the standalone disassembler library driving [GUI](https://github.com/redasm-dev/redasm) and [Unit Testing Suite](https://github.com/redasm-dev/tests).  

It's minimal and lightweight on purpose, written in **pure C17** and completely decoupled from the user interface.

## Features
*   **Headless-First**: Can be used as a standalone library for automation pipelines, custom tools, or alternative frontends.
*   **Decoupled Architecture**: Hot-pluggable modules. Formats and architectures are loaded dynamically at runtime via shared modules.
*   **Ecosystem**: Powered by our [Knowledge Base (kb)](https://github.com/redasm-dev/kb) database.
*   **RDIL**: A tiny architecture-neutral intermediate Language.
