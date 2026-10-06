---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace (speedboat racing) API using GitHub Actions and GitHub Pages."
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
lastCommitAt: "2026-10-06T10:41:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82ff9c746dc5df3ba400d48a1d2ec934089a43230fc0d3bcd9fc51fd43303514/boatraceopenapi/api"
---

---

⚠️ Cautions

**Please confirm the following before using this API.**

- **It is unofficial.** It has no relation to the official BOATRACE website or related organizations.
- **It is not real-time.** Due to periodic updates at approximately 3-minute intervals via GitHub Actions, there may be a delay of several minutes before the latest information is reflected.
- **Accuracy and completeness are not guaranteed.** Due to the nature of collection and conversion, there may be missing or incorrect data.
- **If you need official information, please always check the official BOATRACE website.**
- **Use at your own risk.**

---

📝 Overview

This API allows you to retrieve boat racing (speedboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Content |
|---|---|
| Supported venues | All 24 venues nationwide (data for one day contains information for all venues) |
| Available data | Starter list, last-minute information, results |

---

🌐 Endpoints

Supported period: **From January 1, 2026 onwards**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → Year
- `YYYYMMDD` → Year month day
- Dates are based on…
