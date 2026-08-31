---
repo: "symbuzzer/livebootmodule"
name: "livebootmodule"
description: "A Magisk, KernelSU and APatch module that enables unix-style (verbose) boot animation for Android devices"
readmeQualityOk: true
url: "https://github.com/symbuzzer/livebootmodule"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["magisk", "module", "liveboot", "kernelsu"]
stars: 437
forks: 20
openIssues: 9
closedIssues: 31
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2023-05-08T16:17:59Z"
lastCommitAt: "2026-08-31T09:59:57Z"
lastReleaseAt: "2024-03-16T09:03:53Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 18
maintainers: ["symbuzzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/bae77abf1ee3906770dd5fc8f661755c6f7bef30f09dd238952f8fcfdbb72ed8/symbuzzer/livebootmodule"
fundingLinks: ["PATREON:https://patreon.com/user?u=88377368"]
---

# LiveBoot Magisk & KernelSU & APatch Module

## Description

- A Magisk, KernelSU and APatch module that enables unix-style (verbose) boot animation for Android devices
- Magisk, KernelSU and APatch module of [Chainfire](https://github.com/Chainfire)'s [LiveBoot](https://github.com/Chainfire/liveboot) app without any app or UI

Preview: https://www.youtube.com/watch?v=N0tqzVWxpJk

## Supported devices & ROMs

It has been successfully tested on many Android 16, 15, 14, 13 and 12 based ROMs. Should work all rooted devices via Magisk, KernelSU and APatch.

## Download

[Releases](https://github.com/symbuzzer/livebootmodule/releases)

## Changelog

[CHANGELOG.md](https://github.com/symbuzzer/livebootmodule/blob/main/CHANGELOG.md)

## LiveBoot Customization Guide

> [!NOTE]
> `loader.sh`, `config` and `liveboot.apk` are in the directory `/data/adb/modules/livebootmagisk`.

1. Open `config` file using a text editor.
2. Modify the settings as per your requirements (listed below). **⚠️Warning: don't add anything else (even a comment line) to the file!⚠️**
3. Save the files and reboot your device to apply the changes.

#### Manual Customization Options

- Background colors: ` ` (no…
