---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "Public repository of data on planned power outages in Ukraine."
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
lastCommitAt: "2026-10-01T10:23:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/286d97ba2ce7dea1a33ac112e4ba384e1e36fc0ac95629dbe3c5d8befcab4b99/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, visualization (HTML), and automatic generation of PNG images of charts for planned/emergency power outages in Ukraine.

The project receives data from open web pages of suppliers and stores it in JSON 'as is' in the `data/` directory. Then this data is displayed in a fixed HTML template and converted to PNG images, which are stored in `images/<region>/gpv-x-x.png`.

---

## Data Format

Each region is stored in a file `data/<region>.json`. Basic structure (shortened):

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

- `preset` — planned power outages for the week for each group (weekly template). Stored 'as is', without structure normalization.
- `fact` — actual/emergency power outages for today and tomorrow for each group. Also…
