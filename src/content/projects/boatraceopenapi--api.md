---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace (motorboat racing) API using GitHub Actions and GitHub Pages."
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
lastCommitAt: "2026-09-23T08:46:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/205b1254690b485a7b94174ac114dbca74f8fed90c90511c4cd695e5cdfc651e/boatraceopenapi/api"
---

⚠️ Caution

**Please confirm the following before using this API.**

- **It is unofficial.** It has no relation with the official BOATRACE website and related organizations.
- **It is not real-time.** Due to regular updates at approximately 3-minute intervals via GitHub Actions, there may be a delay of several minutes in reflecting the latest information.
- **We do not guarantee accuracy or completeness.** Due to collection and conversion, there may be missing or incorrect data.
- **If you need official information, please check the official BOATRACE website.**
- **Use at your own risk.**

---

📝 Overview

With this API, you can retrieve boatrace (motorboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Content |
|---|---|
| Supported race venues | All 24 venues nationwide (data for one day includes information from all venues) |
| Available data | Starting lineups, last-minute information, results |

---

🌐 Endpoints

Supported period: **From January 1, 2026 onwards**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → Year
- `YYYYMMDD` → Year, month, date
- Dates are based on Japan Standard Time (JST…
