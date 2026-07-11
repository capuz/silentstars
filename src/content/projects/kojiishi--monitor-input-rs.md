---
repo: "kojiishi/monitor-input-rs"
name: "monitor-input-rs"
description: "Command line tool to change input sources of display monitors with DDC/CI."
readmeQualityOk: true
url: "https://github.com/kojiishi/monitor-input-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ddc", "mccs", "vcp", "vesa"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-16T11:27:09Z"
lastCommitAt: "2026-07-11T05:56:17Z"
lastReleaseAt: "2025-04-26T05:17:32Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 56
maintainers: ["dependabot[bot]", "kojiishi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca79db05f7f4cb180d30366c68d26c406d2bc96ae9fa04a46997d60eeadbdd8b/kojiishi/monitor-input-rs"
---

[CI-badge]: https://github.com/kojiishi/monitor-input-rs/actions/workflows/rust-ci.yml/badge.svg
[CI]: https://github.com/kojiishi/monitor-input-rs/actions/workflows/rust-ci.yml
[crate-badge]: https://img.shields.io/crates/v/monitor-input.svg
[crate]: https://crates.io/crates/monitor-input
[docs-badge]: https://docs.rs/monitor-input/badge.svg
[docs]: https://docs.rs/monitor-input/

# monitor-input

A command line tool to change input sources of display monitors with [DDC/CI].

* Supports Windows/Mac/Linux.
* Also exposed [as library](#as-library).
* Please see the [release notes] for the change history.

[DDC/CI]: https://en.wikipedia.org/wiki/Display_Data_Channel
[release notes]: https://github.com/kojiishi/monitor-input-rs/releases

# Install

## Prerequisites

* [Install Rust] if it's not installed yet.
* On Windows, please also see [Windows App](#windows-app).
* On Linux, `libudev` is required. See [libudev-sys].

[libudev-sys]: https://github.com/dcuddeback/libudev-sys

[install Rust]: https://rustup.rs/

## From [`crates.io`][crate]

```shell-session
cargo install monitor-input
```

## From [github](https://github.com/kojiishi/monitor-input-rs)

```shell-session
cargo…
