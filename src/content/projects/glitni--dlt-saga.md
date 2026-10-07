---
repo: "Glitni/dlt-saga"
name: "dlt-saga"
description: "Config-driven data ingestion and SCD2 historization framework built on dlt"
readmeQualityOk: true
url: "https://github.com/Glitni/dlt-saga"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 1
closedIssues: 200
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-20T10:27:17Z"
lastCommitAt: "2026-10-07T10:30:52Z"
lastReleaseAt: "2026-06-10T14:08:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["grindheim", "troyel", "larssnek"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ad5565e6d659f6b1e34c480bddae32e0e1743f56a42e0681f17d315918324ff/Glitni/dlt-saga"
discussionCount: 1
---

# dlt-saga

Config-driven data ingestion and historization framework, built on [dlt](https://dlthub.com/).

## Why dlt-saga?

[dlt](https://dlthub.com/) is an excellent Python library for building data pipelines.
dlt-saga adds the **operational layer** that teams need to run dlt at scale:

| What you get | How |
|---|---|
| **Zero-code pipelines** | Drop a YAML file in `configs/` — no Python needed for common sources |
| **SCD2 historization** | `write_disposition: append+historize` turns any snapshot table into a full change history with `_dlt_valid_from` / `_dlt_valid_to` |
| **Docs & classification in the warehouse** | Declare `description` and `classification` (e.g. `[pii]`) on tables/columns; saga writes and reconciles them onto the destination (`persist_docs`) |
| **dbt-style selectors** | `saga ingest --select "tag:daily,group:api"` — union, intersection, glob patterns |
| **Multi-environment profiles** | `profiles.yml` with dev/prod targets, service account impersonation, per-environment datasets |
| **Plugin architecture** | Register custom sources and destinations via `packages.yml` or Python entry points — no framework fork needed |
| **Cloud-agnostic** | BigQuery…
