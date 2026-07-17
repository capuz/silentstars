---
repo: "eventb-rossi/rossi"
name: "rossi"
description: "A Rust toolchain for Event-B: parser, static checker, CLI and Language Server (LSP) with Rodin round-tripping"
readmeQualityOk: true
url: "https://github.com/eventb-rossi/rossi"
homepage: "https://eventb-rossi.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["event-b", "eventb", "prob", "rodin", "cli", "formal-methods", "language-server", "lsp", "parser", "static-analysis"]
stars: 6
forks: 2
openIssues: 4
closedIssues: 29
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-18T03:07:00Z"
lastCommitAt: "2026-07-17T05:28:33Z"
lastReleaseAt: "2026-07-06T23:14:19Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 70
maintainers: ["evdenis", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fd629ea1e2f24f5470ec644ad3f86b89be7a2e2c7e816e6f207f175cde74b03/eventb-rossi/rossi"
---

# Event-B Rossi

A Rust toolchain for the Event-B formal modeling language: parser,
static checker, command-line tool, and Language Server Protocol
implementation.

## Overview

Event-B is a formal method for system-level modeling and analysis.
Rossi covers the full author-to-Rodin path:

- **`rossi`** — pest-based parser and typed AST with a pretty-printer
  that round-trips between `.eventb` text and the native Rodin
  `.buc` / `.bum` / `.zip` XML formats.
- **`rossi-build`** — static checker that layers type inference and
  well-formedness checks on the AST and emits Rodin-compatible
  `.bcc` / `.bcm` checked XML, so models authored in text round-trip
  through the Rodin toolchain.
- **`rossi-cli`** — the `rossi` command-line tool wrapping the
  parser, checker, and language server.
- **`eventb-lsp`** — Language Server Protocol implementation powering
  editor extensions for VS Code, Neovim, Emacs, Sublime Text, and Zed.

## Features

**Parse & round-trip**
- Full Event-B syntax: contexts, machines, events, refinement, witnesses
- Text ↔ native Rodin XML (`.buc` / `.bum` / `.zip`)
- Unicode and ASCII operator conventions (Rodin Keyboard mapping)
- Pretty-printer with…
