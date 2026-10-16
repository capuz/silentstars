---
repo: "oxc-project/oxc-node"
name: "oxc-node"
description: "Run TypeScript directly in Node.js, powered by Oxc."
readmeQualityOk: true
url: "https://github.com/oxc-project/oxc-node"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 44]
stars: 246
forks: 7
openIssues: 11
closedIssues: 43
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2024-07-05T17:11:11Z"
lastCommitAt: "2026-10-16T08:26:47Z"
lastReleaseAt: "2024-07-21T09:49:33Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 38
maintainers: ["renovate[bot]", "Brooooooklyn", "cjnoname"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdb7271197b8d3daf21ce458770b9ea5f664426dbc7a04d45fa775e72d6eeb78/oxc-project/oxc-node"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/oxc"]
---

# `oxc-node`

Run TypeScript directly in Node.js, powered by
[Oxc](https://github.com/oxc-project/oxc).

`oxc-node` adds module resolution and transformation hooks to Node. When Node
loads a file, `oxc-node` resolves the import with
[oxc-resolver](https://github.com/oxc-project/oxc-resolver), transforms the
source with Oxc, and returns JavaScript with an inline source map for Node to
execute.

Node remains the runtime. `oxc-node` is not a JavaScript runtime, bundler, or
type checker, and it does not write build output to disk.

## What it supports

- TypeScript and TSX without a separate build step
- ESM and CommonJS, including `.mts`, `.cts`, `.mjs`, and `.cjs`
- JSX and selected TypeScript compiler options
- `tsconfig.json` path aliases and TypeScript-aware import resolution
- Imports such as `./file.js` resolving to `./file.ts` or `./file.tsx`
- Source-mapped stack traces
- Node features and flags such as watch mode, the test runner, and the
  inspector

Type annotations are removed at runtime, not checked. Run a type checker
separately when you need type safety.

## CLI

Install the CLI in a project:

```bash
npm install --save-dev @oxc-node/cli
```

Run a TypeScript entry…
