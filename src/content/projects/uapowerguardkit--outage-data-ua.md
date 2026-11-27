---
repo: "uapowerguardkit/outage-data-ua"
name: "outage-data-ua"
description: "Public repository of scheduled power outage data in Ukraine."
originalDescription: "Публічне сховище даних про планові відключення електроенергії в Україні."
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/uapowerguardkit/outage-data-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 107
forks: 11
openIssues: 2
closedIssues: 10
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-11-27T12:57:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 44
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d33a44ca152c98a182b494c0c4cd8e8fc25a7b72ff7fec4f4dc3542b4c8b22/uapowerguardkit/outage-data-ua"
---

# outage-data-ua

Public repository and tools for automatic collection, parsing, HTML visualization, and automatic generation of PNG images of scheduled and emergency electricity outage charts in Ukraine.

The project retrieves data from public web pages of energy providers and stores it as JSON "as is" in the `data/` directory. This data is then rendered with a fixed HTML template and converted into PNG images, which are saved to `images/<region>/gpv-x-x.png`.

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
  "attention": { "text": "..." },
  "lastUpdateStatus": { "status": "parsed", "ok": true, "code": 200, "message": null, "at": "2025-11-06T11:41:56.430Z", "attempt": 5 },
  "meta": { "schemaVersion": "1.0.0", "contentHash": "...", "attentionHash": "..." }
}
```
