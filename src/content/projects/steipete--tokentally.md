---
repo: "steipete/tokentally"
name: "tokentally"
description: "One tiny lib for LLM token + cost math"
readmeQualityOk: true
url: "https://github.com/steipete/tokentally"
homepage: "https://tokentally.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cost", "token", "typescript"]
stars: 89
forks: 13
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2025-12-19T11:43:00Z"
lastCommitAt: "2026-09-07T08:35:37Z"
lastReleaseAt: "2026-09-05T18:48:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["steipete", "dependabot[bot]", "devYRPauli"]
openGraphImageUrl: "https://opengraph.githubassets.com/33b3962563a41ad8139ca9cac097b2934fe4bbfd6df9319d411f0737fbd3cb54/steipete/tokentally"
---

# tokentally 🧮 — Count the tokens. Mind the tab.

tokentally is a TypeScript library for normalizing LLM provider token usage and estimating
USD cost. Its core API works in browsers and Node.js; optional Node helpers load pricing and
model limits from LiteLLM or OpenRouter.

```js
import { estimateUsdCost, normalizeTokenUsage, pricingFromUsdPerMillion } from "tokentally";

const usage = normalizeTokenUsage({ prompt_tokens: 1_000, completion_tokens: 250 });
const pricing = pricingFromUsdPerMillion({ inputUsdPerMillion: 1.75, outputUsdPerMillion: 14 });
console.log(estimateUsdCost({ usage, pricing })?.totalUsd);
// 0.00525
```

## Install

```sh
pnpm add tokentally
```

tokentally requires Node.js 24 or newer when used in Node.js projects. The package is ESM-only.

## Quick start

Save the example above as `cost.mjs`, then run it:

```console
$ node cost.mjs
0.00525
```

`normalizeTokenUsage()` accepts common snake_case and camelCase provider fields. It returns
`null` when it cannot find a recognized token count, so unknown payloads do not silently become
zero-cost calls.

## Normalize usage

The normalizer understands OpenAI-style `prompt_tokens` and `completion_tokens`,…
