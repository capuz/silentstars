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
languagePcts: [54, 41]
topics: ["android", "android-application", "hyperos", "lsposed", "systemui", "systemui-plugin", "xiaomi", "xposed", "xposed-module", "xposedmodule"]
stars: 326
forks: 12
openIssues: 3
closedIssues: 19
watchers: 3
contributors: 3
recentReleases: 9
createdAt: "2026-08-15T13:39:41Z"
lastCommitAt: "2026-11-03T12:48:06Z"
lastReleaseAt: "2026-10-24T18:05:33Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 29
maintainers: ["ColdP", "WCNMSSB"]
openGraphImageUrl: "https://opengraph.githubassets.com/087ae7606bba6f809b3882f44102f4184c2037476643217bec6d7a00494e77e2/ColdP/HyperChanger"
---

## Project Introduction

HyperChanger is a modern Xposed module for Xiaomi HyperOS 4. Through a companion app, it configures the appearance and behavior of the system UI, notifications and Control Center, lock screen, home screen, system settings, back screen, and supported apps. The module requires root access and modifies existing components through hooks.

The current source version is determined by `versionName` in [app/build.gradle.kts](https://github.com/ColdP/HyperChanger/blob/HEAD/app/build.gradle.kts). The README does not maintain a version number. For downloads and release notes, see [Releases](https://github.com/ColdP/HyperChanger/releases).

The project is still in the testing stage and is mainly adapted for **HyperOS 4 (Android 17)**. Differences in device, region, system build, and app version may affect functionality. The minimum installable version does not mean all features are supported.

## Features

### Notifications, Control Center, and Volume Panel

- Separately adjust the notification center and Control Center backgrounds, as well as the material, blur, opacity, and corner radius of elements such as regular notifications, media notifications, and focus…
