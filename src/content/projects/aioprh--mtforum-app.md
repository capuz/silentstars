---
repo: "Aioprh/mtforum-app"
name: "mtforum-app"
description: "MT论坛 Flutter native client (Discuz mobile page parsing)"
originalDescription: "MT论坛 Flutter 原生客户端（Discuz mobile 解析）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Aioprh/mtforum-app"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-25T19:28:02Z"
lastCommitAt: "2026-10-31T07:46:03Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 52
maintainers: ["Aioprh", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f07a75fa5c5910eb76a0b2786e49d32683886397dd69305123ec02e554ed5c2/Aioprh/mtforum-app"
---

# MT论坛 Client

Flutter native client for MT论坛 (bbs.binmt.cc). Based on parsing Discuz mobile pages; does not wrap a WebView.

## Features

- Home feed: Latest / Replies / Hot / Featured, official announcements
- Forum categories and forum topic lists
- Post details: native rich text rendering, floor pagination, image viewing, replies, favorites, sharing
- Notifications: My posts / Forum interactions / System notices / App notices; notifications link directly to posts, users, or private messages
- Login, search, posting
- Me: profile, my topics / replies / favorites, my follows / my followers, theme switching, about
- Local persistence of cookies; pure Dart implementation of the site's `acw_sc__v2` security check

## Directory structure

```
lib/
  core/       configuration, HTTP session, WAF solving, themes
  data/       models and Discuz page parsing
  state/      global state
  ui/pages/   pages
  ui/widgets/ common components and post HTML rendering
```

## Local build

```bash
flutter pub get
flutter build apk --release              # universal package
flutter build apk --release --target-platform android-arm64  # single arm64 architecture
```

Output is located in…
