---
repo: "BCSDLab/KOIN_ANDROID"
name: "KOIN_ANDROID"
description: ":busts_in_silhouette: \"코인(Koreatech In)-한기대 커뮤니티\""
readmeQualityOk: true
url: "https://github.com/BCSDLab/KOIN_ANDROID"
homepage: "https://play.google.com/store/apps/details?id=in.koreatech.koin"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 23
forks: 2
openIssues: 10
closedIssues: 389
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2019-12-29T08:45:27Z"
lastCommitAt: "2026-08-28T14:32:28Z"
lastReleaseAt: "2024-03-03T16:56:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["KYM-P", "kongwoojin"]
openGraphImageUrl: "https://opengraph.githubassets.com/45e5bbe26e47cc34b44b48efb45fa787f3a52a9cab1b6a7354bae89b7efb6937/BCSDLab/KOIN_ANDROID"
---

# 코인 - 한기대 커뮤니티

코인은 한국기술교육대학교 학생들을 위하여 제공하는 커뮤니티 플랫폼 서비스입니다.

[코인 - 한기대 커뮤니티 : Google Play Store 바로가기](https://play.google.com/store/apps/details?id=in.koreatech.koin&hl=ko)

[✨ BCSD 블로그와 함께 코인 프로젝트 훔쳐보기 ✨](https://blog.bcsdlab.com/introduce)

## 코인 사장님
`코인 - 한기대 커뮤니티` 앱과는 별도로 사장님들에게 직접 가게를 등록할 수 있도록 코인 사장님 앱을 제공하고 있습니다.<br>

[코인 사장님 : Google Play Store 바로가기](https://play.google.com/store/apps/details?id=in.koreatech.business&hl=ko)

## Tech Stack
- Java & Kotlin
- XML & Compose
- Jetpack AAC
- Coroutine Flow
- Multi-Module
- MVVM & MVI
- Orbit
- Retrofit2 & OkHttp3
- Gson & kotlinx.serialization
- Hilt
- Timber
- Kakao share
- Naver Map
- Google Analytics
- Firebase Crashlytics
- Firebase Cloud Message
- Firebase App Distribution

## Git Branch Strategy

```mermaid
---
title: KOIN Git Flow
---

%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true, 'mainBranchName': 'production'}} }%%
      gitGraph
        commit tag: "v1.0.0"
        branch hotfix/A
        checkout production
        branch develop
        checkout develop
        commit
        branch feature/A
        checkout feature/A
        checkout production
        checkout hotfix/A…
