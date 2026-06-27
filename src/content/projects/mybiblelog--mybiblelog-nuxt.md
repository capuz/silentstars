---
repo: "mybiblelog/mybiblelog-nuxt"
name: "mybiblelog-nuxt"
description: "My Bible Log is a free online Bible reading tracker. This is the code for the live web app."
url: "https://github.com/mybiblelog/mybiblelog-nuxt"
homepage: "https://www.mybiblelog.com/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [49, 47]
stars: 6
forks: 0
openIssues: 11
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-14T23:41:21Z"
lastCommitAt: "2026-06-27T00:46:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 57
maintainers: ["AaronSmithX"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eb4ce7db650884b18c0830e16b6126f457f2069a354e17b3fbb1fe0ebc4c4da/mybiblelog/mybiblelog-nuxt"
---

# My Bible Log

My Bible Log is a free, open source web app for tracking personal Bible reading.

This is the code that runs the live [mybiblelog.com](https://www.mybiblelog.com/) web app.

## Getting Started

```bash
# use the correct NPM version, if applicable
# this is specified in package.json under "engines"
$ nvm use 24.2.0

# install root project dependencies
$ npm install

# install nuxt and express (/api) project dependencies
$ npm run heroku-prebuild

# make sure MongoDB is running
# docker-compose.yml is one option
$ docker compose up

# ensure env vars are set: see below example
# both /nuxt and /api projects check for the .env in this root directory
$ touch .env

# serve both with hot reload
# nuxt project served at localhost:3000
# express api project served at localhost:8080
# nuxt project proxies /api/* requests to express api
$ npm run dev

# build both for production and launch servers
$ npm run build
$ npm run start
```

## Debugging (VS Code / Cursor)

Debug launch configs live in `.vscode/launch.json`.

- Debug Nuxt Dev: Run **Debug Nuxt Dev** (F5)
- Debug Nuxt Prod: first run `npm run -w nuxt build`, then Run **Debug Nuxt Prod** (F5)
- Debug API Server…
