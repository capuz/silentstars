---
repo: "yumu-bot/yumu-bot"
name: "yumu-bot"
description: "YumuBot main program repository"
originalDescription: "YumuBot 的主程序仓库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yumu-bot/yumu-bot"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [92]
stars: 32
forks: 6
openIssues: 6
closedIssues: 37
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-08-07T13:46:41Z"
lastCommitAt: "2026-07-14T05:53:39Z"
lastReleaseAt: "2025-10-07T02:05:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["YumeMuzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9513aa535aaf27fb3757ed20558ed2ee82221ee962c0ec4efbc79b8788fdad81/yumu-bot/yumu-bot"
discussionCount: 0
---

# Yumubot

*Bot backend that connects to osu! and processes data*

## Running

### Download jar package

Visit [release](https://github.com/yumu-bot/yumu-bot/releases) to download the latest version of the jar package.

### Runtime Environment

#### Required

- JDK 21
  - Or a higher version that supports virtual threads
  - Target Kotlin version is 2.3
  - For commits before 260228, Kotlin 2.0 is used
  - If you want to test and run an earlier version, you may need JDK 17 (Kotlin is not required)
- PostgreSQL
  - Minimum 15, the newer the better

#### Optional

Common pitfalls you will inevitably encounter

- Redis database
  - If you haven't installed Redis, please comment out all @Cacheable (because application.yaml configuration options are ineffective)
  - Change IdempotentService to a simple Caffeine implementation
- rosuPP local calculation
  - If you haven't obtained rosu-pp-v0.4.0, go to OsuCalculateApiService.kt and change LOCAL to false
  - Why aren't these written in the configuration file? I don't know. I can't run it locally.

### Configuration File

The project is developed using Spring Boot, and the default file configuration is in…
