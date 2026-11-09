---
repo: "Kroisse/tribute"
name: "tribute"
description: "This is not the greatest language in the world, no. This is just a tribute."
readmeQualityOk: true
url: "https://github.com/Kroisse/tribute"
homepage: "https://www.youtube.com/watch?v=_lK4cX5xGiQ"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 81
closedIssues: 591
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-05T11:06:11Z"
lastCommitAt: "2026-11-09T04:35:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 75
maintainers: ["Kroisse", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dd3d939481669f70b81abb3670a0c2e6c5da53486e5b0a1d499d626557e7584/Kroisse/tribute"
---

# Tribute

A pure, practical functional language that's easy to learn with simple and
familiar syntax.

## Features

- **Static Types with Inference**: Full type inference including ability
  (effect) inference
- **Algebraic Effects**: Unison-style abilities with delimited, one-shot
  continuations
- **Familiar Syntax**: ML semantics with C/Rust-style syntax
  (`fn`, `{}`, `;`, `struct`/`enum`)
- **Multiple Targets**: Cranelift (native) and WasmGC

Current implementation support is narrower than the language design. See the
[compiler capabilities document](https://github.com/Kroisse/tribute/blob/HEAD/docs/capabilities.md) for audited frontend,
native, and WasmGC status. Compilation alone is not execution evidence.

## Quick Example

```text
use std::abilities::Throw
use std::io::{Io, print_line}

fn fail() ->{Throw(String)} String {
    Throw::throw("the failure was handled")
}

fn recover() -> String {
    handle fail() {
        do value { value }
        op Throw::throw(message) { "Recovered: " <> message }
    }
}

fn main() ->{Io} Nil {
    print_line(recover())
}
```

## Setup

After cloning the repository, set up the git hooks:

```bash
git config core.hooksPath…
