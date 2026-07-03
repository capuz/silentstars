---
repo: "lhaig/intent"
name: "intent"
description: "Intent: exploring contract-based language design for AI-generated code"
url: "https://github.com/lhaig/intent"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T11:34:28Z"
lastCommitAt: "2026-07-03T12:22:54Z"
lastReleaseAt: "2026-02-16T13:04:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 37
maintainers: ["lhaig"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d11dd3205a745d58f6de31f268cf707c9d2acd69eec23de97ebe6a70706dc13/lhaig/intent"
---

# Intent Programming Language

Intent is a programming language designed for AI code assistants to write, that compiles to **multiple targets** for humans to use. The toolchain is built in Go and produces native binaries (via Rust), JavaScript, and WebAssembly from a single source file.

The language prioritizes **explicit contracts**, **declared intent**, and **verifiable correctness** over brevity. Every function carries preconditions and postconditions, every entity carries invariants, and intent blocks link natural-language goals to formal verification points. Programs can be tested in Intent itself (`test "..." { ... }` blocks) and edited in VS Code with full LSP support — diagnostics, hover, go-to-definition, completion, formatting, signature help, semantic-token highlighting, and Z3 verification status.

## Prerequisites

- **Go** 1.26+
- **Rust** (with `cargo`) for native binary compilation
- **Node.js** (optional) for JavaScript target builds and in-language tests on the JS target
- **Z3** (optional) for SMT-based contract verification

## Quick Start

```bash
# Build the compiler
make build

# Compile and run an example (native binary)
./intentc build…
