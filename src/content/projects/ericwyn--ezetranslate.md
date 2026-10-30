---
repo: "Ericwyn/EzeTranslate"
name: "EzeTranslate"
description: "A cross-platform translation utility written in Go for Windows and Linux, so you don't have to keep installing translation extensions in Chrome, IDEs, or Chrome\\IDE\\PDF tools..."
originalDescription: "利用 go 实现的一款 Windows 和 Linux 下通用的翻译小工具, 避免不厌其烦的在 chrome\\IDE\\PDF 工具上安装翻译拓展..."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ericwyn/EzeTranslate"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["translate", "translate-toolkit", "google-translate", "youdao-fanyi", "baidu-fanyi", "baidu-translate", "translate-api"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-13T02:53:54Z"
lastCommitAt: "2026-10-30T10:22:14Z"
lastReleaseAt: "2026-05-18T08:02:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 41
maintainers: ["Ericwyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e4b2c88c1992a933117f694d75bd56060839e66cf6936a89c40d01601d73817/Ericwyn/EzeTranslate"
---

# EzeTranslate

A small translation tool written in Go that works on both Linux and Windows (I've been using it on Ubuntu all the time myself).

No more tedious installing of translation extensions in Chrome, IDEs, or PDF tools...

In addition, code comments get special formatting when translated.

Release log: [Release Log](https://github.com/Ericwyn/EzeTranslate/blob/HEAD/RELEASE_LOG.md)

## 1. Features
- Pure Golang implementation, with the GUI built on [Fyne](http://github.com/fyne-io/fyne)
  - Goodbye, Electron!
- Supports multiple translation APIs, easy to switch between
  - Supports the Baidu Translate API
    - Requires configuring Baidu API parameters in the settings
  - Supports the Google Translate API
    - No API parameters needed, but you need to solve network access issues
    - Supports setting a custom Google Translate address (you can build a JS proxy to access it)
    - Supports setting an HTTP proxy to solve access problems
  - Supports the Youdao Translate API
    - Requires configuring Youdao API parameters in the settings
- Formats code comments
  - Removes symbols such as `//` `/*` `#`
  - Removes line breaks, extra spaces, etc.
  - Translates camelCase…
