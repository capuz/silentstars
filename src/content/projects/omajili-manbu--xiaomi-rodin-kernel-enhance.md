---
repo: "omajili-manbu/Xiaomi_Rodin_Kernel_Enhance"
name: "Xiaomi_Rodin_Kernel_Enhance"
description: "Better kernel for REDMI Turbo 4 / POCO X7 pro (rodin)"
originalDescription: "Better kernel for REDMI Turbo 4 / POCO X7 pro (rodin)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/omajili-manbu/Xiaomi_Rodin_Kernel_Enhance"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["android", "bbg", "kernel", "rodin", "root", "root-hide", "susfs", "sukisu-ultra"]
stars: 6
forks: 7
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 9979
recentReleases: 7
createdAt: "2026-09-19T23:24:53Z"
lastCommitAt: "2026-10-25T08:54:04Z"
lastReleaseAt: "2026-10-16T02:14:12Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["omajili-manbu", "gregkh", "server0608"]
openGraphImageUrl: "https://opengraph.githubassets.com/1811d4ead79dc4f96094ea985cedf6a89d073e31885455d16925b14819ad7d2a/omajili-manbu/Xiaomi_Rodin_Kernel_Enhance"
---

# Xiaomi Rodin Kernel Enhance

[English](https://github.com/omajili-manbu/Xiaomi_Rodin_Kernel_Enhance/blob/HEAD/README.en.md) | Simplified Chinese

An enhanced kernel for the rodin device, built from Xiaomi's open-sourced [`bsp-rodin-v-oss`](https://github.com/MiCode/Xiaomi_Kernel_OpenSource/tree/bsp-rodin-v-oss) kernel source (AOSP `android15-6.6` GKI / MediaTek), and continuously tracking the latest **6.6 LTS**.

## Features

### Root and Hiding
- Built-in **SukiSU-Ultra** (`drivers/kernelsu`), automatically tracked and merged from upstream stable release tags by CI (see “Automation” below)
- Built-in **SuSFS**, integrated from [`omajili-manbu/susfs4ksu` (`gki-android15-6.6-mod`)](https://github.com/omajili-manbu/susfs4ksu/tree/gki-android15-6.6-mod)
- Capable of hiding suspicious SELinux contexts/rules from apps, tied to the SuSFS AVC log spoofing switch

### Anti-Bricking
- **Baseband-guard (BBG)** LSM: intercepts unauthorized writes to critical partitions/device nodes at the kernel layer (from [vc-teahouse/Baseband-guard](https://github.com/vc-teahouse/Baseband-guard), with the allowlist adjusted for rodin)

### Performance
- Compilation optimizations for Cortex-A725 (clang…
