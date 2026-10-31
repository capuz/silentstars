---
repo: "magicant/yash-rs"
name: "yash-rs"
description: "Reimplementation of yash, an extended POSIX shell"
readmeQualityOk: true
url: "https://github.com/magicant/yash-rs"
homepage: "https://magicant.github.io/yash-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["rust", "unix-shell", "posix-sh"]
stars: 101
forks: 6
openIssues: 49
closedIssues: 128
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2020-12-05T16:38:25Z"
lastCommitAt: "2026-10-31T07:46:28Z"
lastReleaseAt: "2022-10-01T02:26:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["magicant", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e18e897660dc4fc478b9e0e2000971637257659100bfdc2a4aaf2eb3f76e53d7/magicant/yash-rs"
discussionCount: 0
---

# Yash-rs

This is a reimplementation project of [Yet Another Shell (yash)](https://magicant.github.io/yash/) in Rust.
Currently, only a minimal subset of the original yash is implemented.
It will be extended to cover more features in the future.

## Features

Currently, yash can run shell scripts written in POSIX-compatible syntax.
Support for interactive shell features is limited.

- [x] Running shell scripts that only use POSIX-compatible syntax and features
- [x] Minimal interactive shell features
- [ ] Enhanced shell features (Extensions to POSIX shell)
- [ ] Performance optimization
- [ ] Locale support

## Supported platforms

Yash should work on any Unix-like system.
We are testing it on Linux and macOS.
Windows is not supported, but it works under the Windows Subsystem for Linux (WSL).

## Installation

To build and install yash, you need to have Rust installed.
Go to <https://rustup.rs/> and follow the instructions to install Rust.
You will need the latest stable version of the Rust compiler.

Make sure the `cargo` tool installed by `rustup` is in your `PATH`.
Then, run the following command:

```sh
cargo install yash-cli
```

## Usage

To run a shell script, run `yash3`…
