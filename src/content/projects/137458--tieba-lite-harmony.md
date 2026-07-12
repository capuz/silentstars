---
repo: "137458/tieba-lite-harmony"
name: "tieba-lite-harmony"
description: "TiebaLite · HarmonyOS NEXT Ported Version"
originalDescription: "贴吧lite · HarmonyOS NEXT 移植版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/137458/tieba-lite-harmony"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 39
closedIssues: 150
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-30T11:23:28Z"
lastCommitAt: "2026-07-12T06:17:46Z"
lastReleaseAt: "2026-07-11T11:53:14Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 96
undervaluedScore: 50
maintainers: ["137458"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a8715cb6df1309101327a9d36957d58297fae25c756213eba056c889780357/137458/tieba-lite-harmony"
---

# TiebaLite HarmonyOS Version

> Third-party Baidu Tieba client · HarmonyOS NEXT ported version

## Project Introduction

- **bundleName**: `com.isczjk.tieba`
- **Target Platform**: HarmonyOS NEXT (compatibleSdkVersion 6.1.0(23) / targetSdkVersion 6.1.1(24))
- **Source Project**: TiebaLite-4.0-dev (Android) + aiotieba-master (Python API library)
- **Migration Strategy**: Progressive Rewrite

By calling the Baidu Tieba client HTTP API with BDUSS/STOKEN credentials, core functions such as post browsing, searching, detail viewing, user homepage, liking, image viewing, nested replies, and commenting are implemented. This project is an unofficial third-party client.

## Current Progress

```
Phase 1: Infrastructure      ████████████████ 100% (Completed + Comprehensive Review and Fix)
Phase 2: Core Browsing      ████████████████ 100% (Completed + Comprehensive Review and Fix)
Phase 3: Interactive Features      ████████████████ 100% (Completed + Comprehensive Review and Fix)
  Note: The original README mentions the "My" page's like/comment list. After researching Android TiebaLite UserPage.kt, it was confirmed that this feature does not exist in the original version; the semantics…
