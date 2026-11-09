---
repo: "XiaoliChan/hatstack"
name: "hatstack"
description: "BlackHat scrapy for download all the pdf file"
readmeQualityOk: true
url: "https://github.com/XiaoliChan/hatstack"
homepage: "https://xiaolichan.github.io/hatstack/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 31
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-08-12T03:52:03Z"
lastCommitAt: "2026-11-09T03:32:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 61
maintainers: ["XiaoliChan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b76cac282e17a77a64d6f052d4fa8af13bcff8f3e9a915ba86caa383d6aed51/XiaoliChan/hatstack"
---

# hatstack

**Every security conference, one search box.**

A searchable index of security-conference archives: talk titles, speakers,
abstracts, and official slide / whitepaper / video links — Black Hat, DEF CON,
CCC, USENIX Security and more, from 1984 to today, in one page.

**Live site:** <https://xiaolichan.github.io/hatstack/>

## What's indexed

| conference | span | channel | status |
|---|---|---|---|
| Black Hat (US/EU/Asia) | 1997– | Wayback Machine (≤2025) + live capture (2026–) | ✅ |
| DEF CON (+ villages) | 1993– | `media.defcon.org` static autoindex | ✅ |
| CCC family (Congress/Camp/GPN/EH/MRMCD/DS/FiffKon/DIVOC) | 1984– | `api.media.ccc.de` JSON API | ✅ |
| USENIX Security | 2015– | static listing pages | ✅ |
| OffensiveCon | 2020– | static speaker pages | ✅ |
| Red Team Village | — | SPA render (Playwright) | 🔄 parser tuning |
| x33fcon | 2017– | SPA render (Playwright) | 🔄 parser tuning |
| Troopers / Nullcon / hack.lu / HITB / small cons / BSides family | — | — | 📋 roadmap |

Monthly GitHub Actions runs refresh everything and commit the dataset;
partial runs merge into the committed dataset (never wipe).

## How it works

```
conference sites ──(one adapter…
