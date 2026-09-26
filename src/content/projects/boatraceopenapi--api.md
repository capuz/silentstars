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
lastCommitAt: "2026-09-26T08:46:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cecaf5b57f6c98edb95afe89f13d257dfc06905e575244f71e92b306c91d022d/boatraceopenapi/api"
---

</a>
</p>

---

## ⚠️ Warnings

**Before using this API, please confirm the following content.**

- **This is unofficial.** It has no relation to the official BOATRACE website or related organizations.
- **It is not real-time.** Due to regular updates at approximately 3-minute intervals via GitHub Actions, there may be a delay of several minutes before the latest information is reflected.
- **We do not guarantee accuracy or completeness.** Due to data collection and conversion procedures, there may be missing or incorrect information.
- **If you need official information, please be sure to check the official BOATRACE website.**
- **Please use at your own risk.**

---

## 📝 Overview

This API allows you to retrieve boatrace (speedboat racing) data. The data is published on GitHub Pages and provided in JSON format.

| Item | Content |
|---|---|
| Supported Racetracks | All 24 venues nationwide (1 day of data contains information from all venues) |
| Available Data | Starting lineup / Pre-race information / Results |

---

## 🌐 Endpoints

Supported period: **January 1, 2026 onwards**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → year
-…
