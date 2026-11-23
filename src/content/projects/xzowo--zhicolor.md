---
repo: "XZOWO/ZHIColor"
name: "ZHIColor"
description: "An Xposed module that adds lyrics, styles, and music controls to ColorOS's native lock screen music."
originalDescription: "为 ColorOS 原生锁屏音乐增加歌词、样式与音乐控制的 Xposed 模块。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XZOWO/ZHIColor"
language: "Java"
languages: ["Java"]
languagePcts: [82]
topics: ["android", "coloros", "kotlin", "lyrics", "xposed"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-18T07:58:50Z"
lastCommitAt: "2026-11-23T10:29:30Z"
lastReleaseAt: "2026-11-20T04:51:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 26
maintainers: ["XZOWO"]
openGraphImageUrl: "https://opengraph.githubassets.com/5194f006bada73184fdfb2d6535e6c7bc4012d1e3db9057a122637d5ced15042/XZOWO/ZHIColor"
---

# ZHIColor

The native music playback on ColorOS's lock screen mainly shows basic playback information, so the lock screen content is fairly limited while a song is playing. ZHIColor keeps the system playback pipeline and adds lock screen lyrics, lyric styling, and music control settings, making lock screen music information more complete and customizable.

## Before You Begin

- Android 12 or later. Specific features depend on the ColorOS version and system components. A complete device compatibility list has not been established yet.
- Install a framework compatible with libxposed API 102, enable the module in the framework manager, and configure the scope as declared by the module.
- You must grant both ZHIColor Root permission and LSPosed permission. The app can only be entered after both are granted.
- The lyrics feature depends on the Lyricon (词幕) ecosystem. Download the Provider for your player from the [词幕 Provider release page](https://github.com/XZOWO/LyricProvider/releases/latest), otherwise it will not work properly.
