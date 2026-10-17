---
repo: "jiangshangwan/ClipboardFix"
name: "ClipboardFix"
description: "Fix issue where HyperOS 3.0+ Phrases & Clipboard V4.7.7 blocks third-party input methods from reading system clipboard history"
originalDescription: "修复HyperOS 3.0+常用语和剪贴板V4.7.7在第三方输入法下无法读取系统剪贴板历史记录问题"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jiangshangwan/ClipboardFix"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [78, 22]
stars: 32
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-05-07T14:56:23Z"
lastCommitAt: "2026-10-17T07:58:19Z"
lastReleaseAt: "2026-09-02T15:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 44
maintainers: ["jiangshangwan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1232066238/70e645af-773c-44a6-a936-a2be54bb467b"
---

---

## 💻 Problem Description

On HyperOS 3.0 (Android 16)+, the system app Clipboard & Phrases V4.7.7 blocks third-party input methods (such as WeChat Input) from accessing clipboard history data, so third-party input methods cannot use the system clipboard feature.
Built-in official input methods (Sogou Xiaomi custom edition, iFlytek Xiaomi custom edition, Baidu Xiaomi custom edition, Xiaomi Xiaoai input method) are not affected.

## ✏ Supported Input Methods

 ✍️ Testing was done on the versions above. In theory it is compatible with all versions. For perfect operation, please turn off the gesture hint line. Problems caused by the gesture hint line may not be addressed in the future (too troublesome, I am planning to give up on it)!

> ❌ Baidu Input is not supported for now

## 🤖 Installation Instructions

### 🌡️ Requirements

- Rooted Xiaomi / Redmi phone, HyperOS 3.0+
- Clipboard and Phrases V4.7.7+
- **The LSPosed framework must support the new libxposed module API (API 102)**, for example Vector v2.2 or above
  - The current framework's API version is shown below "Activated" on the LSPosed Manager home page
  - This module is developed on the new API and is not…
