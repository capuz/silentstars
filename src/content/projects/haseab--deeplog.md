---
repo: "haseab/deeplog"
name: "deeplog"
description: "open source Toggl frontend wrapper optimized for 24 hour, minute by minute time tracking"
readmeQualityOk: true
url: "https://github.com/haseab/deeplog"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-08T09:33:44Z"
lastCommitAt: "2026-11-05T14:04:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 64
maintainers: ["haseab"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ff1e75377eb3326a5dd761734b63c1525678522193698a6fce9e2c1d3f35cdb/haseab/deeplog"
---

# deeplog
for hardcore time trackers

open source software

uses toggl in the backend

## Recording task extraction

Task extraction runs on Railway with a persistent volume, using a per-recording
filesystem ledger instead of the legacy processed timestamp. It rescans seven
days, resumes older incomplete work, and records individual Todoist deliveries.
See [TASK_EXTRACTION.md](https://github.com/haseab/deeplog/blob/HEAD/TASK_EXTRACTION.md) for volume configuration, migration,
backfills, status, and recovery. The extraction route cannot run on Vercel.

In History (`/pendant`), **Test extraction** previews candidates over an arbitrary
date range without creating Todoist tasks or adding candidates to the production
delivery ledger. It reports progress across all pages and supports stop/resume.

### Search time entries

`GET /api/time-entries/search?q=planning&from_date=2026-10-01&to_date=2026-10-31`

Send the Toggl session key in the `x-toggl-session-token` header, as with the
other time-entry endpoints. No API key is required. The route uses the Analytics
query endpoint observed in Toggl Track's Detailed report in Chrome, with its
`description contains` filter, scoped to the…
