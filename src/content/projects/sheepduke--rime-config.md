---
repo: "sheepduke/rime-config"
name: "rime-config"
description: "Settings for Wubi input method"
readmeQualityOk: true
url: "https://github.com/sheepduke/rime-config"
language: "Lua"
languages: ["Lua"]
languagePcts: [90]
topics: ["rime-config", "wubi"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-04-13T03:02:00Z"
lastCommitAt: "2026-08-24T04:21:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 74
maintainers: ["sheepduke", "daiyue-microsoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/68350916b649e317715d7ae973b7b6901081426451506fa1eacd7f3d0a7ab950/sheepduke/rime-config"
---

该库是 [Rime](https://rime.im/) 输入法一个 86 版极点五笔的输入配置方案，支持多平台（Windows、macOS、Linux、iOS、Android）

## 一、概述

这里是一个输入法配置方案，不是输入法本身。

`Rime` 是个输入法内核，在它的基础之上，又出现了涵盖 **Windows**、**macOS**、**Linux**、**iOS**、**Android** 五个常用操作系统的输入法，对应如下：

|  操作系统   | 对应的输入法 | github                                                                     |    收费状态    | 版本要求     |
|:-------:|:------:|----------------------------------------------------------------------------|:----------:|----------|
| Windows |  小狼毫   | [https://github.com/rime/weasel](https://github.com/rime/weasel)           |     免费     |          |
|  macOS  |  鼠须管   | [https://github.com/rime/squirrel](https://github.com/rime/squirrel)       |     免费     | v1.00 之后 |
| Ubuntu  |  中州韵   | [https://github.com/rime/ibus-rime](https://github.com/rime/ibus-rime)     |     免费     |          |
|   iOS   |  仓输入法  | [https://github.com/imfuxiao/Hamster](https://github.com/imfuxiao/Hamster) | 免费(高级功能收费) |          |
| Android | 同文输入法  | [https://github.com/osfans/trime](https://github.com/osfans/trime)         |     免费     |          |

所有由 `Rime` 内核开发过来的输入法都可以共用一套输入方案。  
由于五个输入平台使用的码表是一样的，所以能够在多个平台间保持同一种输入习惯，这一点对五笔输入而言尤为重要，打到最后，其实记的都是词频。

Rime…
