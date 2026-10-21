---
repo: "moonbai/MiMarketPurify"
name: "MiMarketPurify"
description: "An app store ad-removal and optimization enhancement module for Xiaomi's app store, built on the callng/NewFuckMarketAds source code with AI-added feature controls and other features."
originalDescription: "基于callng/NewFuckMarketAds源码使用AI添加功能控制及其他功能的应用商店去广告、优化增强模块"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/moonbai/MiMarketPurify"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-09-14T00:17:54Z"
lastCommitAt: "2026-10-21T08:48:36Z"
lastReleaseAt: "2026-10-06T00:27:12Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["ci-bot", "moonbai"]
openGraphImageUrl: "https://opengraph.githubassets.com/4508c388f52ef0513ac4e8abf7a28827d26cba66784da25283d114c2910a66d2/moonbai/MiMarketPurify"
discussionCount: 3
---

# Mi Market Purify

> An LSPosed module for purifying and enhancing the Xiaomi app store, based on `callng/NewFuckMarketAds` and refactored and extended with AI assistance.

- **License**: GPL-3.0
- **Target**: Xiaomi app store (`com.xiaomi.market`), effective only within the app store process
- **Network behavior**: The module itself has no background networking and no reporting. The only network request point is the GitHub Releases request initiated by “About page → Check for updates”. It is sent only when the user actively clicks, and there is no reporting behavior.

---

## Feature Overview

### Ad Purification
- Splash screen ads
- Ad / recommendation popups when switching to the foreground
- Home feed ads (video / app recommendations, hot-word bar)
- Search suggestions / search page / search result recommendations
- App upgrade page and download page recommendations
- App detail page ads, comment section and recommendation slots, assembled recommendations, bottom multi-button promotion bar, and ad lists in the browser download popup
- Ads / promotional cards on ranking screens
- Cloud-controlled promotion slots in the home top bar (“Watch Drama”, “Short Drama”, etc.,…
