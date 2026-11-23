---
repo: "rakuyoMo/Spooky"
name: "Spooky"
description: "👻 Git at a distance."
readmeQualityOk: true
url: "https://github.com/rakuyoMo/Spooky"
homepage: "https://spooky.rakuyo.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["git", "git-gui", "github"]
stars: 5
forks: 0
openIssues: 10
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-19T04:45:47Z"
lastCommitAt: "2026-11-23T10:15:41Z"
lastReleaseAt: "2026-11-21T15:31:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 48
maintainers: ["rakuyoMo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9bc8ef31fcf9dec131c8805c666af406b657b011bce6ea1bd65eb65e2a2a5f/rakuyoMo/Spooky"
---

English | [简体中文](https://github.com/rakuyoMo/Spooky/blob/HEAD/README-ZH.md)

A native Git client for macOS that works with repositories on your Mac and on your servers.

> **Note**
>
> To use Spooky, download it from [GitHub Releases](https://github.com/rakuyoMo/Spooky/releases/latest). Before you open it for the first time, read [Install Spooky](https://spooky.rakuyo.dev/guide/start/install/) in the user guide.

## About

Spooky opens Git repositories on your Mac, and works directly with repositories on another machine over SSH.

A server repository's working tree stays on the server: Git commands and file reads and writes all run there, so the repository never has to be cloned to your Mac.

Connections use the system's SSH and the host aliases in `~/.ssh/config`. OpenSSH handles authentication, host keys, and connection sharing.

This README is for developers. It covers the tools you need, how to build, run, test, and debug Spooky, and how to contribute.

## Requirements

### Development

- macOS 26 or later
