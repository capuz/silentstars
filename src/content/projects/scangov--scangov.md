---
repo: "ScanGov/scangov"
name: "scangov"
description: "Government digital experience monitor"
readmeQualityOk: true
url: "https://github.com/ScanGov/scangov"
homepage: "https://scangov.org"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [49, 34]
topics: ["government", "websites"]
stars: 18
forks: 4
openIssues: 4
closedIssues: 352
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-01-11T00:31:11Z"
lastCommitAt: "2026-11-16T04:23:25Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 71
maintainers: ["lukefretwell", "aaronhans"]
openGraphImageUrl: "https://opengraph.githubassets.com/57e426a241d7adb708ccca53b1f12fe65f0c1ddf0117d4d67e90a79c2560306d/ScanGov/scangov"
discussionCount: 2
---

# Project ScanGov

## About

[Project ScanGov](https://standards.scangov.org) is a digital experience monitor.

## Data

Audit data is committed to the repo at `public/data/myscangov_homepage_audits.json`. The build uses this file directly.

To refresh the data, run the fetch script with the `SCANGOV_HASH_SECRET` environment variable (find the value in the closed auditor repo):

```
SCANGOV_HASH_SECRET='...' node scripts/fetch-auditor-data.js
```

The fetch script pulls from the auditor API, filters incomplete records, validates state coverage, and overwrites the data file. Commit the updated file to deploy new data.

If `SCANGOV_HASH_SECRET` is not set, the build skips the fetch and uses the committed data file.

The higher education cohort is defined by `_data/edu_institutions.csv` (plus any `.edu` urlkey), a copy of the auditor repo's `scripts/data/edu_institutions.csv`. That file also carries each institution's IPEDS metadata (state, control, type, system, metro, lists, NCAA conference), which drives the education hub and the per-state, system, metro, list and conference pages under `/rankings/edu/`. Rebuild it in the auditor repo (`node scripts/build-edu-institutions.mjs`)…
