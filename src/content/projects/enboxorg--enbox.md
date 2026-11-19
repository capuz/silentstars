---
repo: "enboxorg/enbox"
name: "enbox"
description: "Enbox Personal Data Store"
readmeQualityOk: true
url: "https://github.com/enboxorg/enbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 11
forks: 3
openIssues: 105
closedIssues: 457
watchers: 2
contributors: 6
recentReleases: 7
createdAt: "2025-08-02T19:56:30Z"
lastCommitAt: "2026-11-19T05:07:48Z"
lastReleaseAt: "2026-10-22T22:21:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 78
maintainers: ["LiranCohen", "enbox-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc1abfef4885c3eef01fe62e48ad4585ffb4433da1e604a936d34ac321a4ad0d/enboxorg/enbox"
---

> **Caution**
>
> **Research Preview -- Not Production Ready**
>
> Enbox is under active development. APIs may break, preview DWN servers may be
> wiped, and the code has not been externally audited. Do not store sensitive or
> irreplaceable data yet. We are not accepting external contributions while the
> core APIs are still changing.

## What Enbox Provides

Enbox is a Bun/TypeScript monorepo for building apps on
[Decentralized Web Nodes](https://identity.foundation/decentralized-web-node/spec/)
(DWNs). It includes:

- A high-level app SDK with typed modules, record operations, and DID helpers.
- A headless auth layer for local vaults, wallet connect, session restore, and sync startup.
- An agent runtime with encrypted identity/key stores and live/durable DWN sync.
- A self-hostable DWN server with HTTP/WebSocket APIs and SQL-backed persistence.
- Shared DID, crypto, module, browser, CLI, and codegen packages.

The model is module-first: apps define portable record schemas and access
rules, users control their DIDs and DWN endpoints, and encrypted data can move
between apps that understand the same module.
