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
lastCommitAt: "2026-10-06T10:42:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["renovate[bot]", "joker1007"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1962ab6306c06167b6dea2c71a44b676d618e688734816d427940878df865e7/joker1007/bookwall"
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
