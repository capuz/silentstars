---
repo: "zaneGittins/bifract"
name: "bifract"
description: "Self-hosted, open source SIEM built on ClickHouse"
readmeQualityOk: true
url: "https://github.com/zaneGittins/bifract"
homepage: "https://docs.bifract.io"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [67, 23]
topics: ["clickhouse", "detection-engineering", "dfir", "log-management", "siem", "sigma", "threat-hunting", "observability"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-03-11T02:58:48Z"
lastCommitAt: "2026-11-06T02:44:27Z"
lastReleaseAt: "2026-11-01T23:15:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["zaneGittins", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f51f273fa99bf88f2be404185ab60025f867a5fafa712d6d12af25f3891c7f4d/zaneGittins/bifract"
---

Bifract is an open source SIEM you run on your own infrastructure. Logs are stored and searched in ClickHouse and archived to your object storage as Parquet. On top of that it adds what generic log tools leave out: process provenance graphs, behavioral baselines, and collaborative investigation, all driven by a pipe-based query language built for analysts. There are no license keys or feature gates.

## Try It

Run Bifract in your browser with [Lab 001](https://labs.bifract.io/001/), a recorded intrusion, already loaded, nothing to install:

See [Try Bifract in Codespaces](https://docs.bifract.io/getting-started/codespaces/) for what is loaded and what to try.

## Quick Start

The setup wizard installs Bifract on a single Linux host, handling SSL, passwords, Docker Compose, and database initialization:

```bash
curl -sfL https://docs.bifract.io/install.sh | sh
```

Read [the script](https://docs.bifract.io/install.sh) first if you'd rather. Upgrade an existing install with `sudo bifract --upgrade`.

It needs Linux (amd64 or arm64) with Docker Compose. 4 cores and 8 GB of RAM handle about 10 GB of logs a day; see [hardware by ingest…
