---
repo: "wn-mitch/40kdc-data"
name: "40kdc-data"
description: "Community-owned data schemas for Warhammer 40,000 developer tooling"
url: "https://github.com/wn-mitch/40kdc-data"
homepage: "https://wn-mitch.github.io/40kdc-data/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [44, 30]
stars: 12
forks: 5
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-03-30T18:03:43Z"
lastCommitAt: "2026-06-25T01:30:16Z"
lastReleaseAt: "2026-06-02T19:39:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["wn-mitch", "bmerrill17", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce0117b288f1d500d46602b2ef1b107466655205a738ec6ae492cb9950e705eb/wn-mitch/40kdc-data"
---

# 40kdc-data

> **Looking for 10th edition data?** The 10e dataset is preserved on branch [`10e-archive`](https://github.com/wn-mitch/40kdc-data/tree/10e-archive) and tagged [`10th/2025-q3`](https://github.com/wn-mitch/40kdc-data/releases/tag/10th/2025-q3). The `main` branch is migrating to **11th edition** — see [`11e-migration.md`](11e-migration.md) for status and the work plan.

Community-owned data schemas for Warhammer 40,000 developer tooling — **and** a linked, typed API over the dataset they describe.

## What This Is

Two things, both community-owned:

1. **The schema layer** for the [40kdc](https://40kdc.alpacasoft.dev) ecosystem — JSON Schemas that model 40K entities so tools can exchange data. Entity IDs are the interoperability contract.
2. **A ready-to-use dataset package.** The whole dataset ships embedded behind an intuitive, typed API: find a unit, then walk to its weapons, abilities, the phases those abilities act in, and its faction — no database, no network, no runtime filesystem access. Same ergonomics consumers expect, available today.

```ts
import { units } from "@alpaca-software/40kdc-data";

units.find("Kharn")!.abilities
  .filter(a =>…
