---
repo: "sascio/MyBridge"
name: "MyBridge"
description: "Open-source media client for Android and iOS. Your Media, Your Way."
readmeQualityOk: true
url: "https://github.com/sascio/MyBridge"
homepage: "https://streambridgeapp.pages.dev"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["android", "ios", "kotlin-multiplatform", "media-library", "media-player", "open-source", "streaming"]
stars: 10
forks: 2
openIssues: 10
closedIssues: 230
watchers: 0
contributors: 35
recentReleases: 10
createdAt: "2026-08-28T02:24:38Z"
lastCommitAt: "2026-11-15T11:22:33Z"
lastReleaseAt: "2026-10-17T09:31:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["sascio", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d698f89b549780a1076c10286e32608ee310cbae3da06d37193aed6aa9db1d2/sascio/MyBridge"
discussionCount: 2
---

Android · iOS (sideload) · GPL-3.0 · version <strong>0.1.18</strong> (118)

StreamBridge is an independent media client. You connect your own catalogs, addons and
plugin sources; StreamBridge brings them together in one place with a player, a library,
watch progress, downloads and optional tracking.

It ships empty. There are no built-in catalogs, no bundled providers and no recommended
streams: what you see is what you configured. StreamBridge does not host, provide or
endorse any content. Use it only with material you are legally entitled to access.

## Highlights in 0.1.18

- **Core synchronization** — integrated the applicable Enhanced `0.6.11-beta` → `0.6.12-beta`
  source range; per-path dispositions and StreamBridge-specific resolutions are recorded in
  [`docs/SYNC-MANIFEST-0.6.12-beta.md`](https://github.com/sascio/MyBridge/blob/HEAD/docs/SYNC-MANIFEST-0.6.12-beta.md).
- **Subtitles** — preferences can be isolated per device and included in settings export/import;
  profile removal clears the associated subtitle settings. Existing subtitle appearance and
  playback behavior are retained.
- **Player** — chapter navigation and chapter-title controls cover both engines and…
