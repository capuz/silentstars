---
repo: "logaretm/teley"
name: "teley"
description: "🔭 Open-source trace viewer for OpenTelemetry. Beautiful UI, real-time updates, runs locally. Your session debugger for distributed systems."
readmeQualityOk: true
url: "https://github.com/logaretm/teley"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [56, 44]
stars: 59
forks: 3
openIssues: 9
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-11-16T00:59:47Z"
lastCommitAt: "2026-07-18T05:46:01Z"
lastReleaseAt: "2026-07-18T04:35:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 34
maintainers: ["logaretm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a506350ab58a9c62e7e0cd49e715aa36cf6dc96e373f7dd752b2e7d4f76bc5e/logaretm/teley"
---

</p>

<h1 align="center">Teley</h1>

  A real-time observability dashboard built with Nuxt 3 and Vue 3. View and debug traces and logs from your instrumented applications with an intuitive waterfall visualization.
</p>

</p>

</p>

## Features

- 🔄 Real-time trace updates via WebSocket
- 📊 Waterfall visualization of spans
- 🔍 Detailed span information panel
- 📋 Live log monitoring with OTLP support
- 🎨 Clean, modern UI inspired by Sentry
- 💾 Persistent storage with SQLite
- 🚀 OTLP-compatible HTTP endpoints

## Requirements

- Node.js >= 24.0.0
- pnpm (or npm/yarn)

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at http://localhost:3000

## Sending Traces and Logs

The viewer accepts data in two formats:

### Option 1: OpenTelemetry Protocol (OTLP)

**Traces:**

```
POST http://localhost:3000/api/v1/otlp/traces
```

**Logs:**

```
POST http://localhost:3000/api/v1/otlp/logs
```

**Note:** Use the HTTP/JSON exporter (not protobuf) from your application.

### Option 2: Sentry SDK

You can now use Sentry SDKs directly with this viewer! Simply set your DSN to:

```…
