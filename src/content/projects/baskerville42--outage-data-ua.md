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
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-07-08T05:43:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02a27e7379ddcc66332b621aedaff6a4b8c412d4f033e833ed88d4e47fa37143/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, visualization (HTML), and automatic generation of PNG images of planned/emergency power outages in Ukraine.

The project retrieves data from open web pages of suppliers and stores it in JSON "as is" in the `data/` directory. The data is then displayed in a fixed HTML template and converted into PNG images, which are stored in `images/<region>/gpv-x-x.png`.

---

## Data Format
Each region is stored in a file `data/<region>.json`. The basic structure (shortened):

```json
{
  "regionId": "kyiv",
  "regionAffiliation": "Kyiv City",
  "lastUpdated": "2025-11-06T11:41:56.430Z",
  "fact": { "updateFact": "06.11.2025 09:09" },
  "preset": { "updateFact": "04.11.2025 18:00" },
  "lastUpdateStatus": { "status": "parsed", "ok": true, "code": 200, "message": null, "at": "2025-11-06T11:41:56.430Z", "attempt": 5 },
  "meta": { "schemaVersion": "1.0.0", "contentHash": "..." }
}
```

- `preset` — planned outages for the week for each group (weekly template). Stored "as is", without normalizing the structure.
- `fact` — actual/emergency outages for today and tomorrow for each group. Also…
