---
repo: "zhwen2703-hash/kaoyan-recommendation-platform"
name: "kaoyan-recommendation-platform"
description: "Real-time data and school-selection analysis platform for 408 graduate-entrance-exam schools and majors"
originalDescription: "考研408院校专业实时数据与择校分析平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhwen2703-hash/kaoyan-recommendation-platform"
homepage: "https://kaoyan-recommendation-platform.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 35
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-12T03:12:12Z"
lastCommitAt: "2026-10-21T17:31:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abbd89394f132d43f852a2940118c139ea36ebbf8e929818289fcd6c5617831b/zhwen2703-hash/kaoyan-recommendation-platform"
---

# National Postgraduate Admissions Unit Real-Time Data Platform

Project directory: `E:\考研推荐平台-真实数据版`

## Data Authenticity Principles

- The admissions unit directory comes from the institution database of the China Graduate Admissions Information Network (中国研究生招生信息网): https://yz.chsi.com.cn/sch/
- The current official snapshot contains 939 master's admissions units.
- Each record retains the official source link and sync time.
- Enrollment numbers, applicant numbers, re-exam cutoff lines, and similar figures that could not be parsed from official announcements are shown as “Not disclosed” and no estimated values are generated.

## Real-Time Update Mechanism

- `npm run sync:data`: immediately re-fetches all pages from the graduate admissions website and atomically updates the local snapshot.
- `POST /api/sync`: triggered by clicking “立即同步最新数据” (“Sync latest data now”) on the website, forcing a refresh.
- `/api/schools`: reads the snapshot; if the snapshot is older than 6 hours, it automatically re-syncs.
- The API returns `Cache-Control: no-store`, so the frontend does not use cached responses from earlier API calls.
- When the 408 snapshot is older than 1 hour, the query…
