---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "Public repository of scheduled power outage data in Ukraine."
originalDescription: "Публічне сховище даних про планові відключення електроенергії в Україні."
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/Baskerville42/outage-data-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 92
forks: 9
openIssues: 1
closedIssues: 8
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-11-08T14:13:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbd499baf34d4fb927e2f155dc4b2932f2e083a57ffae4b94187d985d3a9502a/Baskerville42/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatically collecting, parsing, visualizing (HTML), and generating PNG images of scheduled and emergency power outage schedules in Ukraine.

The project fetches data from public web pages of providers and stores it as JSON "as is" in the `data/` directory. This data is then rendered in a fixed HTML template and converted into PNG images, which are saved to `images/<region>/gpv-x-x.png`.

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

- `preset` — scheduled outages for the week for each group (weekly template). Stored "as is", without normalizing the structure.
- `fact` — actual/emergency outages for today and tomorrow for each group. Also…
