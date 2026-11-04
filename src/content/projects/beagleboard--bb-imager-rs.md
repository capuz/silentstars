---
repo: "beagleboard/bb-imager-rs"
name: "bb-imager-rs"
description: "BeagleBoard.org rust based utility for flashing SDCard, MCUs and configuring software image options like username, password, networking etc."
readmeQualityOk: true
url: "https://github.com/beagleboard/bb-imager-rs"
homepage: "https://beagleboard.github.io/bb-imager-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["hacktoberfest"]
stars: 22
forks: 28
openIssues: 24
closedIssues: 93
watchers: 4
contributors: 21
recentReleases: 0
createdAt: "2025-03-21T13:50:02Z"
lastCommitAt: "2026-11-04T08:04:36Z"
lastReleaseAt: "2025-07-16T15:37:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 74
maintainers: ["Ayush1325", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ab2b29d95d8db5322168d2edfd6581b5ec9facfce26c669061b3aeeb4a7e30/beagleboard/bb-imager-rs"
---

# BeagleBoard Imager Rust

BeagleBoard Imaging Utility, a streamlined tool for creating, flashing, and managing OS images for BeagleBoard devices.

# Contributing

Please see [Contributing.adoc](https://github.com/beagleboard/bb-imager-rs/blob/HEAD/docs/modules/ROOT/pages/contributing.adoc)

# Packaging

Please see [Packaging.adoc](https://github.com/beagleboard/bb-imager-rs/blob/HEAD/docs/modules/ROOT/pages/packaging.adoc)

# Configuration

The boards and images are configured using a `config.json` file. This file will typically reside in a remote server. It is quite similar to the one used in `bb-imager` with slight modifications to allow use with non-linux targets along with more verfication.

See [config.json](https://github.com/beagleboard/bb-imager-rs/blob/HEAD/config.json) for example.

# GUI

# CLI

## Home Help

```shell
❯ bb-imager-cli --help
A streamlined tool for creating, flashing, and managing OS images for BeagleBoard devices.

Usage: bb-imager-cli <COMMAND>

Commands:
  flash                Command to flash an image to a specific destination
  list-destinations    Command to list available destinations for flashing based on the selected target
  format…
