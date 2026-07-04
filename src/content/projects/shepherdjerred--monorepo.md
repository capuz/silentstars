---
repo: "shepherdjerred/monorepo"
name: "monorepo"
description: "Monorepo for all of my projects"
readmeQualityOk: true
url: "https://github.com/shepherdjerred/monorepo"
language: "TypeScript"
languages: ["TypeScript", "Jupyter Notebook"]
languagePcts: [45, 23]
stars: 21
forks: 8
openIssues: 3
closedIssues: 120
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-06-14T03:33:45Z"
lastCommitAt: "2026-07-04T22:20:48Z"
lastReleaseAt: "2026-04-04T21:25:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 68
maintainers: ["shepherdjerred", "renovate[bot]", "long-summer-intern[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c237bc4645cbe0ac7c70851b776dd485edde4a5f011d5ff384f1fef2df26d5c8/shepherdjerred/monorepo"
---

# monorepo

Personal monorepo for active projects, learning, and archived work.

## Packages

**33 active packages**

### [discord-stream-lifecycle](https://github.com/shepherdjerred/monorepo/tree/main/packages/discord-stream-lifecycle) (2026-06-13)

The @shepherdjerred/discord-stream-lifecycle package provides shared XState v5 state machines that manage Discord Go-Live streaming sessions end-to-end. It is implemented in strict TypeScript with Bun-managed tooling (`bun.lock`), uses XState’s `setup` API, and relies on Node stream primitives to coordinate encoders and voice targets. A notable architecture detail is the layered setup where `createDesiredStreamMachine` composes a raw go-live machine actor to reconcile desired intent with actual Discord topology, handling retries and teardown reasons per snapshot.

### [discord-video-stream](https://github.com/shepherdjerred/monorepo/tree/main/packages/discord-video-stream) (2026-06-07)

@shepherdjerred/discord-video-stream is a monorepo-maintained fork of @dank074/discord-video-stream that gives streambot, discord-plays-pokemon, and discord-plays-mario-kart a unified Go-Live streaming library. The codebase is TypeScript built via Bun…
