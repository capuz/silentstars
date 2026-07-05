---
repo: "timecalendar/timecalendar"
name: "timecalendar"
description: "TimeCalendar gives you easy access to your university timetable."
readmeQualityOk: true
url: "https://github.com/timecalendar/timecalendar"
homepage: "https://timecalendar.app"
language: "TypeScript"
languages: ["TypeScript", "Dart"]
languagePcts: [66, 29]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2021-12-29T23:09:13Z"
lastCommitAt: "2026-07-05T20:54:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 86
maintainers: ["samuelprak", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cd8b974646d445dd5e2d148deab56bf01452a9065300c83c1402ef4949d0fb4/timecalendar/timecalendar"
---

# TimeCalendar

## Development setup

### Docker

To start working on TimeCalendar, you must first [install Docker](https://docs.docker.com/get-docker/).

Once Docker is installed, start the dev-env services (Postgres, Redis, and an
nginx TLS proxy) in the background. The compose file lives in `server/`:

```bash
cd server && docker compose up -d
```

### Node.js

TimeCalendar is written in TypeScript and runs with Node.js. [Install Node.js](https://nodejs.org/en/) on your environment.

Once Node.js is installed, install npm dependencies:

```bash
npm install
```

### Init your environment

Copy the file `server/.env.sample` to a new file named `server/.env`. In
development most values already have sensible defaults (see
`server/src/config/environments/development.ts`), so this file only needs
`NODE_ENV=development`.

### Working in a git worktree

A `git worktree` only checks out tracked files, so the gitignored files a working
checkout needs — `server/.env`, `web/.env.local`, the Firebase key, the generated
husky hooks, and `node_modules` — are all absent in a fresh worktree (commits even
silently abort because the pre-commit hook can't find its helper). Run this once
per new…
