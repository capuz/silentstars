---
repo: "IamNewHands/SangTacReader"
name: "SangTacReader"
description: "SangTacViet (sangtacviet.vip) lightweight iOS reader, for personal study use only."
originalDescription: "SangTacViet (sangtacviet.vip) 轻量 iOS 阅读器 仅用于个人学习。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/IamNewHands/SangTacReader"
language: "JavaScript"
languages: ["JavaScript", "Swift"]
languagePcts: [54, 43]
stars: 9
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-30T08:02:07Z"
lastCommitAt: "2026-10-25T08:39:31Z"
lastReleaseAt: "2026-10-25T08:15:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["IamNewHands"]
openGraphImageUrl: "https://opengraph.githubassets.com/f797c9f6f8662d8291260dab46374885dfffbe427e05569ecf3c3e59c88b6a43/IamNewHands/SangTacReader"
---

**Chinese** | [English](https://github.com/IamNewHands/SangTacReader/blob/HEAD/README.en.md)

# SangTacReader — Unofficial iOS client for sangtacviet

Wraps the sangtacviet web version in a native iOS shell: a Capacitor 8 app that remotely loads `sangtacviet.com/app.v2.php` and supplies the native capabilities the site's frontend depends on, so the site runs in "app mode". This is exactly why the official Android version delivers the full reading experience.

The official project only publishes an Android APK. This project packages it independently and is for personal study use only.

## Features

- Book list / search / latest updates / rankings, novel details, follow / bookmarks / likes
- Chapter list and body reading (left-right paging by default, can switch to scrolling)
- Native TTS reading, starting from the line visible on screen
- Offline download: resumable, downloaded chapters skipped automatically, can pause / resume / delete
- Export to TXT / EPUB (with cover and title), via the system share sheet
- Comment and community post translation: system offline translation first, or bring your own API key
- Interface localized to Chinese (Vietnamese → Simplified Chinese); on…
