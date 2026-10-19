---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / A project that publishes a boatrace (boat race / kyotei) API using GitHub Actions and GitHub Pages."
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
lastCommitAt: "2026-10-19T09:14:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/309fa3b4f0e53c333251e5f12f93155af6dcb1b5112163247777d3fd15aea397/boatraceopenapi/api"
---

---

## ⚠️ Notes

**Please review the following before using this API.**

- **This is unofficial.** It has no affiliation with the BOATRACE official website or related organizations.
- **Data is not real-time.** Because GitHub Actions updates the data at regular intervals of about 3 minutes, there may be a delay of several minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to collection and conversion processes, missing or incorrect data may be included.
- **If you need official information, always check the BOATRACE official website.**
- **Use at your own risk.**

---

## 📝 Overview

This API provides boat race (boatrace / kyotei) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported venues | All 24 venues nationwide (one day's data includes information for all venues) |
| Available data | Race cards (starting lineups), pre-race information, results |

---

## 🌐 Endpoint

Supported period: **On or after January 1, 2026**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year, month, and day
- Dates are based…
