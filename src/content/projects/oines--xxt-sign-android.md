---
repo: "oines/xxt-sign-android"
name: "xxt-sign-android"
description: "Xuexitong (学习通) multi-account check-in assistant (Android, pure protocol implementation, no root required): one-tap check-in/check-out covering regular, photo, QR code, location, gesture, and check-in code types, with automatic solving of slider CAPTCHAs"
originalDescription: "学习通多账号签到助手（Android，纯协议实现，无需 root）：一键签到/签退，覆盖普通、拍照、二维码、位置、手势、签到码，滑块验证码自动求解"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oines/xxt-sign-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-15T06:25:29Z"
lastCommitAt: "2026-11-13T04:29:22Z"
lastReleaseAt: "2026-11-10T00:54:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 49
maintainers: ["astral-0619", "MashiroSann", "oines"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8a1ee83b2c72d84c47329c92d76c74025323e2fd70a8ee1b24850a553e6f384/oines/xxt-sign-android"
---

# 学习通 Assistant (XXTSign)

Native Android app for logging into 学习通 with multiple accounts. Supports batch check-in, automatic video course progression, and automatic answering of chapter quizzes. **Pure protocol implementation, no root required**: it does not reuse data from the 学习通 app. Instead, it maintains the login session for each account within the app itself.

## How to use (five tabs)

Five pages at the bottom: **Accounts / Check-in / Course Videos / Quizzes / Logs**.

1. On the "Accounts" page, log in and select the account used for course videos (single selection).
2. The "Course Videos" page handles videos only: fetch courses → expand chapters (task points are checked automatically) → select chapters to process → start.
3. The "Quizzes" page handles chapter quizzes only: courses under the same account reuse the cache. Expand a course (chapter quizzes are checked automatically) → select the chapters to complete → start answering. In the top-right corner of the Quizzes page, you can switch between "Chapter Quizzes" and "Assignments".
4. Check-in is operated on the "Check-in" page, with background patrol running persistently. View logs on the "Logs" page.

Video…
