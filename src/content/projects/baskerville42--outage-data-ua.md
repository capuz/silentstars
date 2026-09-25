---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "Public repository of data on scheduled electricity outages in Ukraine."
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
lastCommitAt: "2026-09-25T09:03:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78173c253919a55f78992e5a7674a7f61a6d1d9946e046bcd77f140654ba938d/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, visualization (HTML) and automatic generation of PNG images of charts of scheduled/emergency power outages in Ukraine.

The project receives data from open web pages of suppliers and stores it in JSON 'as is' in the `data/` directory. Next, this data is displayed in a fixed HTML template and converted to PNG images, which are stored in `images/<region>/gpv-x-x.png`.

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

- `preset` — scheduled outages for a week for each group (weekly template). Stored 'as is' without structure normalization.
- `fact` — actual/emergency outages for today and tomorrow for each group. Also…
