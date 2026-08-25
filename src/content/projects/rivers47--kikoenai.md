---
repo: "Rivers47/Kikoenai"
name: "Kikoenai"
description: "Self hosted ASMR server"
readmeQualityOk: true
url: "https://github.com/Rivers47/Kikoenai"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [63, 34]
topics: ["media-server", "self-hosted", "asmr"]
stars: 28
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 7
createdAt: "2026-07-25T23:50:03Z"
lastCommitAt: "2026-08-25T04:09:21Z"
lastReleaseAt: "2026-08-14T17:59:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 43
maintainers: ["Rivers47", "clsty"]
openGraphImageUrl: "https://opengraph.githubassets.com/0902182e95a669e3fece03d77206ef26b1da43635a4bad631d916b3dae9d680e/Rivers47/Kikoenai"
---

# Kikoenai

> A self-hosted media server for ASMR works.

This is a fork of the original monorepo [Kikoeru](https://github.com/nortonandrews/kikoeru) project, which was forked to make a [Chinese frontend](https://github.com/yodhcn/kikoeru-quasar), which was then forked by [Kikoeru-project](https://github.com/kikoeru-project), which was yet again forked by [Number178](https://github.com/Number178).

Another heavily modified [closed source version](https://asmr.one) seems to exist.

So this repo is created to make the project monorepo again and to continue the development of the project.

## Project screenshot

## Structure

```
kikoenai/
├── package.json            # Root workspace config
├── backend/                # Express API server (kikoeru-express)
│   ├── app.js              # Server entry point
│   ├── routes/             # API routes
│   ├── database/           # SQLite + Knex
│   ├── filesystem/         # Scanner & file utilities
│   ├── scraper/            # Metadata scrapers (DLSite, etc.)
│   └── dist/               # Frontend build output (auto-generated)
├── frontend/               # Vue 3 / Quasar PWA (kikoeru-quasar)
│   ├── quasar.config.js
│   ├── src/
│   │…
