---
repo: "mikoto710/esj-novel-downloader"
name: "esj-novel-downloader"
description: "A Tampermonkey script for downloading ESJZone novels, supporting TXT / EPUB / HTML export and illustration embedding"
originalDescription: "用于下载 ESJZone 小说的 Tampermonkey 脚本，支持 TXT / EPUB / HTML 导出和插图嵌入"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mikoto710/esj-novel-downloader"
homepage: "https://greasyfork.org/zh-CN/scripts/562046-esjzone-%E5%85%A8%E6%9C%AC%E4%B8%8B%E8%BD%BD"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 48
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-22T04:01:51Z"
lastCommitAt: "2026-10-16T08:11:53Z"
lastReleaseAt: "2025-11-25T17:24:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["mikoto710"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb551595e0e9ef07e1cebc64bbc8da7c348dbe17e4124e2281823133865c94d/mikoto710/esj-novel-downloader"
---

# ESJ Novel Downloader

   

Simplified Chinese | [Traditional Chinese](https://github.com/mikoto710/esj-novel-downloader/blob/HEAD/README.zh-TW.md)

A Tampermonkey script for **ESJZone**.  
Supports **TXT / EPUB / HTML download**, and adapts to multiple page types (novel detail page / single chapter reading page / forum list page).

## Features

- 📚 **Multi-format export**: Full novels support TXT, EPUB, and HTML; single chapters support TXT and HTML.
- 📖 **Custom chapter selection (Beta)**: Browse the original table of contents on the detail page or forum list page, check consecutive or non-consecutive chapters, and export them as TXT, EPUB, or HTML, merged in table-of-contents order.
- ⚡ **Concurrent fetching and resumable downloads**: Supports configuring concurrency, and saves full-novel download progress via IndexedDB.
- 🛡️ **Integrity check and retry**: After downloading, checks for missing chapters and abnormal images, and automatically attempts to re-fetch abnormal content.
- 🔒 **Password-protected chapter handling**: Adapts to the site's encrypted chapters, with recognition and unlocking during full-novel downloads.
- 🖼️ **Enhanced export content**: Full-novel EPUB…
