---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / A project that publishes a boatrace (motorboat racing) API using GitHub Actions and GitHub Pages"
originalDescription: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/api"
homepage: "https://boatraceopenapi.github.io/api/"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [53, 35]
topics: ["boatrace", "php", "api"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T07:36:11Z"
lastCommitAt: "2026-11-11T11:21:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["boatraceopenapi[bot]", "shimomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e38c5779425e5ab890dc0dfd37073175d31e9806d6f1642c3d5172af77c1e0d/boatraceopenapi/api"
---

---

## ⚠️ Notes

**Please read the following before using this API.**

- **This is unofficial.** It has no affiliation whatsoever with the BOATRACE official website or related organizations.
- **Not real-time.** Because data is updated periodically at about 10-minute intervals via GitHub Actions, there may be a delay of roughly 10–20 minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to collection and conversion processes, missing or incorrect data may be included.
- **If you need official information, always check the BOATRACE official website.**
- **Use at your own risk.**

---

## 📝 Overview

This API provides access to boatrace (motorboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported venues | All 24 venues nationwide (one day's data includes information for all venues) |
| Available data | Race cards, pre-race information, results |

---

## 🌐 Endpoint

Supported period: **From January 1, 2026 onward**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year, month, and day
- Dates are…
