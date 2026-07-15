---
repo: "AriPerkkio/ast-v8-to-istanbul"
name: "ast-v8-to-istanbul"
description: "AST-aware v8-to-istanbul"
readmeQualityOk: true
url: "https://github.com/AriPerkkio/ast-v8-to-istanbul"
homepage: "https://npmjs.com/package/ast-v8-to-istanbul"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["coverage", "testing"]
stars: 18
forks: 7
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-02-02T18:06:00Z"
lastCommitAt: "2026-07-15T05:53:41Z"
lastReleaseAt: "2025-04-14T14:57:43Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 72
maintainers: ["renovate[bot]", "AriPerkkio", "arlyon"]
openGraphImageUrl: "https://opengraph.githubassets.com/e63399c91c453e353fd4c92f2f9b18733e7cae7e120dbc7eb6e4050ba42f43d2/AriPerkkio/ast-v8-to-istanbul"
fundingLinks: ["GITHUB:https://github.com/AriPerkkio"]
discussionCount: 0
---

# `ast-v8-to-istanbul`

> - Speed of V8 coverage 🏎
> - Accuracy of Istanbul coverage 🔍

[Ignoring code](#ignoring-code) | [Source maps](#source-maps) | [Istanbul Compatibility](#istanbul-compatibility) | [Limitations](#limitations)

---

AST-aware [`v8-to-istanbul`](https://www.npmjs.com/package/v8-to-istanbul).

Unopinionated - _bring-your-own_ AST parser and source maps.

Passes all 195 tests<sup>[*](#istanbul-compatibility)</sup> of [`istanbul-lib-instrument`](https://github.com/istanbuljs/istanbuljs/tree/main/packages/istanbul-lib-instrument/test/specs). ✅

Test cases run against:
- `vite/parseAst` ✅
- `acorn` ✅
- `oxc-parser` ✅
- `@babel/parser` ✅

See example report at https://ariperkkio.github.io/ast-v8-to-istanbul.

```ts
import { convert } from "ast-v8-to-istanbul";
import { parseAstAsync } from "vite";
import type { CoverageMapData } from "istanbul-lib-coverage";

const data: CoverageMapData = await convert({
  // Bring-your-own AST parser
  ast: parseAstAsync(<code>),

  // Code of the executed file (not the source file)
  code: "function sum(a, b) {\n  return a + b ...",

  // Execution wrapper offset
  wrapperLength: 0,

  // Script coverage of the executed file…
