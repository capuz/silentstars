---
repo: "enboxorg/enbox"
name: "enbox"
description: "Enbox Personal Data Store"
readmeQualityOk: true
url: "https://github.com/enboxorg/enbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 9
forks: 3
openIssues: 102
closedIssues: 446
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-08-02T19:56:30Z"
lastCommitAt: "2026-09-18T14:02:57Z"
lastReleaseAt: "2026-02-16T23:36:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 75
maintainers: ["LiranCohen", "enmand", "enbox-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/381e6621054998ae0b6ce510b90f9910b7fce37b43947c1ae4abb4bb5c1ec99c/enboxorg/enbox"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/enbox-mark-dark.svg">
  </picture>
</p>

<h1 align="center">en<strong>b</strong>ox</h1>

  <strong>The decentralized backend for web apps.</strong>
</p>

</p>

> [!CAUTION]
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

- A high-level app SDK with typed protocols, record operations, and DID helpers.
- A headless auth layer for local vaults, wallet connect, session restore, and sync startup.
- An agent runtime with encrypted identity/key stores and live/durable DWN sync.
- A self-hostable DWN server with HTTP/WebSocket APIs and SQL-backed persistence.
- Shared DID, crypto, protocol, browser, CLI, and codegen packages.

The model is protocol-first: apps…
