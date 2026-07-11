---
repo: "kawarimidoll/hjkls"
name: "hjkls"
description: "Vim script Language Server, written in Rust."
readmeQualityOk: true
url: "https://github.com/kawarimidoll/hjkls"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["language-server", "neovim", "vim", "vimscript", "lsp"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-19T08:00:25Z"
lastCommitAt: "2026-07-11T05:57:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 32
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b24a68123098dfc16426d0341582d9bf8aee0a00be2552e9790051c149101b46/kawarimidoll/hjkls"
fundingLinks: ["GITHUB:https://github.com/kawarimidoll"]
---

# hjkls

Language Server Protocol (LSP) implementation for Vim script, written in Rust.

## Features

- [x] Diagnostics (syntax errors + [lint rules](https://github.com/kawarimidoll/hjkls/blob/HEAD/LINTING.md))
- [x] Completion (built-in functions + user-defined symbols with scope support)
- [x] Go to definition (same file + cross-file autoload support)
- [x] Hover information (function signatures, autoload file paths)
- [x] Find references (same file + cross-file)
- [x] Document symbols (outline)
- [x] Rename (cross-file support)
- [x] Signature help (parameter info on function calls)
- [x] Workspace symbols (project-wide symbol search)
- [x] Document highlight (highlight symbol under cursor)
- [x] Folding range (function/if/for/while/try/augroup)
- [x] Selection range (smart expand selection via syntax tree)
- [x] Code actions (quick fixes for lint rules)
- [x] Formatting ([configuration](https://github.com/kawarimidoll/hjkls/blob/HEAD/FORMATTING.md))

## Builtin Function Coverage

**Total: 786 functions**

| Category    | Count | Description                                                     |
| ----------- | ----- |…
