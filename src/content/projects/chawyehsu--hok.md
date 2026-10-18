---
repo: "chawyehsu/hok"
name: "hok"
description: "CLI reimplementation of Scoop in Rust"
readmeQualityOk: true
url: "https://github.com/chawyehsu/hok"
homepage: "https://docs.rs/libscoop"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["rust", "windows", "package-manager", "scoop", "package-management"]
stars: 217
forks: 11
openIssues: 8
closedIssues: 5
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2021-01-26T03:13:05Z"
lastCommitAt: "2026-10-18T07:35:16Z"
lastReleaseAt: "2024-12-10T04:06:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 81
undervaluedScore: 24
maintainers: ["chawyehsu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/332956656/d2a279bc-faa1-4c42-ac4c-b160160bcf13"
fundingLinks: ["GITHUB:https://github.com/chawyehsu", "CUSTOM:https://github.com/chawyehsu/sponsors"]
discussionCount: 0
---

# hok

> Hok is a CLI implementation of [Scoop](https://scoop.sh/) in Rust

[简体中文]

## Install

🚧 **CAVEAT**: Under heavy development, interfaces may change without notice.

Assuming you have the original Scoop installed, simply run:

```sh
scoop bucket add dorado https://github.com/chawyehsu/dorado
scoop install dorado/hok
```

Note this will add the `dorado` bucket I maintain to install Hok. Hok is experimental and it's currently only available in that bucket.

## Commands

The command line interface is similar to Scoop.

```raw
$ hok help
Hok is a CLI implementation of Scoop in Rust

Usage: hok.exe <COMMAND>

Commands:
  bucket     Manage manifest buckets
  cache      Package cache management
  cat        Inspect the manifest of a package
  cleanup    Cleanup apps by removing old versions
  config     Configuration management
  hold       Hold package(s) to disable changes
  home       Browse the homepage of a package
  info       Show package(s) basic information
  install    Install package(s)
  list       List installed package(s)
  search     Search available package(s)
  unhold     Unhold package(s) to enable changes
  uninstall  Uninstall package(s)
  update     Fetch…
