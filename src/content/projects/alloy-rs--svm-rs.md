---
repo: "alloy-rs/svm-rs"
name: "svm-rs"
description: "Solidity-Compiler Version Manager"
readmeQualityOk: true
url: "https://github.com/alloy-rs/svm-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["solidity", "version-manager"]
stars: 290
forks: 50
openIssues: 7
closedIssues: 29
watchers: 7
contributors: 36
recentReleases: 4
createdAt: "2021-09-11T13:48:37Z"
lastCommitAt: "2026-11-08T10:40:46Z"
lastReleaseAt: "2026-10-23T10:25:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 42
maintainers: ["dependabot[bot]", "decofe", "DaniPopes"]
openGraphImageUrl: "https://opengraph.githubassets.com/bebacabc335f1e9001d85d8d099b4b8622952bf67118dcee94e739cab313e526/alloy-rs/svm-rs"
---

# Solidity Compiler Version Manager

[<img alt="crates.io" src="https://img.shields.io/crates/v/svm-rs.svg?style=for-the-badge&color=fc8d62&logo=rust" height="20">](https://crates.io/crates/svm-rs)
[<img alt="docs.rs" src="https://img.shields.io/docsrs/svm-rs/latest?color=66c2a5&label=docs-rs&style=for-the-badge" height="20">](https://docs.rs/svm-rs/latest/svm)
[<img alt="build status" src="https://img.shields.io/github/actions/workflow/status/roynalnaruto/svm-rs/ci.yml?branch=master&style=for-the-badge" height="20">](https://github.com/roynalnaruto/svm-rs/actions?query=branch%3Amaster)

This crate provides a cross-platform support for managing Solidity compiler versions.

## Install

With [cargo-binstall](https://github.com/cargo-bins/cargo-binstall):

```sh
cargo binstall svm-rs
```

From [crates.io](https://crates.io):

```sh
cargo install svm-rs
```

Or from the repository:

```sh
cargo install --locked --git https://github.com/alloy-rs/svm-rs/
```

## Usage

```sh
Solc version manager

Usage: svm <COMMAND>

Commands:
  help     Print this message or the help of the given subcommand(s)
  install  Install Solc versions [aliases: i]
  list     List all Solc versions [aliases:…
