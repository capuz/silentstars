---
repo: "XiaoTong6666/FuseHide"
name: "FuseHide"
description: "An Xposed module for Android 12+ that hides regular storage paths in MediaProvider based on runtime configuration and provides debugging and fixing capabilities for Android/data related Unicode scenarios."
originalDescription: "面向 Android 12+ 的 Xposed 模块，用于在 MediaProvider 中按运行时配置隐藏普通存储路径，并提供 Android/data 相关 Unicode 场景的调试与修复能力。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XiaoTong6666/FuseHide"
homepage: "https://github.com/Xposed-Modules-Repo/io.github.xiaotong6666.fusehide"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [61, 34]
stars: 165
forks: 20
openIssues: 5
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-04-11T08:52:52Z"
lastCommitAt: "2026-07-17T21:38:49Z"
lastReleaseAt: "2026-04-20T08:24:44Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 33
maintainers: ["XiaoTong6666", "dependabot[bot]", "Xieansecn"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a75c6796b67c954d6e8def8ed49f9b7076bbfe0e282c92b6f0d1025a72484df/XiaoTong6666/FuseHide"
---

# FuseHide

## Introduction

FuseHide is an LSPosed/Xposed module and MediaProvider/FUSE debugging tool for Android 12+.

The current implementation loads `libfusehide.so` in the `MediaProvider` process and installs a native hook after `libfuse_jni.so` is loaded, to hide regular paths under `/storage/emulated/0` (`/sdcard`) for specified applications based on runtime configuration, while retaining debugging and fixing logic for `Android/data` and `Android/obb` related Unicode scenarios.

The current version also includes bypass fixes for ignored code points in `/storage/emulated/0/Android/{data,obb}` and runtime configurable strategies for hiding regular paths:

- Effective for the UID corresponding to the specified package name.
- Supports hiding first-level directory names under `/storage/emulated/0`, such as the default `xinhao`, `MT2`.
- Supports configuring relative path hiding, such as nested directories like `Download/private`.
- Supports a stress test mode for "hiding all first-level directories" and allows configuring exceptions.
- Supports editing configurations on the application side and hot-syncing configurations to the injected MediaProvider process.

The default…
