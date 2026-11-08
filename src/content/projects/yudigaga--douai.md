---
repo: "yudigaga/DouAi"
name: "DouAi"
description: "DouAi · Douyin enhancement module based on libxposed API 102"
originalDescription: "DouAi · 抖音增强模块，基于 libxposed API 102"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yudigaga/DouAi"
homepage: "https://github.com/yudigaga/DouAi/releases"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 49
forks: 10
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T05:49:13Z"
lastCommitAt: "2026-11-08T14:13:43Z"
lastReleaseAt: "2026-10-17T04:10:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 42
maintainers: ["yudigaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/d732f1e204160068f805c2efa6fe7e894ece7fef3ac56ef9d45a66697d8e0242/yudigaga/DouAi"
---

# DouAi

## 0.2.48 Official release: AI video cover recovery

**0.2.48 / 149** Fixes the cover candidate fallback and retry for manual AI chat video cards. It keeps multiple safe candidates, queues re-sends, automatically retries once, and allows manual retry if it still fails. Stopping the current reply does not cancel the cover of old messages.

This release cumulatively includes the comment AI search and parsing, work media context, follow-up question, and related video pagination improvements from 0.2.42–0.2.47. The APK is signed with the long-term release key. Local targeted tests passed; full tests and a standalone Release Lint were not run; the build's built-in vital Lint passed. User feedback reports that manual testing passed, but devices and coverage were not recorded. GitHub and LSPosed use the same APK, and each channel attaches only the APK. [Release notes](https://github.com/yudigaga/DouAi/blob/HEAD/docs/release-0.2.48.md).

## 0.2.41 Official release: Douyin 41.0.0 gesture and profile fixes

**0.2.41 / 142** Adds support for Douyin **41.0.0 / 410001 / internal build 41009900**, and fixes gesture and auto-play registration failures, local statistics neighbor…
