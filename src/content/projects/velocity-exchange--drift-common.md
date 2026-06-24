---
repo: "velocity-exchange/drift-common"
name: "drift-common"
description: "https://www.npmjs.com/package/@velocity-exchange/common"
url: "https://github.com/velocity-exchange/drift-common"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 19
forks: 7
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 17
recentReleases: 9
createdAt: "2023-06-29T18:20:08Z"
lastCommitAt: "2026-06-24T06:37:58Z"
lastReleaseAt: "2026-06-24T06:38:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 77
undervaluedScore: 60
maintainers: ["ChesterSim", "github-actions[bot]", "velocity-internal-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01a92af1d9bf8678c2a6ca90aced53d9a2e996ae5f5dec45ac7265ebd8da6aa6/velocity-exchange/drift-common"
---

# drift-common

Shared TypeScript code used across Drift/Velocity Exchange frontends, bots, and services. The repo is a multi-package workspace; each top-level directory is an independently published (or consumed-by-path) package.

## Packages

| Path | Package | Purpose |
| --- | --- | --- |
| [`common-ts/`](./common-ts) | `@velocity-exchange/common` | Core, framework-agnostic library: market/account/order/position math, trading + validation utils, serializable types, clients, and constants. Built on top of the Drift / Velocity SDK and `@solana/web3.js`. |
| [`react/`](./react) | `@velocity-exchange/react` | React 19 building blocks for connecting UIs to the Drift program — providers, hooks, zustand stores, wallet-adapter glue. Depends on `common-ts` and `icons` via file paths. |
| [`icons/`](./icons) | `@velocity-exchange/icons` (private) | Figma → React icon pipeline. SVGs are pulled from Figma and converted to typed React components via `@svgr/core`; output is bundled with `rollup` / `tsc`. |
| [`posthog-types/`](./posthog-types) | `@velocity-exchange/posthog-types` | Shared PostHog event type definitions so producers (apps) and consumers (analytics) stay in sync. |…
