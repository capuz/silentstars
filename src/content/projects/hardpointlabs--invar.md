---
repo: "hardpointlabs/invar"
name: "invar"
description: "The Redis-compatible database with durable tiered storage."
readmeQualityOk: true
url: "https://github.com/hardpointlabs/invar"
homepage: "https://hardpoint.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["database", "redis", "mongo", "slatedb", "rust", "s3"]
stars: 7
forks: 0
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2025-12-05T23:31:39Z"
lastCommitAt: "2026-10-10T10:03:51Z"
lastReleaseAt: "2026-08-25T20:31:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 81
undervaluedScore: 66
maintainers: ["m0wfo", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/345f36d732f0268b9ea4af3326aea3ab575ac28c7d07dc9e031cb08ddb61193f/hardpointlabs/invar"
---

---

# Invar

Invar is a diskless, Redis™-compatible document store.

It speaks Redis' RESP wire protocol and gives well-defined durability + transactional behavior, without having to manage disks.  It uses object storage, meaning your cloud bill scales with what you store, not what you provision.
It's explicitly designed for single-writer operation and to run at fleet-scale for instance-per-tenant scenarios. Have a read of [this post](https://blog.hardpoint.dev/announcing-invar-a-diskless-transactional-document-db?utm_source=github) for more context about Invar's evolution.

Check out the [docs](https://docs.hardpoint.dev/guides/invar) for more details.

## Invar Cloud

> [!TIP]
> Our fully managed, hosted Invar service is in open alpha. [Sign up for free here!](https://dashboard.hardpoint.dev)

---

## Why Invar

- **Redis wire protocol compatibility:** Works with your existing code. Compatibility is verified continuously against a suite of integration tests for the command spec. See the [compatibility guide](https://docs.hardpoint.dev/guides/invar/appendix/redis-tm-command-support) for more details
- **Diskless by design:** Invar uses [SlateDB](https://slatedb.io) under the…
