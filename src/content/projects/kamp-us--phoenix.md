---
repo: "kamp-us/phoenix"
name: "phoenix"
description: "kampus is back?"
url: "https://github.com/kamp-us/phoenix"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 11
forks: 0
openIssues: 100
closedIssues: 674
watchers: 0
contributors: 13
recentReleases: 2
createdAt: "2026-05-09T21:05:00Z"
lastCommitAt: "2026-06-28T01:47:11Z"
lastReleaseAt: "2026-06-16T06:51:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 52
maintainers: ["usirin"]
openGraphImageUrl: "https://opengraph.githubassets.com/248889d7267627613acac4f8be694778c1b8052fc2916f55aaf60f79940bdd1c/kamp-us/phoenix"
discussionCount: 1
---

# phoenix

kamp.us, reborn. A single Cloudflare Worker on alchemy + Effect + fate that serves the SPA, the data plane, and every backend route.

It is not a general-purpose framework. It is the opinionated stack the kamp.us products (sozluk, pano, vote, stats) are built on, written down precisely enough that you can extend it without reverse-engineering the choices.

## Quickstart

```bash
pnpm install
pnpm dev          # vite (SPA + HMR) + alchemy dev (worker on local workerd)
pnpm typecheck    # effect-tsgo across project references
pnpm deploy       # vite build + alchemy deploy (use --stage <name> for isolation)
```

`alchemy dev` runs the worker locally in `workerd`, but the resources it binds — D1, the live Durable Object — are **real** Cloudflare resources in your personal dev stage. There is no offline emulator (ADR [0032](./.decisions/0032-alchemy-beta45-and-dev-model.md)).

## Stack

| Layer | Choice | What it does for phoenix |
|---|---|---|
| Infra + runtime | [alchemy](https://alchemy.run) `2.0.0-beta.45` | One Effect program declares the worker, its bindings, and the Durable Object. No `wrangler.jsonc`. |
| Effect system | `effect@4.0.0-beta.74` | Backend control…
