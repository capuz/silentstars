---
repo: "hermeticbuild/rules_rs"
name: "rules_rs"
description: "Next-gen Rust Bazel rules which provide a blazing-fast ergonomic `crate_universe` reimplementation, first-class Windows support, optimized toolchains, and more."
readmeQualityOk: true
url: "https://github.com/hermeticbuild/rules_rs"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [96]
topics: ["bazel", "cross-compilation", "rust", "hermetic"]
stars: 94
forks: 58
openIssues: 19
closedIssues: 63
watchers: 0
contributors: 35
recentReleases: 0
createdAt: "2025-09-05T12:43:28Z"
lastCommitAt: "2026-09-19T01:17:55Z"
lastReleaseAt: "2025-11-04T07:12:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 50
maintainers: ["dzbarsky", "isaacparker0", "adincebic"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa54e1c2c7ca24056d68533eeb745a6e859fd29190d8d90b79fa7b3e757d3ec9/hermeticbuild/rules_rs"
---

## Overview

`rules_rs` is a Rust + Bazel ruleset built on top of [rules_rust](https://github.com/bazelbuild/rules_rust).
It provides a redistribution of the core compilation rules from `rules_rust`, augmenting them with optimized toolchains, crates.from_cargo integration, and other codepaths.

## Why `rules_rs`

- Fast incremental dependency resolution via Bazel downloader integration and lockfile facts. It uses your Cargo lockfile directly, with no Cargo workspace splicing and no Bazel-specific Cargo lockfile.
- Hermetic Rust toolchains covering a wide target matrix, including Linux GNU/musl and Windows MSVC/GNU/GNULVM ABI variants.
- Cross builds from any supported host to any supported target through the `@llvm` toolchain, including remote execution use cases.
- A patched `rules_rust` repository with compatibility fixes for Windows linking, rust-analyzer integration, and related workflows.

# Installation And Configuration

Add `rules_rs` to `MODULE.bazel`:

```bzl
bazel_dep(name = "rules_rs", version = "0.0.33")
```

## Paved Path

This is the default setup for new users. It provisions the patched `rules_rust`, registers `rules_rs` Rust toolchains, sets explicit host…
