---
repo: "jha-naman/treetags"
name: "treetags"
description: "Generate Vim/NeoVim compatible tags for multiple languages"
readmeQualityOk: true
url: "https://github.com/jha-naman/treetags"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["code-navigation", "neovim", "vim"]
stars: 14
forks: 2
openIssues: 2
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-02-20T09:09:07Z"
lastCommitAt: "2026-08-08T04:32:33Z"
lastReleaseAt: "2026-02-25T11:04:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 63
maintainers: ["jha-naman"]
openGraphImageUrl: "https://opengraph.githubassets.com/670222b86e77570cc0334d44981abd227c6b802fbbb120dae2d7c2b3b7164e18/jha-naman/treetags"
---

# TreeTags

Add code navigation for multiple languages in Vi/Vim/Neovim.

Leverages tree-sitter to fulfill the goal of supporting multiple programming
languages with minimal effort without sacrificing maintainability or performance.

To get a brief overview of what treetags does and how it compares to Universal
ctags see [here](#what-does-treetags-do).

### More information

- [Installation](#installation)
- [Natively Supported Languages](#natively-supported-languages)
- [Languages supported by WASM plugins](#wasm-plugins)
- [Recommended usage](#recommended-usage)

## Natively Supported Languages

Support for these languages is available out of the box in treetags

### Full support with extension fields
- [x] C
- [x] C++
- [x] Go
- [x] JavaScript
- [x] Python
- [x] Rust
- [x] TypeScript

Refer to Universal ctags [documentation](https://docs.ctags.io/en/latest/man/ctags.1.html#extension-fields)
for more about extension fields.

### Basic navigation support without extension fields
- [x] Bash/Sh
- [x] C#
- [x] Elixir
- [x] ~Haskell~
- [x] Java
- [x] Julia
- [x] Lua
- [x] Ocaml
- [x] PHP
- [x] Ruby
- [x] Scala

## WASM plugins

Treetags functionality can be extended via WASM plugins.…
