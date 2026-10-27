---
repo: "folo-rs/folo"
name: "folo"
description: "Mechanisms for high-performance hardware-aware programming in Rust"
readmeQualityOk: true
url: "https://github.com/folo-rs/folo"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["rust"]
stars: 43
forks: 7
openIssues: 12
closedIssues: 417
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2024-08-31T13:00:11Z"
lastCommitAt: "2026-10-27T09:09:12Z"
lastReleaseAt: "2026-07-17T16:12:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["sandersaares", "martintmk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c95472386423d07ebd3d4578b2388a3f43a33f199cb53bedc9c5af6ff0410733/folo-rs/folo"
---

# Folo

Mechanisms for high-performance hardware-aware programming in Rust.

**[Read the published books](https://folo-rs.github.io/folo/)** for in-depth guides to Folo's tools.

# Getting started

Folo is a collection of libraries and command-line tools. Choose the packages you need;
you do not need to adopt the whole workspace or clone this repository to use them.
Follow the package links below for usage examples and documentation.

Add a library to your Rust project with Cargo, for example:

```text
cargo add many_cpus
```

Install a command-line tool separately:

```text
cargo install cargo-bench-history
```

If you use [`cargo-binstall`][cargo_binstall], `cargo binstall cargo-bench-history`
downloads a prebuilt binary on supported targets, falling back to a source build elsewhere.
Check the tool's README for platform requirements; in particular, [`dure`][dure] runs only
on Windows.

To contribute to Folo itself, see [DEVELOPMENT.md](https://github.com/folo-rs/folo/blob/HEAD/DEVELOPMENT.md).

# What it gives you

To take advantage of hardware-awareness we must first gain that awareness.
[`many_cpus`][many_cpus] informs us about the nature of the system's processors and
[the…
