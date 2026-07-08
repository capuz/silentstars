---
repo: "rcore-os/tgoskits"
name: "tgoskits"
description: "An integrated os-level crates repository for operating system and virtualization development"
readmeQualityOk: true
url: "https://github.com/rcore-os/tgoskits"
homepage: "http://rcore-os.cn/tgoskits/"
language: "Rust"
languages: ["Rust"]
languagePcts: [61]
stars: 54
forks: 116
openIssues: 91
closedIssues: 140
watchers: 0
contributors: 294
recentReleases: 10
createdAt: "2026-03-13T00:54:03Z"
lastCommitAt: "2026-07-08T05:41:43Z"
lastReleaseAt: "2026-04-16T04:17:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 51
maintainers: ["ZR233", "Lfan-ke", "ZCShou"]
openGraphImageUrl: "https://opengraph.githubassets.com/3821071d201b74183972c2436cf62672d9fb978028360765d74bd81e0ee1a4dc/rcore-os/tgoskits"
discussionCount: 8
---

<h1 align="center">TGOSKits</h1>

</div>

English | [中文](https://github.com/rcore-os/tgoskits/blob/HEAD/README_CN.md)

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
│   ├── StarryOS/              # StarryOS…
