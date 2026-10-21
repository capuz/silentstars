---
repo: "XieShawn-XXL/kaoyan-recommendation-platform"
name: "kaoyan-recommendation-platform"
description: "Real-time data and school-selection analysis platform for 408 postgraduate programs and institutions - real-time data / precise 408 filtering / trustworthy recommendations"
originalDescription: "考研408院校专业实时数据与择校分析平台 - 实时数据 / 精准408筛选 / 可信推荐"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XieShawn-XXL/kaoyan-recommendation-platform"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-12T07:06:29Z"
lastCommitAt: "2026-10-21T17:31:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e7a7bc0dca9b037e9c1a11d4d6acd5d5962e3c20075933aa5319c2f869fe8a3/XieShawn-XXL/kaoyan-recommendation-platform"
---

# National Graduate Admissions Institutions Real-Time Data Platform

Project directory: `E:\考研推荐平台-真实数据版`

## Data Authenticity Principles

- The institution directory comes from the China Graduate Admissions Information Network (chsi) institution database: https://yz.chsi.com.cn/sch/
- The current official snapshot contains 939 master's admissions units.
- Each record keeps its official source link and sync time.
- When enrollment numbers, applicant numbers, re-exam cutoff scores, etc. have not been successfully parsed from official announcements, they are shown as “未公开” (not public). No estimated values are generated.

## Real-Time Update Mechanism

- `npm run sync:data`: immediately re-crawls all pages of the chsi network and atomically updates the local snapshot.
- `POST /api/sync`: clicking “立即同步最新数据” (sync latest data now) on the website triggers a forced refresh.
- `/api/schools`: reads the snapshot; if the snapshot is older than 6 hours, it is automatically re-synced.
- The API returns `Cache-Control: no-store`, so the frontend does not use stale interface caches.
- When the 408 snapshot is older than 1 hour, the query interface automatically starts a full background…
