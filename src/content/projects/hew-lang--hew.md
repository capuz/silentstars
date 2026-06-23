---
repo: "hew-lang/hew"
name: "hew"
description: "A statically-typed, actor-oriented programming language for concurrent and distributed systems."
url: "https://github.com/hew-lang/hew"
homepage: "https://hew.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["actors", "compiler", "hew", "llvm", "mlir", "programming-language", "actor-model", "concurrency", "language", "rust"]
stars: 6
forks: 2
openIssues: 53
closedIssues: 331
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T03:46:40Z"
lastCommitAt: "2026-06-23T23:17:03Z"
lastReleaseAt: "2026-03-16T11:03:16Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 97
undervaluedScore: 61
maintainers: ["slepp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164413590/5ab1dca2-2c2b-4e5b-ae79-a6be15854481"
discussionCount: 1
---

# Hew

A statically-typed, actor-oriented programming language for concurrent and distributed systems.

**[Website](https://hew.sh)** | **[Documentation](https://hew.sh/docs)** | **[Playground](https://hew.sh/playground)** | **[Tutorial](https://hew.sh/learn)**

## Install

```bash
curl -fsSL https://hew.sh/install | bash
```

Pre-built binaries for Linux (x86_64) and macOS (x86_64, ARM) are available on the [Releases](https://github.com/hew-lang/hew/releases) page. Also available via [Homebrew, Docker, and system packages](https://hew.sh/docs/install).

## Quick Start

```bash
# Hello world
echo 'fn main() { println("Hello from Hew!"); }' > hello.hew
hew run hello.hew

# Start a new project
hew init my_project
cd my_project
# hew init creates main.hew + README.md (no hew.toml)
hew check main.hew
hew fmt --check main.hew
hew doc main.hew --output-dir doc
hew run main.hew

# Interactive REPL
hew eval
```

### Evaluation & REPL

`hew eval` can run as an interactive REPL, evaluate a file in REPL context, or
evaluate a one-off inline expression. The REPL remembers top-level items and
`let`/`var` bindings across inputs.

```bash
hew eval
hew eval -f script.hew
hew eval "1 + 2"
hew eval…
