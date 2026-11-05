---
repo: "mrcjkb/neotest-haskell"
name: "neotest-haskell"
description: "Neotest adapter for Haskell (cabal or stack) with support for Sydtest, Hspec and Tasty"
readmeQualityOk: true
url: "https://github.com/mrcjkb/neotest-haskell"
language: "Lua"
languages: ["Lua"]
languagePcts: [88]
topics: ["haskell", "hspec", "neovim", "neovim-plugin", "testing", "treesitter", "tasty", "sydtest"]
stars: 69
forks: 3
openIssues: 15
closedIssues: 41
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2022-08-08T16:50:32Z"
lastCommitAt: "2026-11-05T00:22:35Z"
lastReleaseAt: "2023-04-14T22:28:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 48
maintainers: ["mrcjkb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/793ba7e022201736af94af7c59464a9b02a0b3ca092ca15910b98cd1cc8a9f0f/mrcjkb/neotest-haskell"
fundingLinks: ["GITHUB:https://github.com/mrcjkb"]
discussionCount: 0
---

A <a href="https://github.com/nvim-neotest/neotest">neotest</a> adapter for Haskell.

## Quick links

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Examples](#examples)
- [TODO](#todo)
- [Troubleshooting](#troubleshooting)
- [Recommendations](#recommendations)

## Features

- [x] Supports [Cabal](https://www.haskell.org/cabal/) (single/multi-package) projects.
- [x] Supports [Stack](https://docs.haskellstack.org/en/stable/)
      (single/multi-package) projects.
- [x] Parses [Hspec](https://hackage.haskell.org/package/hspec)
      and [Sydtest](https://hackage.haskell.org/package/sydtest)
      `--match` filters for the cursor's position using tree-sitter.
- [x] Parses [Tasty](https://hackage.haskell.org/package/tasty)
      `--pattern` filters for the cursor's position using tree-sitter.
- [x] Parses test results and displays error messages as diagnostics.

https://user-images.githubusercontent.com/12857160/224197351-8ca64bd5-8d89-4689-8c40-18d1d018896e.mp4

## Requirements

- `neovim >= 0.12`
- [neotest](https://github.com/nvim-neotest/neotest)

## Installation

### rocks.nvim

```vim
:Rocks install neotest-haskell
```

rocks.nvim…
