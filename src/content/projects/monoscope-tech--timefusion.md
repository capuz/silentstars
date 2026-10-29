---
repo: "monoscope-tech/timefusion"
name: "timefusion"
description: "A timeseries database created for events, logs, traces and metrics. Speaks the postgres dialect, and stores data in s3 via delta lake protocol"
readmeQualityOk: true
url: "https://github.com/monoscope-tech/timefusion"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 204
forks: 9
openIssues: 6
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-02-09T23:15:14Z"
lastCommitAt: "2026-10-29T10:36:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 34
maintainers: ["tonyalaribe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d219375fc4ebb6f79111209c274b35f04d24f6253a79fe4f850ea77b469c18b8/monoscope-tech/timefusion"
---

# TimeFusion

TimeFusion stores observability data — logs, traces, metrics, and events — as
[Delta Lake](https://delta.io/) tables on your own S3-compatible object storage,
and lets you query it over the **PostgreSQL wire protocol**. It uses
[Apache DataFusion](https://datafusion.apache.org/) for query execution and a
write-ahead log + in-memory buffer for sub-second write durability.

If you already have a Postgres client, you already have a TimeFusion client.

> **Status:** Pre-1.0. TimeFusion runs in production at
> [APIToolkit](https://apitoolkit.io), but the schema, wire behavior, and
> configuration surface can still change between releases — pin a version
> before depending on it. (The version a client sees via `SHOW server_version`
> reflects the embedded PostgreSQL-protocol layer, not TimeFusion's own.)

## Contents

- [Why TimeFusion](#why-timefusion)
- [How it works](#how-it-works)
- [Quick start](#quick-start)
- [Querying](#querying)
- [Configuration](#configuration)
- [Performance](#performance)
- [Development](#development)
- [License](#license)

## Why TimeFusion

- **Your data stays in your bucket.** Storage is plain Parquet under a Delta
  Lake transaction log in…
