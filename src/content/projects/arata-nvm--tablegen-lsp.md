---
repo: "arata-nvm/tablegen-lsp"
name: "tablegen-lsp"
description: "A language server for TableGen and a VSCode extension"
readmeQualityOk: true
url: "https://github.com/arata-nvm/tablegen-lsp"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["lsp", "lsp-server", "tablegen", "vscode-extension"]
stars: 32
forks: 5
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-08-17T08:14:27Z"
lastCommitAt: "2026-10-10T10:06:16Z"
lastReleaseAt: "2026-05-17T16:19:44Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 58
maintainers: ["renovate[bot]", "arata-nvm"]
openGraphImageUrl: "https://opengraph.githubassets.com/f909cd3a934f6df9c485bb8d6f26509ce5f3b9d75231952fe1e39070fbdb6339/arata-nvm/tablegen-lsp"
---

# tablegen-lsp

A language server and VS Code extension for [TableGen](https://llvm.org/docs/TableGen/index.html).

## Quick Start

See [`docs/tutorial.md`](https://github.com/arata-nvm/tablegen-lsp/blob/HEAD/docs/tutorial.md) for a quick start.

## Features

See [`docs/features.md`](https://github.com/arata-nvm/tablegen-lsp/blob/HEAD/docs/features.md) for a list of features currently implemented or planned.

## Installation

This extension is available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=arata-nvm.tablegen-lsp).

## Configuration

See [`docs/configuration.md`](https://github.com/arata-nvm/tablegen-lsp/blob/HEAD/docs/configuration.md) for configuration options.

## Development

### Dependencies

- LLVM 23.1.0

### Building from Source

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/arata-nvm/tablegen-lsp
cd tablegen-lsp

# Linux
TABLEGEN_230_PREFIX=/usr/lib/llvm-23 cargo build

# macOS
brew install llvm@23
cargo build
```

### Running Tests

```bash
cargo test
```

### Debugging

1. Open the [`vscode`](https://github.com/arata-nvm/tablegen-lsp/blob/HEAD/vscode) directory in VS Code
2. Press…
