---
repo: "seed-hypermedia/seed"
name: "seed"
description: "Desktop+Web app for self-publishing, powered by the open Hypermedia protocol"
readmeQualityOk: true
url: "https://github.com/seed-hypermedia/seed"
homepage: "https://seed.hyper.media"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
stars: 59
forks: 12
openIssues: 86
closedIssues: 454
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2024-07-11T19:36:01Z"
lastCommitAt: "2026-11-05T08:06:33Z"
lastReleaseAt: "2024-07-21T08:18:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["ericvicenti", "horacioh", "burdiyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ed686b3e8e4e4066347dfeb5354518a7f694cdc057e3448b1e65cd5aadd187e/seed-hypermedia/seed"
---

# Seed

Seed is open-source software for the [Hypermedia protocol](https://hyper.media): a network of signed, versioned
documents and comments that anyone can publish, link, archive and collaborate on without a central server.

This repository holds all of it:

- the Seed daemon (`backend/`), a Go peer-to-peer node that stores, indexes and syncs Hypermedia data
- the Seed desktop app and the Seed web app (`frontend/apps/desktop`, `frontend/apps/web`)
- the Seed CLI and the SDK, `@seed-hypermedia/client` (`frontend/apps/cli`, `frontend/packages/client`)
- Seed Agents (`agents/`), the identity vault (`vault/`) and the notification service (`frontend/apps/notify`)
- the developer documentation and the Hypermedia Schemas library (`hypermedia/`)

## Documentation

The developer docs live in [`hypermedia/`](https://github.com/seed-hypermedia/seed/blob/HEAD/hypermedia/index.md) and are published to the Hypermedia network from this
repository. Start with:

- [The Hypermedia protocol](https://github.com/seed-hypermedia/seed/blob/HEAD/hypermedia/protocol.md)
- [Building on Hypermedia](https://github.com/seed-hypermedia/seed/blob/HEAD/hypermedia/build.md): the Seed API, the SDK, the CLI and…
