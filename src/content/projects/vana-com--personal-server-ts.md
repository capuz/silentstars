---
repo: "vana-com/personal-server-ts"
name: "personal-server-ts"
description: "TypeScript implementation of the Vana Data Portability Protocol's Personal Server"
readmeQualityOk: true
url: "https://github.com/vana-com/personal-server-ts"
homepage: "https://github.com/vana-com/personal-server-ts#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["data-portability", "open-source", "personal-server", "privacy", "typescript", "vana", "web3"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 10
recentReleases: 4
createdAt: "2026-01-28T21:27:08Z"
lastCommitAt: "2026-10-21T20:01:11Z"
lastReleaseAt: "2026-08-18T17:59:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 78
maintainers: ["Kahtaf", "volod-vana", "tnunamak"]
openGraphImageUrl: "https://opengraph.githubassets.com/91d68b03f3770cebe941dd3a47c991e774adc4baed6c78eea1cec9aac4ec27d5/vana-com/personal-server-ts"
discussionCount: 0
---

# Vana Personal Server

TypeScript implementation of the Vana Data Portability Protocol's Personal Server. Stores user data locally, serves it to authorized users via grant-enforced APIs, and syncs encrypted copies to storage backends.

## Architecture

NPM workspaces monorepo with three packages:

| Package           | Purpose                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `packages/core`   | Protocol logic — auth, grants, scopes, storage, keys, gateway client   |
| `packages/server` | Hono HTTP server — routes, middleware, composition root                |
| `packages/cli`    | Facade package for external tools (`@opendatalabs/personal-server-ts`) |

By default, Personal Server uses `~/personal-server` as its root namespace:

- Data: `~/personal-server/data/`
- Config: `~/personal-server/config.json`
- Index: `~/personal-server/index.db`
- Server keypair: `~/personal-server/key.json`
- Access logs: `~/personal-server/logs/`

Override the root with `PERSONAL_SERVER_ROOT_PATH` (for example, the Vana desktop app uses `~/.vana/desktop/personal-server`).

## Setup…
