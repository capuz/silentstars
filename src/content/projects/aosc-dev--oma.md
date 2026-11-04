---
repo: "AOSC-Dev/oma"
name: "oma"
description: "Package Manager for AOSC OS"
readmeQualityOk: true
url: "https://github.com/AOSC-Dev/oma"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["aosc", "apt", "package-manager", "rust", "cli"]
stars: 241
forks: 18
openIssues: 4
closedIssues: 36
watchers: 1
contributors: 116
recentReleases: 0
createdAt: "2023-01-29T10:02:36Z"
lastCommitAt: "2026-11-04T02:58:10Z"
lastReleaseAt: "2023-04-09T15:06:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 39
maintainers: ["eatradish", "MingcongBai", "aosc-weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/565148503b818ef09ea9cd5ddb849f13fdd839836315c6702a79260156164fae/AOSC-Dev/oma"
---

### oma - Oh My Ailurus / Package Manager for AOSC OS

[Features](#features) | [Install](#installation) | [Contribute](#contributing)

oma is an attempt at reworking APT's interface, making it more user-friendly, more robust against common user errors, and more performant during package downloads. oma also integrates closely with AOSC OS's various system management functions, from mirror configuration, topic (testing) repository enrollment, to system feature protection.

For a more detailed overview on oma's features, see [features](#Features).

### oma is also available for other dpkg-based OS.

Please see [Install](#installation).

## Features

- **Clear-and-Simple Interface:** Colorful and TUI-heavy interface, with clear marking for key information and simplified commands for common operations.
- **Faster Downloads:** Faster package downloads, powered by the performant [reqwest](https://crates.io/crates/reqwest) HTTP and multi-threaded downloads.
- **Smart Search:** Leveraging the [indicium](https://crates.io/crates/indicium) search engine for more relevant package search results.
- **Fool-Proofing Mechanisms:** Protection against system failures through a combination of…
