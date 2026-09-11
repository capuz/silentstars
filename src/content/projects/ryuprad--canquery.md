---
repo: "RyuPrad/canquery"
name: "canquery"
description: "Query Canada's open data: a unified API and web UI over open.canada.ca"
readmeQualityOk: true
url: "https://github.com/RyuPrad/canquery"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 52
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-12T03:12:01Z"
lastCommitAt: "2026-09-11T08:14:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 31
maintainers: ["RyuPrad"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aed2be2195930496f09b46cce3848148111dd5f7669a7a55af15aef2d93ee88/RyuPrad/canquery"
---

# canquery

A fast, unified query API and web interface over Canada's federal and municipal open data catalogues.

https://canquery.com

## How it works

Canada's open data catalogues are fragmented: some resources are loaded into
upstream APIs (such as CKAN's DataStore or Socrata), while most are published as static CSV, Excel, or GeoJSON files.
`canquery` unifies these into three access tiers:

| Tier | When | What happens |
|---|---|---|
| 1 - proxy | upstream API active | transparently proxy `/query` to the upstream API (cached 5 min) |
| 2 - load | tabular file <= 50 MB | streams into local PostgreSQL on demand; same `/query` response shape |
| 3 - honest fallback | anything else | metadata + the download link, labeled `file-only` (422 on `/query`) |

The catalogue combines the federal CKAN portal with a fail-closed registry of 85
municipal, regional, provincial, and territorial source definitions. Eighty-two
local sources are currently enabled, for 83 active catalogue sources including
the federal mirror. Dataset provenance and licensing stay attached per source.
A versioned Statistics Canada SGC hierarchy powers place-first discovery across
116 configured featured browse…
