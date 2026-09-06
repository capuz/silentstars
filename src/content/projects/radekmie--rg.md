---
repo: "radekmie/rg"
name: "rg"
description: "Regular Games (successor of Regular Board Games)"
readmeQualityOk: true
url: "https://github.com/radekmie/rg"
homepage: "https://radekmie.github.io/rg/"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2019-12-18T09:13:44Z"
lastCommitAt: "2026-09-06T08:04:55Z"
lastReleaseAt: "2025-11-12T18:36:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 59
maintainers: ["radekmie"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bc6a4dba1798f6daca93cd3ec4f2af6635ac585c280d16a897352d9d40ddf4d/radekmie/rg"
---

# Regular Games repo

## Quick start (CLI)

```sh
# In interpreter_rust
cargo run --release run ../games/rg/ticTacToe.rg 1000
```

```sh
# cargo run help
Regular Games CLI

Usage: interpreter <COMMAND>

Commands:
  ast     Print RG AST
  format  Print formatted source
  lsp     Starts a LSP server
  moves   Print available moves
  perf    Benchmark game tree
  run     Benchmark random playouts
  schema  Print JSON schema of RG AST
  source  Print RG source
  help    Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```

## Quick start (GUI)

```sh
# In interpreter_rust
wasm-pack build --out-dir ../../interpreter_node/src/wasm/cli --out-name index --target web cli
wasm-pack build --out-dir ../../interpreter_node/src/wasm/lsp --out-name index --target web lsp_browser

# In interpreter_node
npm clean-install
npm run start
```

## Dependencies

- [Node.js](https://nodejs.org/en/) 24.6.0
- [Rust](https://www.rust-lang.org) 1.89.0
- [`wasm-pack`](https://rustwasm.github.io/wasm-pack/) 0.13.1

### Manual installation

```sh
# System-wide tools on Debian-based systems
apt update
apt install curl gcc libssl-dev…
