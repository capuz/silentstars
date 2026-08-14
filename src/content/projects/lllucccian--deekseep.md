---
repo: "lllucccian/Deekseep"
name: "Deekseep"
description: "Deekseep LSPosed: multi-API Xposed module for DeepSeek Android; Mainland 2.2.2/2.3.0 and Google Play 2.2.2."
readmeQualityOk: true
url: "https://github.com/lllucccian/Deekseep"
homepage: "https://github.com/lllucccian/Deekseep/releases/latest"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["android", "deepseek", "libxposed", "lsposed", "termux", "xposed"]
stars: 95
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-07-15T03:45:58Z"
lastCommitAt: "2026-08-14T05:12:11Z"
lastReleaseAt: "2026-08-13T15:56:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 21
maintainers: ["lllucccian"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba051e31d91e0d822739647d78e4d5e15a0127733345193f68b74b411119d4c6/lllucccian/Deekseep"
---

# Deekseep LSPosed

Deekseep is an independent LSPosed/Xposed module for the official DeepSeek
Android app. It runs in the DeepSeek process and provides an optional module
settings entry and compatibility layer. It is not made by or affiliated with
DeepSeek.

[简体中文](https://github.com/lllucccian/Deekseep/blob/HEAD/README_CN.md)

## Stable release

- [Download Open.apk](https://github.com/lllucccian/Deekseep/releases/download/v1.7.4-fix/Open.apk) — free, open-source edition without the Local API.
- [Download Closed.apk](https://github.com/lllucccian/Deekseep/releases/download/v1.7.4-fix/Closed.apk) — free, closed-source edition with the Local API.

Both editions are universal APKs for the supported domestic and Google Play
hosts. Mainland DeepSeek 2.3.6 and domestic/Google Play DeepSeek 2.3.4 are
supported. DeepSeek 2.2.0 and 2.3.0 remain usable with possible limitations;
2.3.1–2.3.3 and 2.3.5 are not supported.

## Requirements

- Android 7.0 or newer (API 24+).
- Official DeepSeek package `com.deepseek.chat`.
- Mainland DeepSeek 2.3.6 (version code 249), DeepSeek 2.3.4 (245/246),
  DeepSeek 2.3.0 (237), or DeepSeek 2.2.x.
- LSPosed/Xposed that can load the traditional Xposed…
