---
repo: "ColdP/HyperChanger"
name: "HyperChanger"
description: "Official HyperChanger: The original LSPosed module for Xiaomi HyperOS 4 customization. Tweak Control Center, System UI, Lock Screen, and Camera on rooted devices."
originalDescription: "Official HyperChanger: The original LSPosed module for Xiaomi HyperOS 4 customization. Tweak Control Center, System UI, Lock Screen, and Camera on rooted devices."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ColdP/HyperChanger"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [60, 31]
topics: ["android", "android-application", "hyperos", "lsposed", "systemui", "systemui-plugin", "xiaomi", "xposed", "xposed-module", "xposedmodule"]
stars: 257
forks: 8
openIssues: 2
closedIssues: 11
watchers: 3
contributors: 2
recentReleases: 8
createdAt: "2026-08-15T13:39:41Z"
lastCommitAt: "2026-10-13T10:58:37Z"
lastReleaseAt: "2026-10-13T01:43:39Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["ColdP"]
openGraphImageUrl: "https://opengraph.githubassets.com/542539c2fc7747a46f343b6dba3c8e5464209949db03c8044742c51c6f02f82a/ColdP/HyperChanger"
---

## Project Overview

HyperChanger is an LSPosed module for Xiaomi HyperOS 4. Through a companion app, it configures the appearance and behavior of the system interface, notifications and Control Center, lock screen, launcher, system settings, back screen, and supported apps. The module requires root permission and modifies existing components through hooks.

The current source version is **1.2.0 RC2**; refer to the `versionName` in [app/build.gradle.kts](https://github.com/ColdP/HyperChanger/blob/HEAD/app/build.gradle.kts). For download versions and release notes, see [Releases](https://github.com/ColdP/HyperChanger/releases).

The project is still in the testing stage and is mainly adapted for **HyperOS 4 (Android 17)**. Differences in devices, regions, system builds, and app versions may affect functionality; the minimum supported install version does not mean all features are supported.

## Features

### Notifications, Control Center, and Volume Panel

- Separately adjust the notification center and Control Center backgrounds, and the material, blur, opacity, and corner radius of elements such as regular notifications, media notifications, and focus notifications.
- iOS-style…
