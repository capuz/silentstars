---
repo: "rcore-os/tgoskits"
name: "tgoskits"
description: "An integrated os-level crates repository for operating system and virtualization development"
url: "https://github.com/rcore-os/tgoskits"
homepage: "http://rcore-os.cn/tgoskits/"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [66, 21]
stars: 44
forks: 110
openIssues: 98
closedIssues: 121
watchers: 0
contributors: 291
recentReleases: 10
createdAt: "2026-03-13T00:54:03Z"
lastCommitAt: "2026-06-25T06:40:17Z"
lastReleaseAt: "2026-04-16T04:17:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 53
maintainers: ["ZR233", "Lfan-ke", "pengzechen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2a5940ff50482283f8602804071be4772e67f821a228361d98d0c6ed4e49235/rcore-os/tgoskits"
discussionCount: 7
---

<h1 align="center">TGOSKits</h1>

</div>

English | [中文](README_CN.md)

## 1. Introduction

TGOSKits is an integrated repository for operating system and virtualization development. It brings together ArceOS, StarryOS, Axvisor, shared components, platform crates, and driver infrastructure in one workspace. A unified `cargo xtask` entry point is used for build, run, debug, and test workflows, making the repository suitable for component development, cross-system integration, and system-level validation.

Project site: [https://rcore-os.cn/tgoskits/](https://rcore-os.cn/tgoskits/). To understand the project scope and system relationships, start from the [TGOSKits documentation](https://rcore-os.cn/tgoskits/docs/introduction).

## 2. Repository

TGOSKits brings multiple standalone subprojects into the root repository through Git Subtree and provides unified entry points for building, running, testing, and documentation. The main directories are:

```text
tgoskits/
├── components/                # reusable component crates
├── os/
│   ├── arceos/                # ArceOS modular kernel
│   ├── StarryOS/              # StarryOS Linux-compatible OS
│   └── axvisor/               #…
