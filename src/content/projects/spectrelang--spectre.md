---
repo: "spectrelang/spectre"
name: "spectre"
description: "Spectre programming language"
readmeQualityOk: true
url: "https://github.com/spectrelang/spectre"
homepage: "https://spectrelang.org"
language: "Makefile"
languages: ["Makefile", "AMPL"]
languagePcts: [70, 30]
topics: ["programming-language", "design-by-contract", "compiler"]
stars: 75
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-31T16:35:04Z"
lastCommitAt: "2026-11-02T17:56:33Z"
lastReleaseAt: "2026-05-18T23:54:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 36
maintainers: ["navid-m"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd44d3d95200aad90071e60c3bb3ae7f3c23d5a8963da9f5f2752718f9c48af/spectrelang/spectre"
fundingLinks: ["GITHUB:https://github.com/navid-m", "KO_FI:https://ko-fi.com/navid_m"]
discussionCount: 0
---

# Spectre

This repository contains the compiler for the Spectre Programming Language.

Spectre is a statically typed, design-by-contract language aiming to offer low-level control in combination with explicit correctness. The compiler is written entirely in Spectre itself.

Resources:

- [Documentation](https://spectre-docs.pages.dev)
- [Playground](https://spectrelang.org/playground)
- [Devlog](https://spectrelang.org/log/devlog)
- [Matrix](https://matrix.to/#/%23spectrelang:matrix.org)
- [Discord](https://discord.gg/aCnnVwAUWU)
- [Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=NavidM.spectre-lang)
- [Neovim Extension](https://github.com/spectrelang/spectre-nvim)
- [Language Server](https://github.com/spectrelang/spectre-ls)

## Installation

Prerequisite: cmake

Run the following in the terminal (Linux/Mac):

```
curl https://spectrelang.org/get.sh | sh
```

Or in Windows PowerShell:

```
irm https://spectrelang.org/get.ps1 | iex
```

Then run to confirm installation:

```
spectre -v
```

The compiler is tested under MacOS aarch64 and Linux x86_64, a Windows implementation exists, though is currently not as maintained.

An example program:…
