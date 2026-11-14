---
repo: "jolars/fatou"
name: "fatou"
description: "Julia language server, formatter, and linter built in Rust"
readmeQualityOk: true
url: "https://github.com/jolars/fatou"
homepage: "https://fatou.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 71
forks: 4
openIssues: 0
closedIssues: 61
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-06-16T07:23:23Z"
lastCommitAt: "2026-11-14T21:58:30Z"
lastReleaseAt: "2026-07-25T19:15:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["jolars", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1270938005/af76a7c5-ae44-41af-b216-0a65f130e5b9"
fundingLinks: ["GITHUB:https://github.com/jolars"]
discussionCount: 0
---

# Fatou <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jolars/fatou/main/assets/logo-dark.png"><img src="https://raw.githubusercontent.com/jolars/fatou/main/assets/logo.png" alt="Fatou logo" align="right" width="139"></picture>

VSX](https://img.shields.io/open-vsx/v/jolars/fatou?logo=vsix)](https://open-vsx.org/extension/jolars/fatou)
Code](https://vsmarketplacebadges.dev/version-short/jolars.fatou.svg?logo=vsix)](https://marketplace.visualstudio.com/items?itemName=jolars.fatou)

Fatou is a language server, formatter, and linter for
[Julia](https://julialang.org) that never has to run Julia itself. It bundles
three tools in one:

- **Formatter** (`fatou format`): fast, deterministic, and opinionated
- **Linter** (`fatou lint`): configurable, with auto-fix support for many rules
- **Language server** (`fatou lsp`): both of the above, plus IDE features like
  completion, hover, go-to-definition, and more

Fatou is fast, safe, and easy to embed in editors and tooling. The architecture
follows [rust-analyzer](https://rust-analyzer.github.io/): a lossless
[`rowan`](https://crates.io/crates/rowan) syntax tree that reconstructs the
input…
