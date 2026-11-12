---
repo: "Dynesshely/EverydayNews"
name: "EverydayNews"
description: "Archives Chinese internet hot searches (Baidu, Weibo, Bilibili) 3× daily since 2023 — a git-backed CSV dataset of 1100+ days, plus a Vue 3 app for browsing, full-text search and trend charts."
originalDescription: "Archives Chinese internet hot searches (Baidu, Weibo, Bilibili) 3× daily since 2023 — a git-backed CSV dataset of 1100+ days, plus a Vue 3 app for browsing, full-text search and trend charts."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dynesshely/EverydayNews"
homepage: "https://dynesshely.github.io/EverydayNews/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["crawler", "data", "fetcher", "network", "news", "vue3", "web"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-16T06:20:48Z"
lastCommitAt: "2026-11-12T11:36:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 87
maintainers: ["Dynesshely", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82f465a688f0aae1991acc8c5c354b1935f2123d4433212700106a7f7b5a7b98/Dynesshely/EverydayNews"
---

## Overview

**EverydayNews** is an automated archive project for Chinese internet hot-search rankings. It scrapes **Baidu Hot Search / Weibo Hot Search / Bilibili popular videos** on a daily schedule, saves each snapshot as CSV in a Git repository, then uses a frontend build script to convert the data to JSON. The result is an SPA for browsing, searching and reviewing trends.

The problem it solves is simple: hot searches are **ephemeral**. Once a ranking refreshes, there is no complete record of what trended that day, at what position, or with what heat. This project turns something that "changes every hour" into an archive that can be browsed by day.

| Item | Data |
| --- | --- |
| Collection frequency | 3 times a day (06:00 / 12:00 / 20:00 Beijing time) |
| Date coverage | Since 2023-10-16, **1124 days** archived |
| Total entries | **853,994 entries** (Baidu ~50 + Weibo ~50 + Bilibili 200 per run) |
| Data formats | Raw archive CSV, frontend data JSON |

**Main features**

- **Home overview**: cards for the three platform rankings from the latest date. Baidu and Weibo show the Top 5 for each time slot, and Bilibili shows a cover grid
- **Date browsing**: review historical…
