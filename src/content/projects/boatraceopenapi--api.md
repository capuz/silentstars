---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace (powerboat racing) API using GitHub Actions and GitHub Pages."
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
lastCommitAt: "2026-09-20T08:46:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a8aa17070b77867ba4b4093485f84c9b8772bbaa637caf38ea78f53cf01e904/boatraceopenapi/api"
---

⚠️ Important Notes

**Please check the following before using this API.**

- **This is unofficial.** It has no relation to the official BOATRACE website or related organizations.
- **Not real-time.** Updates occur approximately every 3 minutes via GitHub Actions, so there may be a delay of several minutes before the latest information is reflected.
- **We do not guarantee accuracy or completeness.** Due to collection and conversion, there may be missing or incorrect information.
- **If you need official information, please check the official BOATRACE website.**
- **Please use at your own risk.**

---

## 📝 Overview

This API allows you to retrieve boatrace (powerboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Details |
|---|---|
| Supported Racetracks | All 24 nationwide racetracks (data for one day includes information from all racetracks) |
| Available Data | Starting lineup, Pre-race information, Results |

---

## 🌐 Endpoints

Coverage period: **From January 1, 2026 onwards**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
- `YYYYMMDD` → year-month-day
- Dates are based on Japan…
