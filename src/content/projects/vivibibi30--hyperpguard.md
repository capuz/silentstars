---
repo: "vivibibi30/hyperpguard"
name: "hyperpguard"
description: "HyperPGuard — intercepts privacy reporting from HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress (LSPosed module)"
originalDescription: "HyperPGuard — 在采集入口、本地存储、对外接口、网络出口四层拦截 HyperOS 预装组件的隐私上报（LSPosed 模块）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vivibibi30/hyperpguard"
homepage: "https://modules.lsposed.org/module/io.github.vivibibi30.hyperpguard"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["hyperos", "lsposed", "privacy", "xiaomi", "xposed", "systemhelper", "miui"]
stars: 107
forks: 6
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-06T01:10:35Z"
lastCommitAt: "2026-11-11T11:22:32Z"
lastReleaseAt: "2026-11-07T05:11:39Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 38
maintainers: ["vivibibi30", "KANGKKKKKKK"]
openGraphImageUrl: "https://opengraph.githubassets.com/a911ceb48bb4a1f9f81dd3bb6cbdb729c6e65e46f7014dc9cc867678c2ee9b2e/vivibibi30/hyperpguard"
---

# HyperPGuard

Intercepts privacy reporting from HyperOS preinstalled components at four layers: collection entry points, local storage, external interfaces, and network egress.

[Simplified Chinese](https://github.com/vivibibi30/hyperpguard/blob/HEAD/README.md) · [English](https://github.com/vivibibi30/hyperpguard/blob/HEAD/README.en.md)

The following is based on static analysis and runtime observation of preinstalled components on this device. These components collect device identifiers, app usage records, location, call behavior, and other information, and send it out over the network or through cross-process interfaces. This module intercepts these channels on a per-app basis, and its switches are linked to the LSPosed scope. Specific behavior is subject to observations on each device model and system version.

> **Maintenance pace**: This project is maintained by an individual. Development and verification rely mainly on AI assistance and self-funded real-device testing, and the long-term cost is borne personally by the author. The update frequency has been deliberately reduced: releases are published only for defects that affect usage, discovery of new reporting channels,…
