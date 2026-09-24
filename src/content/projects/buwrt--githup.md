---
repo: "Buwrt/githup"
name: "githup"
description: "githup is a lightweight third-party GitHub client for Android of approximately 350KB, adopting an architecture where WebView hosts the frontend and the native layer provides extended capabilities. It supports repository browsing, Issue/PR handling, Actions viewing, Release publishing, full-page translation, cloud-based APK packaging, and features a silent update mechanism with a five-ring security protection system."
originalDescription: "githup是一款约350KB的轻量Android第三方GitHub客户端，采用WebView承载前端+原生层扩展能力的架构，支持仓库浏览、Issue/PR处理、Actions查看、Release发布、整页翻译、云端打包APK等功能，并配有静默更新机制与五环安全防护体系。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Buwrt/githup"
language: "JavaScript"
languages: ["JavaScript", "Java"]
languagePcts: [68, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-16T06:27:39Z"
lastCommitAt: "2026-09-24T08:42:33Z"
lastReleaseAt: "2026-09-23T02:17:11Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 67
maintainers: ["Buwrt", "bot", "aeroheaven"]
openGraphImageUrl: "https://opengraph.githubassets.com/799ec39ebc3e0112cdbaa73a04317a8a1616a8fd04b38522741ad6b2e6b91a6e/Buwrt/githup"
---

# githup

Third-party GitHub client for Android. The `hup` in the name is **hub** — it's GitHub in your pocket.

The technical implementation is interesting: **WebView hosts a pure frontend single-page application, and the native layer only does what the web can't do** — network requests bypass CORS, system file picker, binary upload, download and launch installer. So the entire thing is compressed to around **350 KB**, yet covers browsing repositories, viewing Issues/PRs, checking Actions, publishing Releases, uploading files, and even letting GitHub Actions package APK for you in the cloud.

What changed in each version is recorded in [CHANGELOG.md](https://github.com/Buwrt/githup/blob/HEAD/CHANGELOG.md) (starting from v1.1.3).

The moment you open the software, it automatically compares with this repository to check if it's the latest version: **if it's already the latest version, it's completely silent with no response at all; only when there's a new version does it prompt based on the version number rule.** The version number doesn't need to change to release a new version — just upload the new package and update the checksum value, then users will receive a reminder the next…
