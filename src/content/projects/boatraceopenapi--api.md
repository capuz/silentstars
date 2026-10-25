---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / A project for publishing a boatrace (motorboat racing) API using GitHub Actions and GitHub Pages."
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
lastCommitAt: "2026-10-25T02:48:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a4b69fd3cfd0653beea9b30b211144e13401de7967fd4ecf3918385f291230/boatraceopenapi/api"
---

---

## ⚠️ Notices

**Please review the following before using this API.**

- **Unofficial.** This API is in no way affiliated with the BOATRACE official website or related organizations.
- **Not real-time.** Data is updated periodically at about 3-minute intervals via GitHub Actions, so there may be a delay of several minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to collection and conversion processes, missing or incorrect data may be included.
- **If you need official information, always check the BOATRACE official website.**
- **Use at your own risk.**

---

## 📝 Overview

This API provides access to boatrace (motorboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported venues | All 24 venues nationwide (one day's data includes information for all venues) |
| Available data | Racecards, pre-race information, results |

---

## 🌐 Endpoint

Supported period: **From January 1, 2026 onward**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year, month, and day
- Dates are based on Japan…
