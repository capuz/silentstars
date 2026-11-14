---
repo: "SampleBlazkness/AdbHide-Kernel"
name: "AdbHide-Kernel"
description: "Hides ADB state and adbd ports from listed apps (Android 12–16)."
originalDescription: "对名单内应用隐藏 ADB 状态与 adbd 端口（Android 12–16）| Hides ADB state and adbd ports from listed apps (Android 12–16)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SampleBlazkness/AdbHide-Kernel"
language: "Java"
languages: ["Java", "C"]
languagePcts: [46, 30]
topics: ["adb", "android", "kernelsu", "lsposed", "gki", "kernel-module"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-17T14:33:40Z"
lastCommitAt: "2026-11-14T10:47:08Z"
lastReleaseAt: "2026-11-14T04:37:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 55
maintainers: ["SampleBlazkness"]
openGraphImageUrl: "https://opengraph.githubassets.com/26bd12bdbceed50717fd0c90ed85acb74597444fa53b0c4a850e110a30c50260/SampleBlazkness/AdbHide-Kernel"
---

# AdbHide-Kernel

[Simplified Chinese](https://github.com/SampleBlazkness/AdbHide-Kernel/blob/HEAD/README.md) | [English](https://github.com/SampleBlazkness/AdbHide-Kernel/blob/HEAD/README.en.md)

It consists of three modules: the Manager (an LSPosed module), the kernel module, and the Zygisk module.

1. **Manager (LSPosed) layer**: Rewrites the developer options, USB debugging, and wireless debugging settings that apps read so they appear disabled, applied globally (can be selectively enabled or disabled). If the Manager is not installed or fails to inject at boot, the kernel module and Zygisk module also stop working.
2. **Kernel layer**: For apps on the list, hides adbd's socket, listening ports, `/proc/net` entries, and properties.
3. **Zygisk layer**: Replaces the property memory mapping inside target processes, covering apps that bypass the Java layer and read property files directly.

## Full Installation

1. Run `uname -r`, choose the kernel module from the table below, and install it in your root manager.
2. Install `AdbHide-native-v*.zip`.
3. Install `AdbHide-*.apk`, grant root in your root manager, enable AdbHide in LSPosed, and check "System Framework" in its scope…
