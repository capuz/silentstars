---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "A public repository of data on scheduled electricity outages in Ukraine."
originalDescription: "Публічне сховище даних про планові відключення електроенергії в Україні."
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/Baskerville42/outage-data-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 66
forks: 8
openIssues: 0
closedIssues: 8
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-11-02T13:38:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/baf6f0f3f0dd9d2d64fcd73119f16f1da36a62ee284c16f5158edd4dee0142df/Baskerville42/outage-data-ua"
---

# outage-data-ua

A public repository and tools for automatically collecting, parsing, visualizing (HTML), and automatically generating PNG images of scheduled and emergency electricity outage charts in Ukraine.

The project fetches data from public web pages of power suppliers and stores it as JSON "as is" in the `data/` directory. This data is then rendered with a fixed HTML template and converted into PNG images, which are saved to `images/<region>/gpv-x-x.png`.

---

## Data format
Each region is stored in a file `data/<region>.json`. Basic structure (abridged):

```json
{
  "regionId": "kyiv",
  "regionAffiliation": "м. Київ",
  "lastUpdated": "2025-11-06T11:41:56.430Z",
  "fact": { "updateFact": "06.11.2025 09:09" },
  "preset": { "updateFact": "04.11.2025 18:00" },
  "lastUpdateStatus": { "status": "parsed", "ok": true, "code": 200, "message": null, "at": "2025-11-06T11:41:56.430Z", "attempt": 5 },
  "meta": { "schemaVersion": "1.0.0", "contentHash": "..." }
}
```

- `preset` — scheduled outages for the week for each group (weekly template). Stored "as is", without structural normalization.
- `fact` — actual and emergency outages for today and tomorrow for each group. Also…
