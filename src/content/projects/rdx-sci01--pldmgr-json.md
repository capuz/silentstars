---
repo: "RDX-Sci01/PLDMGR_JSON"
name: "PLDMGR_JSON"
description: "Custom Payload Repositories for PS5 Payload Manager"
readmeQualityOk: true
url: "https://github.com/RDX-Sci01/PLDMGR_JSON"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T01:39:26Z"
lastCommitAt: "2026-10-31T19:01:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]", "RDX-Sci01"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ba6af271bc93f1f2aca90d801804bc274753fdb637960e79f2776988ee5fa18/RDX-Sci01/PLDMGR_JSON"
---

# PLDMGR_JSON

Custom payload repository for PS5 Payload Manager.

Payload sources are automatically refreshed every 2 hours using GitHub Actions. The generated `payloads.json` contains validated payload download URLs and metadata.

## Adding this source

Open the Payload Manager dashboard on your PS5:

1. Go to **Settings → Manage Sources**
2. Click **Add Source**
3. Paste **one** of the following URLs:

### GitHub Raw

```text
https://raw.githubusercontent.com/RDX-Sci01/PLDMGR_JSON/main/payloads.json
```

### GitHub Pages

```text
https://rdx-sci01.github.io/PLDMGR_JSON/payloads.json
```

These are alternative URLs pointing to the same generated catalog. You normally only need to add one.

---

## For maintainers

### Adding a payload

Edit [`links.txt`](https://github.com/RDX-Sci01/PLDMGR_JSON/blob/HEAD/links.txt).
