---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages."
originalDescription: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/api"
homepage: "https://boatraceopenapi.github.io/api/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["boatrace", "php", "api"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T07:36:11Z"
lastCommitAt: "2026-09-19T01:28:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d15644c23cb3c16f57a782e67a898adfb196d581685d59f8089a72bc4b87992e/boatraceopenapi/api"
---

</a>
</p>

---

## ⚠️ Cautions

**Please check the following before using this API.**

- **It is unofficial.** This has no relation to the BOATRACE official website or related organizations.
- **It is not real-time.** Due to periodic updates at approximately 3-minute intervals via GitHub Actions, there may be a delay of several minutes before the latest information is reflected.
- **We do not guarantee accuracy or completeness.** Due to data collection and conversion processes, there may be missing information or errors.
- **If you need official information, be sure to check the BOATRACE official website.**
- **Use at your own risk.**

---

## 📝 Overview

This API allows you to retrieve boatrace data. The data is published on GitHub Pages and provided in JSON format.

| Item | Description |
|---|---|
| Supported racetracks | All 24 nationwide locations (one day's data includes information from all venues) |
| Available data | Entry form, latest information, results |

---

## 🌐 Endpoints

Supported period: **2026-01-01 onwards**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → Year
- `YYYYMMDD` → Year, month, day
- Dates are based on Japan…
