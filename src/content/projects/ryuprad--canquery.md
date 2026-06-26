---
repo: "RyuPrad/canquery"
name: "canquery"
description: "Query Canada's open data: a unified API and web UI over open.canada.ca"
url: "https://github.com/RyuPrad/canquery"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-12T03:12:01Z"
lastCommitAt: "2026-06-26T06:45:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 30
maintainers: ["RyuPrad"]
openGraphImageUrl: "https://opengraph.githubassets.com/66ddd92c407dd2481ca26e7620a180b7d7df703dfc8d5595fd8747feb30bcc70/RyuPrad/canquery"
---

# canquery

One consistent query API + web UI over the whole of Canada's open data portal.

**Live:** https://canquery.com

[open.canada.ca](https://open.canada.ca/data/) catalogues ~50,000 datasets, but only
~1,000 resources are loaded into CKAN's DataStore and therefore queryable through the
official `datastore_search` API. The other ~98% are bare file downloads. **canquery**
makes the whole catalogue feel queryable through one endpoint:

| Tier | When | What happens |
|---|---|---|
| 1 - proxy | resource has `datastore_active: true` | upstream `datastore_search` is proxied and cached (5 min TTL) |
| 2 - ingest | it's a CSV under the caps | `POST /ingest` streams it into our Postgres `store` schema; the same `/query` endpoint then serves it locally - **identical response shape** |
| 3 - honest fallback | anything else | metadata + the download link, labeled `file-only` (422 on `/query`) |

The catalogue itself (bilingual titles, notes, keywords, organizations) is mirrored
into Postgres by sync scripts and searched with a generated tsvector (English + French).

## Layout

```
server/   Express 5 API + pipelines (routes → controllers → services → db, no ORM)
client/   React 19 +…
