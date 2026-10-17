---
repo: "Blue-Mink/moo"
name: "moo"
description: "Moo — fnOS third-party app center: three-source sync / smart categorization / install & update / multi-channel notifications / GitHub acceleration"
originalDescription: "Moo — fnOS 第三方应用中心：三源同步 / 智能归类 / 安装更新 / 多渠道通知 / GitHub 加速"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Blue-Mink/moo"
homepage: "https://github.com/Blue-Mink/moo"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [64, 31]
topics: ["app-store", "docker", "fnos", "fpk", "nas", "self-hosted"]
stars: 76
forks: 6
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-24T15:07:50Z"
lastCommitAt: "2026-10-17T07:59:27Z"
lastReleaseAt: "2026-09-27T14:12:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 39
maintainers: ["Blue-Mink"]
openGraphImageUrl: "https://opengraph.githubassets.com/99b289cfbbe1a175f1a30033645bb16c7a697f45c55c9e045076ffd316632e6a/Blue-Mink/moo"
---

Install a third-party app center on your fnOS NAS: browse, install, update, and download 800+ apps, with notification push ready out of the box.

This repository contains all of Moo's source code: a Go backend (single binary, web embedded) and a React / TypeScript frontend (built with Vite and embedded). Release artifacts are dual-architecture FPK packages for x86_64 and arm64 (since 0.6.303). App directory data comes from three major platforms: the official fnOS app center, FnDepot, and fnos-apps (conversun). Moo only aggregates, categorizes, and pushes; it does not modify upstream data. The `moo.json` at the repository root is a self-index: **this repository itself is a Moo app source** (see 'As a Moo App Source' below).

  App Store-style list · search can directly paste source links · favorites and followed sources

  Automatic health monitoring of acceleration sources · one-click sync / cleanup / restore of app sources · three levels of notification content

  14 domain category chips · app grid · batch operations and drag-to-sort

## Installation

| # | What to do | Notes |
| --- | --- | --- |
| 1 | [Download FPK](https://github.com/Blue-Mink/moo/blob/HEAD/releases/latest) |…
