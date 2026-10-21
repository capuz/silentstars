---
repo: "s2-streamstore/y-s2"
name: "y-s2"
description: "A Cloudflare worker to create durable and unlimited collaborative rooms using Yjs and S2"
readmeQualityOk: true
url: "https://github.com/s2-streamstore/y-s2"
homepage: "https://s2.dev/demos/y-s2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["cloudflare", "crdt", "streams", "yjs"]
stars: 51
forks: 3
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-08-22T04:21:05Z"
lastCommitAt: "2026-10-21T20:00:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 22
maintainers: ["infiniteregrets"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90179253820733fb8c988affef9a93f32f91726474db240e49979bee5e50b06/s2-streamstore/y-s2"
---

## Overview

Y-S2 is a Cloudflare Worker that provides real-time collaborative document editing using Yjs with S2.dev as the distribution channel and an R2 bucket as the storage provider. It provides scalable WebSocket-based document synchronization where document updates are made durable on an S2 stream and distributed to connected clients and reactively persisted to the R2 bucket. 

## Getting Started

### Prerequisites

- Cloudflare account with Workers enabled.
- S2.dev account, a basin with `Create stream on append/read` enabled, and a scoped access token to the basin you want to use.
- R2 bucket for snapshot storage.

### Environment Variables

```bash
S2_ACCESS_TOKEN=your_s2_access_token
S2_BASIN=your_s2_basin_name
R2_BUCKET=your_r2_bucket_name
LOG_MODE=CONSOLE|S2_SINGLE|S2_SHARED  # Optional
SNAPSHOT_BACKLOG_SIZE=100             # Optional
```

### Deployment

Requires Node.js 22 or newer.

```bash
# Install dependencies
npm install

# Deploy to Cloudflare Workers
npm run deploy

# Or run locally for development
npm run dev
```

#### Continuous deployment

Every push to `main` is checked (lint, format, typecheck, tests, build) and deployed to Cloudflare Workers by GitHub…
