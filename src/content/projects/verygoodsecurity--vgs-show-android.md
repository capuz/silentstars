---
repo: "verygoodsecurity/vgs-show-android"
name: "vgs-show-android"
description: "VGS Show - Android SDK that enables you to securely display sensitive data https://www.verygoodsecurity.com/docs/vgs-show"
readmeQualityOk: true
url: "https://github.com/verygoodsecurity/vgs-show-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "android-show-sdk", "security", "pci-dss", "pci", "show", "tokenization", "vgs", "zerodata", "team-developer-experience"]
stars: 9
forks: 6
openIssues: 1
closedIssues: 1
watchers: 11
contributors: 8
recentReleases: 0
createdAt: "2020-10-23T12:49:42Z"
lastCommitAt: "2026-09-02T08:05:28Z"
lastReleaseAt: "2023-07-25T07:48:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 84
undervaluedScore: 54
maintainers: ["DmytroDm", "vgs-github-renovate-app[bot]", "dmytrokhl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c82f78363583e40ad6461947bb6ecdba7319e107d62761c63e63c36baee86aa/verygoodsecurity/vgs-show-android"
---

VGS Show Android SDK allows you to securely reveal data for your users without having to have that data pass through your systems. It provides customizable UI elements for showing users' sensitive data securely on Android devices.

Table of contents
=================

   * [Dependencies](#dependencies)
   * [Structure](#structure)
   * [Integration](#integration)
   * [Next steps](#next-steps)
   * [Releases](#releases)
   * [License](#license)

---

## Dependencies

| Dependency | Version |
| :--- |:-------:|
| Min SDK |   21    |
| Target SDK |   34    |
| org.jetbrains.kotlin:kotlin-gradle-plugin |  1.9.22 |
| androidx.appcompat:appcompat |  1.6.1  |
| com.squareup.okhttp3:okhttp | 4.12.0  |

---

## Structure
* **VGSShow SDK** - provides an API for interacting with the VGS Vault
* **app** - sample application to act as the host app for testing the SDK during development
---

## AI Agent Integration
This repository ships a public AI skill at [`skills/vgs-show-android-guide/SKILL.md`](https://github.com/verygoodsecurity/vgs-show-android/blob/HEAD/skills/vgs-show-android-guide/SKILL.md) for teams integrating `VGSShowSDK` into Android applications.

Recommended: install the skill…
