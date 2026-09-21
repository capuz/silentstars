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
lastCommitAt: "2026-09-21T09:13:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58473e53d9bb51a07ba4f7d8fd81ff4032cd56ef43cc6e6da023a53a04c20159/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, visualization (HTML) and automatic generation of PNG images of graphs of planned/emergency power outages in Ukraine.

The project collects data from open web pages of suppliers and stores them in JSON 'as is' in the `data/` directory. These data are then displayed in a fixed HTML template and converted to PNG images, which are stored in `images/<region>/gpv-x-x.png`.

---

## Data Format
Each region is stored in a file `data/<region>.json`. Basic structure (abbreviated):

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

- `preset` — planned outages for the week for each group (weekly template). Stored 'as is' without structure normalization.
- `fact` — actual/emergency outages for today and tomorrow for each group. Also...
