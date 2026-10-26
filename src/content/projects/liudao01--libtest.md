---
repo: "liudao01/LibTest"
name: "LibTest"
description: "Developer helper library. Features: 1. View network requests and response parameters 2. Collect crashes 3. Switch server IP."
originalDescription: "开发人员帮助库  实现: 1.查看网络请求 返回参数 2. 收集carsh 3 .切换服务器ip"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liudao01/LibTest"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["gradle"]
stars: 13
forks: 8
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-02-20T10:54:26Z"
lastCommitAt: "2026-10-26T09:18:03Z"
lastReleaseAt: "2017-03-14T07:45:02Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 46
maintainers: ["cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/82da84329a5ce777945d663d9e0d3dfa7a0539ff9b116a1a5913475e28bb95d4/liudao01/LibTest"
---

# LibTest

Android debugging tool library: view network requests in a floating window, collect crashes, and switch server IP. It helps developers self-check and is also useful for sharing request data with backend colleagues.

**Latest version**: Click the JitPack badge above to view it. The current documentation examples use `v1.6.3`.

## Demo

## Feature Overview

| Feature | Description |
| --- | --- |
| Network request viewing | Floating window shows request URL, method, response, etc. |
| Crash collection | Captures exception information during debugging |
| IP switching | Quickly switch between multiple test/production environment addresses |

The Release build uses the `mylibrary-no-op` no-op implementation, so debug code is not included in the production package.

---

## Quick Start

### 1. Add the repository

Root `build.gradle`:

```gradle
allprojects {
    repositories {
        // ...
        maven { url 'https://jitpack.io' }
    }
}
```

### 2. Add the dependency

Module `build.gradle`:

```gradle
dependencies {
    debugImplementation 'com.github.liudao01.LibTest:myLib:v1.6.3'
    releaseImplementation 'com.github.liudao01.LibTest:mylibrary-no-op:v1.6.3'
}
```

If…
