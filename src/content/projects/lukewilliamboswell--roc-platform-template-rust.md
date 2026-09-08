---
repo: "lukewilliamboswell/roc-platform-template-rust"
name: "roc-platform-template-rust"
description: "Rust platform template"
readmeQualityOk: true
url: "https://github.com/lukewilliamboswell/roc-platform-template-rust"
homepage: "https://lukewilliamboswell.github.io/roc-platform-template-rust/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [42, 39]
topics: ["roc-lang"]
stars: 10
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2024-05-18T12:30:06Z"
lastCommitAt: "2026-09-08T08:17:54Z"
lastReleaseAt: "2026-09-08T08:06:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 70
maintainers: ["lukewilliamboswell", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a6862b440c8b7f6646c1f47d84273ab08d949bbeae695bea9d0e93dd56021dc/lukewilliamboswell/roc-platform-template-rust"
---

[roc_badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Fpastebin.com%2Fraw%2FcFzuCCd7
[roc_link]: https://github.com/roc-lang/roc

# Roc platform template for Rust

A template for building [Roc platforms](https://www.roc-lang.org/platforms) using [Rust](https://www.rust-lang.org).

## Requirements

- [Rust](https://rustup.rs/) (stable)
- Python 3.12+ and authenticated [GitHub CLI](https://cli.github.com/) for verified Linux runtime downloads
- [Roc](https://www.roc-lang.org/) on `PATH`, matching the `roc` pin in the application header

## Examples

The examples use the immutable [1.1.0 release](https://github.com/lukewilliamboswell/roc-platform-template-rust/releases/tag/1.1.0). Install the compiler declared in the example header first:

```roc
app [main!] { roc: "nightly-2026-09-05-b195f5b", pf: platform "https://github.com/lukewilliamboswell/roc-platform-template-rust/releases/download/1.1.0/BqAtivonrp6omZf8pQLHed3JtdE5TuaWT3ybEgWrLDZ.tar.zst" }
```

Run an example directly: `roc examples/hello_world/main.roc`.

Each application folder contains `main.roc` and any companion modules. The header declares a compiler requirement; it does not install a compiler.

Build…
