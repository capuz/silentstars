---
repo: "vivibibi30/hyperpguard"
name: "hyperpguard"
description: "HyperPGuard — Blocks privacy reporting by HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress (LSPosed module)"
originalDescription: "HyperPGuard — 在采集入口、本地存储、对外接口、网络出口四层拦截 HyperOS 预装组件的隐私上报（LSPosed 模块）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vivibibi30/hyperpguard"
homepage: "https://modules.lsposed.org/module/io.github.vivibibi30.hyperpguard"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["hyperos", "lsposed", "privacy", "xiaomi", "xposed", "systemhelper", "miui"]
stars: 115
forks: 6
openIssues: 3
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-06T01:10:35Z"
lastCommitAt: "2026-11-12T05:41:00Z"
lastReleaseAt: "2026-11-07T05:11:39Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 37
maintainers: ["vivibibi30", "KANGKKKKKKK", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5af3d3f4c1446aafe6a93a1431ce1a7efad4c7ed0c95861415ffb0fbf1c64303/vivibibi30/hyperpguard"
discussionCount: 0
---

# HyperPGuard

Blocks privacy reporting by HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress

[Simplified Chinese](https://github.com/vivibibi30/hyperpguard/blob/HEAD/README.md) · [English](https://github.com/vivibibi30/hyperpguard/blob/HEAD/README.en.md)

The following content is based on static analysis and runtime observation of preinstalled components on this device. These components collect information such as device identifiers, app usage records, location, and call behavior, and send it out over the network or cross-process interfaces. This module intercepts these channels on a per-app basis, and its switches are linked to the LSPosed scope. Specific behavior is subject to observations on each device model and system version.

> **Maintenance pace**: This project is maintained by an individual. Development and verification rely mainly on AI assistance and self-funded real-device testing, and the long-term cost is borne personally by the author. The update frequency has been proactively reduced: releases are made only when a defect affecting usage appears, when a new reporting channel is…
