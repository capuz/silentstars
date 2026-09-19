---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "Public repository of data on scheduled power outages in Ukraine."
originalDescription: "Публічне сховище даних про планові відключення електроенергії в Україні."
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/Baskerville42/outage-data-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 55
forks: 7
openIssues: 0
closedIssues: 8
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-09-19T02:48:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/684132613a134e484f0dc128344871e46a3575bd2e987d05ac2d1938e1a1d72b/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, visualization (HTML) and automatic generation of PNG images of charts of scheduled/emergency power outages in Ukraine.

The project receives data from open web pages of suppliers and stores them in JSON 'as is' in the `data/` directory. Then these data are displayed in a fixed HTML template and converted to PNG images, which are stored in `images/<region>/gpv-x-x.png`.

---

## Data Format
Each region is stored in the file `data/<region>.json`. Basic structure (abbreviated):

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

- `preset` — scheduled power outages for a week for each group (weekly template). Stored 'as is', without structure normalization.
- `fact` — actual/emergency power outages for today and tomorrow for each group. Also…
