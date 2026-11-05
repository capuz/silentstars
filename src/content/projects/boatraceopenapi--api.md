---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / A project that publishes a boat race (kyotei) API using GitHub Actions and GitHub Pages."
originalDescription: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/api"
homepage: "https://boatraceopenapi.github.io/api/"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [53, 35]
topics: ["boatrace", "php", "api"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T07:36:11Z"
lastCommitAt: "2026-11-05T00:21:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["boatraceopenapi[bot]", "shimomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/455702a13cc8d12d10867637dac8b9f081836ad6515045bac8be3b4d7ffc00a1/boatraceopenapi/api"
---

---

## ⚠️ Notice

**Please read the following before using this API.**

- **This is unofficial.** It has no relationship with the BOATRACE official website or related organizations.
- **This is not real-time.** Data is updated periodically about every 10 minutes via GitHub Actions, so there may be a delay of roughly 10–20 minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to collection and conversion constraints, missing or incorrect data may be included.
- **If you need official information, always check the BOATRACE official website.**
- **Use at your own risk.**

---

## 📝 Overview

This API provides boat race (kyotei) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported venues | All 24 venues nationwide (a single day's data includes information for all venues) |
| Available data | Racecards, just-before information, results |

---

## 🌐 Endpoint

Supported period: **From 2026-01-01 onward**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year, month, and day
- Dates are based on Japan Standard Time…
