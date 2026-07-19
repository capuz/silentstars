---
repo: "jha-naman/treetags"
name: "treetags"
description: "Generate vi compatible tags for multiple languages"
readmeQualityOk: true
url: "https://github.com/jha-naman/treetags"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 13
forks: 2
openIssues: 2
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-02-20T09:09:07Z"
lastCommitAt: "2026-07-19T06:10:31Z"
lastReleaseAt: "2026-02-25T11:04:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 56
maintainers: ["jha-naman"]
openGraphImageUrl: "https://opengraph.githubassets.com/432682bc4107281cae38e6b6cdf0b2c500e91a1b395a69b4d9d5880b351d6ade/jha-naman/treetags"
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

> [!NOTE]
> WASM plugins are still a work in progress…
