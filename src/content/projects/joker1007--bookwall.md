---
repo: "joker1007/bookwall"
name: "bookwall"
description: "Simple Self-Hosting E-Book Shelf Server and Reader for Japanese"
readmeQualityOk: true
url: "https://github.com/joker1007/bookwall"
language: "Kotlin"
languages: ["Kotlin", "Ruby", "TypeScript"]
languagePcts: [28, 27, 26]
stars: 5
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T15:00:48Z"
lastCommitAt: "2026-09-19T01:37:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["renovate[bot]", "joker1007"]
openGraphImageUrl: "https://opengraph.githubassets.com/4693e96e801300b18f4464843f86ec616ad9d923b66a5154d9c5129bb4cfa789/joker1007/bookwall"
---

# Bookwall

E-book management with a web-based reader (Rails + React) and a companion Android reader app.

[日本語版 README はこちら / Japanese README](https://github.com/joker1007/bookwall/blob/HEAD/README-ja.md)

## Demo

A guided tour (signup → library scan → grid/list browse → CBZ reader → horizontal EPUB → vertical EPUB) recorded with Playwright. See [`docs/demo.mp4`](https://github.com/joker1007/bookwall/blob/HEAD/docs/demo.mp4) (≈1.3 min, 2.9 MB, H.264).

https://github.com/user-attachments/assets/1400a191-5fb3-4c34-a9fe-e6dc734a637e

Regenerate it with:

```sh
cd client && npm run demo:video
# Playwright outputs client/test-results/.../video.webm. Transcode it to mp4
# so GitHub's README viewer can play it inline:
ffmpeg -y -i client/test-results/tour-Bookwall-guided-tour-desktop-chromium/video.webm \
       -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -an \
       docs/demo.mp4
```

## Sub-projects

| Directory | Role | Stack |
|---|---|---|
| [`server/`](https://github.com/joker1007/bookwall/blob/HEAD/server/) | API + OPDS delivery, SQLite + Active Storage, book scanner, authentication | Rails 8.1 / Ruby 4.0 / Falcon / Thruster / SQLite (FTS5) /…
