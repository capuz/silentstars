---
repo: "sudoevolve/aino-player"
name: "aino-player"
description: "Minimal interface, multi-source music. Windows · Linux"
originalDescription: "极简界面，多源音乐。Windows · Linux"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sudoevolve/aino-player"
homepage: "https://sudoevolve.github.io/aino-player/"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["apt", "audio-player", "bilibili", "cpp", "cross-platform", "desktop-app", "ffmpeg", "lightweight", "linux", "lx-music"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-11T15:07:11Z"
lastCommitAt: "2026-11-23T12:23:27Z"
lastReleaseAt: "2026-11-14T10:00:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["FarnaHerry", "sudoevolve"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f63a79611563600faa510fef15773531a20dcd06e1d67f4ac9becdc4ca02081/sudoevolve/aino-player"
fundingLinks: ["CUSTOM:https://ifdian.net/a/sudoevolve"]
---

*The interface shows sample tracks for illustration only and does not represent platform recommendations.*

## What it can do

- **Discovery and search**: NetEase Cloud Music daily recommendations, trending searches, and popular playlists; QQ, Kuwo, Kugou, and Migu also provide their own trending searches and playlists; Bilibili supports search and multi-part (分 P) videos; all five platforms can search online playlists.
- **Two stream sources**: third-party source scripts (`sources/*.js`, no login required) and built-in interfaces (`providers/*.js` plus built-in, login supported), managed separately on the 'Sources' page.
- **Third-party sources**: compatible with some LX script APIs (embedded QuickJS). NetEase / QQ / Kuwo / Kugou / Migu each show their status separately, and individual scripts can be tested. A silent speed test runs once at startup. Smart switching prefers available and fast sources on the same platform. When it is off, one fixed source is chosen based on test results and is not switched automatically when a single track fails.
- **Updatable scripts**: platform search and discovery are unified in `providers/*.js`, embedded by default.
