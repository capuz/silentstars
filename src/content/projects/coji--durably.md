---
repo: "coji/durably"
name: "durably"
description: "Step-oriented resumable batch execution for Node.js and browsers using SQLite"
readmeQualityOk: true
url: "https://github.com/coji/durably"
homepage: "https://coji.github.io/durably/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 20
forks: 0
openIssues: 5
closedIssues: 75
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T07:51:13Z"
lastCommitAt: "2026-09-19T01:36:47Z"
lastReleaseAt: "2026-03-05T12:54:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 29
maintainers: ["coji"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ee3b1c2f4c3ad97f6087ac1f0778405ee0321a9ff6c3f39364fd10c9c889476/coji/durably"
---

# durably

Steps that survive crashes. SQLite to PostgreSQL.

**[Documentation](https://coji.github.io/durably/)** | **[Live Demo](https://durably-demo.vercel.app)**

## Packages

| Package                                         | Description                                               |
| ----------------------------------------------- | --------------------------------------------------------- |
| [@coji/durably](https://github.com/coji/durably/blob/HEAD/packages/durably)             | Core library - job definitions, steps, and persistence    |
| [@coji/durably-react](https://github.com/coji/durably/blob/HEAD/packages/durably-react) | React bindings - hooks for triggering and monitoring jobs |

## Features

- **Resumable** — each step's result is persisted; interrupted jobs resume from the last successful step
- **Flexible storage** — libSQL/Turso, PostgreSQL, better-sqlite3, or browser OPFS
- **Browser + server** — same API for Node.js and browsers
- **Lease-based recovery** — stale workers are automatically reclaimed via fencing tokens
- **Auto cleanup** — `retainRuns` option purges old completed runs automatically
- **React hooks** — real-time progress via SSE, fullstack…
