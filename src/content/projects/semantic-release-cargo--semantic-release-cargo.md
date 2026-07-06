---
repo: "semantic-release-cargo/semantic-release-cargo"
name: "semantic-release-cargo"
description: "Integrate a Rust project with semantic-release"
readmeQualityOk: true
url: "https://github.com/semantic-release-cargo/semantic-release-cargo"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["rust", "semantic-release"]
stars: 38
forks: 8
openIssues: 15
closedIssues: 19
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-12-11T22:45:52Z"
lastCommitAt: "2026-07-06T07:03:19Z"
lastReleaseAt: "2022-12-18T22:29:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 53
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad8b7a173269cc86882bd5aae51b329b064b9184432ccaf69f8ecc34638871e2/semantic-release-cargo/semantic-release-cargo"
discussionCount: 7
---

# semantic-release-cargo

[build status]: https://github.com/semantic-release-cargo/semantic-release-cargo/actions/workflows/release.yml/badge.svg?event=push

**semantic-release-cargo** integrates a cargo-based Rust project with [semantic-release].
This solves two use cases:

1. publishing to [crates.io], or other alternate crate registries, and
2. compiling release binaries

[crates.io]: https://crates.io/
[semantic-release]: https://github.com/semantic-release/semantic-release

## Publish to crates.io

After following these instructions, you will have a semantic-release pipeline that publishes
your Rust crate to crates.io.

### Requirements

If publishing to [crates.io], you must set the `CARGO_REGISTRY_TOKEN` environment variable.

If publishing to an [alternate registry](https://doc.rust-lang.org/cargo/reference/registries.html#using-an-alternate-registry), you must set the `CARGO_REGISTRIES_<YOUR REGISTRY>_TOKEN` environment variable.

This workflow is supported on the following systems:

| System        | Supported? |
| ------------- | ---------- |
| macOS aarch64 | ✓          |
| macOS x64     | ✓          |
| Linux x64 gnu | ✓          |

### Install

Install…
