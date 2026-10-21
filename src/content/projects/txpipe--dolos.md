---
repo: "txpipe/dolos"
name: "dolos"
description: "Cardano Data Node"
readmeQualityOk: true
url: "https://github.com/txpipe/dolos"
homepage: "https://docs.txpipe.io/dolos"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 138
forks: 66
openIssues: 73
closedIssues: 156
watchers: 2
contributors: 40
recentReleases: 0
createdAt: "2022-11-22T20:58:42Z"
lastCommitAt: "2026-10-21T17:31:07Z"
lastReleaseAt: "2023-12-16T15:37:55Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 47
maintainers: ["scarmuega", "slowbackspace", "michalrus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569444139/121548c7-765e-4a29-9931-e4edfb4b9f9d"
---

> [!TIP]
> Looking for detailed guides and tutorials? The complete user guide for Dolos is available at [docs.txpipe.io/dolos](https://docs.txpipe.io/dolos).

## What is Dolos?

Cardano nodes traditionally assume one of two roles: block producer or relay. Dolos introduces a third role: the **data node** — optimized for keeping an updated ledger and responding to queries while requiring a fraction of the resources.

Dolos connects directly to the Cardano network using Ouroboros Node-to-Node (N2N) mini-protocols (via [Pallas](https://github.com/txpipe/pallas)). It relies on honest upstream peers rather than performing full consensus validation, enabling significant resource savings.

## Why Dolos?

- **Low resource footprint** — Runs with a small fraction of the memory and CPU required by a traditional Cardano node
- **Rich API surface** — Multiple protocols to match your existing stack: REST, gRPC, HTTP, JSON-RPC, and Ouroboros
- **Flexible storage mode** — Choose your data retention: ledger-only, sliding window, or full archive
- **Full multi-era support** — Handles all Cardano eras from Byron through Conway, including full governance support (DReps, proposals, voting)

##…
