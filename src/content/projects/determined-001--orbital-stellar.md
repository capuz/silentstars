---
repo: "determined-001/orbital_stellar"
name: "orbital_stellar"
description: "The missing event layer for Stellar developers. Open-source webhook delivery  and React hooks for the Stellar network - No more polling loops. Just events."
readmeQualityOk: true
url: "https://github.com/determined-001/orbital_stellar"
homepage: "https://orbital-dev-flame.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["developer-tools", "monorepository", "soroban-sdk", "stellar", "stellar-network"]
stars: 6
forks: 178
openIssues: 30
closedIssues: 471
watchers: 0
contributors: 163
recentReleases: 1
createdAt: "2026-03-15T15:25:50Z"
lastCommitAt: "2026-09-04T08:09:42Z"
lastReleaseAt: "2026-06-12T07:44:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 77
maintainers: ["dependabot[bot]", "determined-001", "ibochivincent-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d23fccf6a6f4b1543f43da095b676cf859b94308aac6ba5d89596819bbcdffc/determined-001/orbital_stellar"
discussionCount: 3
---

# Orbital

> **Status**: `v0.1.0` on npm &nbsp;·&nbsp; **Networks**: testnet + mainnet &nbsp;·&nbsp; **License**: MIT

**Stellar's biggest developer-experience gap is that Soroban events arrive as raw, untyped payloads with no shared vocabulary - every team invents its own decoding, and no two teams agree on what a `swap` or a `liquidation` even is.**

Orbital ships the typed event layer once, openly: an open ABI/event-schema registry that makes decoding canonical, a typed event engine that normalizes Horizon and Soroban output into application-shaped events, codegen that puts those types into your codebase, plus composable webhook delivery and React hooks. Four MIT-licensed packages, designed to be composed.

---

## Table of contents

- [Why this exists](#why-this-exists)
- [Packages](#packages)
- [Quickstart](#quickstart)
- [Architecture](#architecture)
- [Documentation](#documentation)
- [Production hosting](#production-hosting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

---

## Why this exists

Stellar's official APIs give you the raw firehose - and not much else:

- **Soroban contract events** decode to raw…
