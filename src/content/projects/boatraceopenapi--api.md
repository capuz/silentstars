---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace (boat racing) API with GitHub Actions and GitHub Pages."
originalDescription: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/api"
homepage: "https://boatraceopenapi.github.io/api/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["boatrace", "php", "api"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T07:36:11Z"
lastCommitAt: "2026-10-24T08:08:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52cfcb107275c5327b2479c3dbc4b4b0c8f68419260ab80f2c4fd2fca7f934fe/boatraceopenapi/api"
---

---

## ⚠️ Notes

**Please review the following before using this API.**

- **This is unofficial.** It has no affiliation whatsoever with the BOATRACE official website or related organizations.
- **Not real-time.** Data is updated periodically about every 3 minutes via GitHub Actions, so there may be a delay of a few minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to collection and conversion limitations, data may contain gaps or errors.
- **If you need official information, always check the official BOATRACE website.**
- **Use at your own risk.**

---

## 📝 Overview

This API provides access to boatrace (boat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported venues | All 24 venues nationwide (one day's data includes information for all venues) |
| Available data | Race cards, pre-race information, results |

---

## 🌐 Endpoints

Supported period: **From 2026-01-01 onward**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year, month, and day
- Dates are based on Japan Standard Time (JST /…
