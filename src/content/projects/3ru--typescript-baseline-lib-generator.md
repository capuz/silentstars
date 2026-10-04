---
repo: "3ru/TypeScript-Baseline-lib-generator"
name: "TypeScript-Baseline-lib-generator"
description: "A generator-backed TypeScript lib that aligns JavaScript built-in types with Baseline Widely Available"
readmeQualityOk: true
url: "https://github.com/3ru/TypeScript-Baseline-lib-generator"
homepage: "https://www.npmjs.com/package/typescript-baseline-lib"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["baseline", "browser-compatibility", "javascript", "typescript", "web-features", "lib-dts"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-22T09:15:39Z"
lastCommitAt: "2026-10-04T10:03:07Z"
lastReleaseAt: "2026-07-23T05:01:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 37
maintainers: ["3ru", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/759db8a41ab944fd53ce5999f12d2e99d7493570f8852bc2afd3be64d0f96358/3ru/TypeScript-Baseline-lib-generator"
---

# TypeScript Baseline Lib Generator

Catch JavaScript API calls that are too new for your Baseline target. `typescript-baseline-lib` gives your editor and TypeScript compiler a set of built-in types selected by [Baseline](https://web.dev/baseline) browser support data.

TypeScript's `ESNext` lib can accept APIs that your supported browsers cannot run. This package selects declarations from TypeScript using per-API data from `web-features`. By default, it includes Baseline Widely available APIs: those supported across the Baseline core browsers for at least 30 months.

In the October 2026 snapshot, TypeScript accepts `.at()` but reports an error for `Promise.try()`:

```ts
["a", "b"].at(-1);
Promise.try(() => 42);
```

Use it to check browser code or shared JavaScript modules before shipping. It checks API types; it does not transform syntax or load polyfills.

## Get started

The package supports TypeScript 6 and 7. Install it with TypeScript:

```sh
npm install --save-dev typescript@^7 typescript-baseline-lib
```

For JavaScript built-ins without browser or Node.js globals, start with this `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noLib": true,
    "strict": true,…
