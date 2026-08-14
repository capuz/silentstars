---
repo: "rcore-os/tgoskits"
name: "tgoskits"
description: "An integrated os-level crates repository for operating system and virtualization development"
readmeQualityOk: true
url: "https://github.com/rcore-os/tgoskits"
homepage: "http://rcore-os.cn/tgoskits/"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
stars: 62
forks: 133
openIssues: 119
closedIssues: 201
watchers: 0
contributors: 298
recentReleases: 0
createdAt: "2026-03-13T00:54:03Z"
lastCommitAt: "2026-08-14T05:15:18Z"
lastReleaseAt: "2026-04-16T04:17:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 44
maintainers: ["ZR233", "ZCShou", "silicalet"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96923cccec57ccf529753c54c783f46f619df63115c3e6c9e4e45086bdfb63/rcore-os/tgoskits"
discussionCount: 13
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
