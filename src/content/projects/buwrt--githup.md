---
repo: "Buwrt/githup"
name: "githup"
description: "githup is a lightweight third-party GitHub client for Android, about 350KB. It uses a WebView to host a front-end single-page app, with a native layer that adds capabilities the web cannot provide. It supports repository browsing, Issue/PR handling, Actions viewing, Release publishing, full-page translation, and cloud-built APK packaging. It also includes a silent update mechanism and a five-layer security protection system."
originalDescription: "githup是一款约350KB的轻量Android第三方GitHub客户端，采用WebView承载前端+原生层扩展能力的架构，支持仓库浏览、Issue/PR处理、Actions查看、Release发布、整页翻译、云端打包APK等功能，并配有静默更新机制与五环安全防护体系。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Buwrt/githup"
language: "JavaScript"
languages: ["JavaScript", "Java"]
languagePcts: [63, 27]
stars: 21
forks: 0
openIssues: 4
closedIssues: 18
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-16T06:27:39Z"
lastCommitAt: "2026-10-11T10:14:53Z"
lastReleaseAt: "2026-09-23T02:17:11Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 47
maintainers: ["github-actions[bot]", "Buwrt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9a4dcaa1f68195fed974fc56386ca2aefc163363cb22ead40ff14f93f75d395/Buwrt/githup"
---

# githup

A third-party GitHub client for Android. The `hup` in the name is **hub**, the GitHub you carry in your pocket.

Technically it's a bit interesting: **a WebView hosts a pure front-end single-page app, and the native layer only handles what the web can't do**, such as network requests that bypass cross-origin restrictions, the system file picker, binary uploads, and downloading and launching the installer. So the whole thing is compressed to **around 350 KB**, yet it covers browsing repositories, viewing Issues / PRs, checking Actions, publishing Releases, uploading files, and even having GitHub Actions in the cloud build an APK for you.

What each version changed is recorded in [CHANGELOG.md](https://github.com/Buwrt/githup/blob/HEAD/CHANGELOG.md) (starting from v1.1.3).

The moment the app opens, it automatically checks this repository to see whether it's the latest version. **If it's already the latest, it stays completely silent with no reaction at all. Only when a new version exists does it remind you, according to version-number rules.** You can also publish a new build without changing the version number: upload the new package and update the checksum, and users…
