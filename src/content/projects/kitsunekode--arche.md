---
repo: "KitsuneKode/arche"
name: "arche"
description: "Arche -- preset-led scaffold CLI and full-stack TypeScript monorepo (Next.js, Express, tRPC, Better Auth, Rust,  Solana)"
url: "https://github.com/KitsuneKode/arche"
homepage: "http://arche.kitsunelabs.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-07-10T19:01:53Z"
lastCommitAt: "2026-06-24T23:39:13Z"
lastReleaseAt: "2026-06-06T12:14:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 70
maintainers: ["KitsuneKode"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa33d98113e699be257e916602cb621893038b6db01dba1ca8aed6cb96cda7f7/KitsuneKode/arche"
---

</a>
</p>

</p>

  <strong>Project origin system</strong> — personal scaffold CLI and template vault for TypeScript monorepos, Rust services, and Solana foundations.
</p>

</p>

---

Arche is KitsuneKode’s preset-led way to start real projects without re-wiring the boring parts: workspace shape, package-manager catalogs, agent context, deployment notes, and a reproducible `arche.json`. It began as a full-stack TypeScript template and is now a vault plus `@kitsunekode/arche` CLI.

**Honest status:** eleven presets are **Stable** when `presetHasStableEvidence` passes in [`packages/registry`](packages/registry/src/verification-matrix.ts); npm publish remains **release guarded** until the release workflow is unblocked. Nothing is marketed as production-ready without matrix evidence.

## Use the CLI (the fun part)

Published route (after npm release):

```sh
npx @kitsunekode/arche create my-app
# or
bunx @kitsunekode/arche create my-app
```

From this repository while developing:

```sh
bun run dev:cli -- my-app --yes --dir=../projects
```

Scaffold **outside** this template repo when writing real output.

```mermaid
flowchart LR
  dev[Developer] --> cli["arche create"]
  cli -->…
