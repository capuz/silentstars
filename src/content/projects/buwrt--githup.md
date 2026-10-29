---
repo: "Buwrt/githup"
name: "githup"
description: "githup is a lightweight third-party GitHub client for Android, about 350 KB in size. It uses a WebView to host a front-end app with native-layer extensions, and supports repository browsing, Issue/PR handling, Actions viewing, Release publishing, full-page translation, and cloud APK packaging. It also includes a silent update mechanism and a five-layer security system."
originalDescription: "githup是一款约350KB的轻量Android第三方GitHub客户端，采用WebView承载前端+原生层扩展能力的架构，支持仓库浏览、Issue/PR处理、Actions查看、Release发布、整页翻译、云端打包APK等功能，并配有静默更新机制与五环安全防护体系。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Buwrt/githup"
language: "JavaScript"
languages: ["JavaScript", "Java"]
languagePcts: [57, 35]
stars: 79
forks: 1
openIssues: 3
closedIssues: 26
watchers: 6
contributors: 5
recentReleases: 10
createdAt: "2026-09-16T06:27:39Z"
lastCommitAt: "2026-10-29T21:25:08Z"
lastReleaseAt: "2026-09-23T02:17:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 37
maintainers: ["Buwrt", "github-actions[bot]", "aeroheaven"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed5c9d47bad37ad908fad0dce91cf9808bd7ce15352d1e2b2e5d44f694adfa8/Buwrt/githup"
---

# githup

A third-party GitHub client for Android. The `hup` in the name is **hub**, which is your GitHub in your pocket.

Technically, it's a bit interesting: **a WebView hosts a pure front-end single-page application, and the native layer only handles what the web can't do**, such as bypassing cross-origin restrictions for network requests, using the system file picker, binary uploads, and downloading and launching the installer. As a result, the whole thing is compressed to **around 350 KB**, yet it covers browsing repositories, viewing Issues / PRs, checking Actions, publishing Releases, uploading files, and even having GitHub Actions in the cloud build an APK for you.

What changed in each version is recorded in [CHANGELOG.md](https://github.com/Buwrt/githup/blob/HEAD/CHANGELOG.md) (starting from v1.1.3).

When the app opens, it automatically compares itself with this repository to check whether it is the latest version: **if it is already the latest, it stays completely silent and shows no reaction at all; only when a new version exists does it remind you, according to version-number rules.** You can also publish a new build without changing the version number. Upload the…
