---
repo: "soruly/trace.moe-api"
name: "trace.moe-api"
description: "API server for serving backend requests for trace.moe"
readmeQualityOk: true
url: "https://github.com/soruly/trace.moe-api"
homepage: "https://soruly.github.io/trace.moe-api/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 161
forks: 17
openIssues: 0
closedIssues: 13
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-09-27T16:55:08Z"
lastCommitAt: "2026-10-24T08:21:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["soruly", "dependabot[bot]", "Vankerkom"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f47f2bc14ab3614b586c20d1ca7182128c7084607889fb37a69a36e17586486/soruly/trace.moe-api"
fundingLinks: ["GITHUB:https://github.com/soruly", "PATREON:https://patreon.com/soruly", "CUSTOM:https://www.paypal.me/soruly/"]
---

# trace.moe-api

API server for [trace.moe](https://github.com/soruly/trace.moe)

[API Docs](https://soruly.github.io/trace.moe-api/)

### Features

- serve image search request
- crop black borders on search images
- rate limiting and user management
- serve index and database status
- store and serve compressed hash files
- distribute hash jobs to workers

### Prerequisites

- Node.js >= 22.15
- PostgreSQL 17+
- Milvus 3.0.0+
- FFmpeg
- Docker

### Install

Install Prerequisites first, then:

```bash
git clone https://github.com/soruly/trace.moe-api.git
cd trace.moe-api
npm install
```

### Getting Started

- Copy `.env.example` to `.env`
- Edit `.env` as appropriate for your setup, i.e. `VIDEO_PATH`.
- Change `TRACE_API_SALT` to a unique value of at least 32 characters.
- `docker compose up -d`
- `node server.ts`

On the first start, it will create all database tables in postgresql and create the collection in milvus.
On every start, it will scan the `VIDEO_PATH` for new video files (.mp4, .mkv, .webm or .ts) and re-scan the `VIDEO_PATH` periodically (default: every 60 seconds, configurable via `SCAN_INTERVAL`, set to `0` or `Infinity` to disable).

### Run as systemd

Put this…
