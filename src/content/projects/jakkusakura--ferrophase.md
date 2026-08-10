---
repo: "JakkuSakura/FerroPhase"
name: "FerroPhase"
description: "An experiment of high level code optimization"
readmeQualityOk: true
url: "https://github.com/JakkuSakura/FerroPhase"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["compiler", "programming-language"]
stars: 37
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-14T05:28:17Z"
lastCommitAt: "2026-08-10T05:04:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["JakkuSakura"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d99691dbbbd11e59155add2d39c6ee9c6d14f3ee59040b0ae30d1c037785924/JakkuSakura/FerroPhase"
---

# FerroPhase

FerroPhase is a multi-language compiler framework. Frontends translate source
languages into one shared AST, and the compiler lowers that AST through HIR,
typing, MIR, and LIR before interpretation, bytecode emission, native codegen,
or source-target printing.

The project is designed for two related workflows:

- **Compile mode** resolves and types the program for a concrete backend. High-
  level `#[op = "..."]` calls may be lowered to ordinary `std` wrappers, while
  `#[intrinsic = "..."]` declarations provide compiler-pipeline primitives.
- **Transpile mode** keeps the AST/source-level shape as high-level as possible
  and prints the requested target language. `--target fp` prints FerroPhase
  source; other target printers include TypeScript, JavaScript, Python, Go,
  Zig, SYCL, Rust, and WIT when enabled.

The same semantic contract is intended to hold across AST, HIR, MIR, LIR,
interpreters, bytecode, and compiled backends. A representation change must not
change observable program behavior.

## Quick Start

Build the CLI from the workspace:

```bash
cargo build --release -p fp-cli
export PATH="$PWD/target/release:$PATH"
```

Most compiler commands require a…
