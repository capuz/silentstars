---
repo: "Kilo-Org/cloud"
name: "cloud"
description: "Kilo Cloud monorepo"
readmeQualityOk: true
url: "https://github.com/Kilo-Org/cloud"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 22
forks: 30
openIssues: 61
closedIssues: 552
watchers: 0
contributors: 55
recentReleases: 9
createdAt: "2026-01-29T10:50:11Z"
lastCommitAt: "2026-11-04T13:04:02Z"
lastReleaseAt: "2026-09-28T18:44:18Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["iscekic", "chrarnoldus", "eshurakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/34af5988d5956a2b81bc6c321dcfa8440767a710c82f6cf890550db36bd1ccd7/Kilo-Org/cloud"
---

# Kilo Code — Cloud

Monorepo for the Kilo Code cloud platform: the web app, Cloudflare Worker services, and shared packages.

## Repository structure

```
apps/
  web/            Next.js web application (Vercel)
  mobile/         React Native mobile app
  storybook/      Component playground
services/         Cloudflare Worker services (KiloClaw, Cloud Agent, etc.)
packages/         Shared libraries (db, trpc, worker-utils, etc.)
dev/              Local development tooling (tmux dashboard, docker-compose, env sync)
scripts/          CI and one-off scripts
```

## Getting started

See [DEVELOPMENT.md](https://github.com/Kilo-Org/cloud/blob/HEAD/DEVELOPMENT.md) for the full local setup guide — prerequisites, database, environment variables, and common commands.

For shared web env var additions or rotations, use `pnpm web:env set <VARIABLE>` rather than editing Vercel projects, tracked dotenv defaults, or 1Password separately.

Quick start (assuming prerequisites are installed):

```bash
git clone git@github.com:Kilo-Org/cloud.git
cd cloud
nvm install && nvm use
pnpm install
vercel link --project kilocode-app && vercel env pull
docker compose -f dev/docker-compose.yml up -d
pnpm…
