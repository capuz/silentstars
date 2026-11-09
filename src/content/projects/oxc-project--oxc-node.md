---
repo: "oxc-project/oxc-node"
name: "oxc-node"
description: "Run TypeScript directly in Node.js, powered by Oxc."
readmeQualityOk: true
url: "https://github.com/oxc-project/oxc-node"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [61, 28]
stars: 279
forks: 11
openIssues: 5
closedIssues: 62
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2024-07-05T17:11:11Z"
lastCommitAt: "2026-11-09T11:59:32Z"
lastReleaseAt: "2024-07-21T09:49:33Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 38
maintainers: ["Brooooooklyn", "renovate[bot]", "fengmk2"]
openGraphImageUrl: "https://opengraph.githubassets.com/a64c5c1a6a4aed3bb27b9273ea44b1114ade2c7373d06753f94db67920e8323f/oxc-project/oxc-node"
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
- Imports such as `./file.js` resolving to `./file.ts` or `./file.tsx`. From
  JavaScript files and the entry point, `./file.js` itself runs when it exists
- Source-mapped stack traces
- Importing TypeScript from a tool, without hooks (`@oxc-node/core/importer`)
- Node features and flags such as watch mode, the test runner, and the
  inspector

Type annotations are removed at runtime, not checked. Run a type…
