---
repo: "Star-ZER0/cnwearoverlay"
name: "cnwearoverlay"
description: "Supplement Wear Compose-related features for Xiaomi/OPPO watches"
originalDescription: "为小米/OPPO手表补全Wear Compose相关功能"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Star-ZER0/cnwearoverlay"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-09-22T13:46:25Z"
lastCommitAt: "2026-11-22T11:51:46Z"
lastReleaseAt: "2026-11-10T07:24:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 32
maintainers: ["Star-ZER0"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0ff4cfd54d0440c759db180f5c5247a6ee70c8ee62c9b1d457b33c509e389ff/Star-ZER0/cnwearoverlay"
---

# CN Wear Overlay

## Project Purpose
- Add Wear Compose crown haptic vibration support for Xiaomi / OPPO watches
- Fix the `ClassNotFoundException` crashes on Xiaomi watches caused by the missing `com.google.wear.input.WearHapticFeedbackConstants`
- Fix abnormal haptic sensations on some Xiaomi watches caused by modified haptic feedback constants `CLOCK_TICK` / `SEGMENT_FREQUENT_TICK`

> **Note**
>
> This project is still in an early stage and currently only supports the Xiaomi Watch 5 series, the OPPO Watch all-smart series, and their newer products. Other devices are yet to be adapted, and compatibility is unverified.

## Todo List

- [ ] Mitigate `ClassNotFoundException` and `NoClassDefFoundError` crashes caused by calling private classes on devices without Google's private libraries
- [ ] Create a crown rate normalization factor to unify crown scrolling speed across different devices as much as possible
- [ ] Support Android-based Huawei watch devices
