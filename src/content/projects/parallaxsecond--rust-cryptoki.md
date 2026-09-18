---
repo: "parallaxsecond/rust-cryptoki"
name: "rust-cryptoki"
description: "Rust wrapper for the PKCS #11 API, Cryptoki"
readmeQualityOk: true
url: "https://github.com/parallaxsecond/rust-cryptoki"
homepage: "https://docs.rs/cryptoki/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cryptography", "pkcs11", "rust"]
stars: 115
forks: 96
openIssues: 8
closedIssues: 83
watchers: 9
contributors: 62
recentReleases: 0
createdAt: "2021-03-03T16:58:34Z"
lastCommitAt: "2026-09-18T08:26:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 35
maintainers: ["Jakuje", "sietseringers", "bal-e"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fd177f66d8749c3350c8aee71168f44ed136b3b844577cf00cbc2a479090bf6/parallaxsecond/rust-cryptoki"
discussionCount: 13
---

# Cryptoki Rust Wrapper

The `cryptoki` crate provides an idiomatic interface to the PKCS #11 API.
The `cryptoki-sys` crate provides the direct FFI bindings.

Check the `cryptoki` [README file](https://github.com/parallaxsecond/rust-cryptoki/blob/HEAD/cryptoki/README.md) to get started!

# Community

Come and ask questions or talk with the Parsec Community in our Slack channel or biweekly meetings.
See the [Community](https://github.com/parallaxsecond/community) repository for more information on how to join.

# Contributing

Please check the [**Contribution
Guidelines**](https://parallaxsecond.github.io/parsec-book/contributing/index.html) to know more
about the contribution process.

# History

This repository is based on [this original PR on rust-pkcs11](https://github.com/mheese/rust-pkcs11/pull/43).
Read the PR discussion for more information.

# Releasing steps

Here are the steps needed for maintainers to release those two crates.

* all on-going issues and pull requests have been finalized
* go to the `main` branch and pull the latest
* do a dry-run to ensure everything can be published in the current state `cargo publish --dry-run`
* bump the two crates' version number in…
