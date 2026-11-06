---
repo: "orkbot-run/ork"
name: "ork"
description: "Source-available AI assistant with persistent bots that share conversations and work on isolated computers. Self-hosted, with web, desktop, and mobile apps."
readmeQualityOk: true
url: "https://github.com/orkbot-run/ork"
homepage: "https://orkbot.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-assistants", "ai-agents", "automation", "electron", "expo", "self-hosted", "source-available", "typescript"]
stars: 151
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 198
recentReleases: 0
createdAt: "2026-11-04T19:57:31Z"
lastCommitAt: "2026-11-06T13:19:45Z"
status: "newborn"
tags: []
healthScore: 90
undervaluedScore: 27
maintainers: ["raxon", "elie222", "zicochaos"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1446135312/12e63f29-378a-442f-991d-47156024395f"
---

# Ork

Ork is a source-available assistant for persistent bots that share conversations and work on isolated computers, with a web app, API, worker, Tauri client, and Expo client in one repository. Its public domain is `orkbot.run`. Use `orkbot` in package names and technical identifiers.

## Run locally

Install Node.js 22.22.2+ within the 22.x line, Node.js 24, or Node.js 26+, and start Docker. The repository pins pnpm 9.15.0 through Corepack.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm setup:local
corepack pnpm db:up
corepack pnpm dev
```

Before starting the API, set the registered Accounts public client ID in `.env` as `OIDC_CLIENT_ID`. The local callback is `http://127.0.0.1/callback`, with the development port supplied at runtime. See [Accounts sign-in](https://github.com/orkbot-run/ork/blob/HEAD/docs/accounts-native.md#local-server-sign-in).

Open the development URL printed after migrations finish, usually `http://127.0.0.1:5173`. Continue through Ork Accounts to sign in. No model key is needed to open the app.

`setup:local` creates `.env` with random database passwords and independent encryption, authentication, supervisor, and screen-proxy secrets.…
