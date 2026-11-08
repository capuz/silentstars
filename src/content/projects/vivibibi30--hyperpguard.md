---
repo: "vivibibi30/hyperpguard"
name: "hyperpguard"
description: "HyperPGuard — Blocks privacy reporting from HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress (LSPosed module)"
originalDescription: "HyperPGuard — 在采集入口、本地存储、对外接口、网络出口四层拦截 HyperOS 预装组件的隐私上报（LSPosed 模块）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vivibibi30/hyperpguard"
homepage: "https://modules.lsposed.org/module/io.github.vivibibi30.hyperpguard"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["hyperos", "lsposed", "privacy", "xiaomi", "xposed", "systemhelper", "miui"]
stars: 62
forks: 4
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-06T01:10:35Z"
lastCommitAt: "2026-11-08T10:40:59Z"
lastReleaseAt: "2026-11-07T05:11:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 40
maintainers: ["vivibibi30"]
openGraphImageUrl: "https://opengraph.githubassets.com/421c2249543a13e7c595cc291add709edca23eea1f42486f56d22f7b54ca02d4/vivibibi30/hyperpguard"
---

# HyperPGuard

Blocks privacy reporting from HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress.

The following is based on static analysis and runtime observation of preinstalled components on this device. These components collect device identifiers, app usage records, location, call behavior, and similar information, and send it out over the network or through cross-process interfaces. This module blocks these channels on a per-app basis, and its switches are linked to the LSPosed scope. Actual behavior depends on observations on each device model and system version.

> **Maintenance cadence**: This project is maintained by one person. Development and verification depend on self-funded model calls and real-device testing. Therefore, releases are only published for defects that affect usage, newly discovered reporting channels, or major system version adaptation. UI and copy changes will be merged into the next substantive update rather than released separately.

This repository is the source repository: `src/` contains all Java implementation, and `build.sh` is the complete build script. It packages…
