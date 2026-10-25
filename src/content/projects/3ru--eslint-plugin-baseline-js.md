---
repo: "3ru/eslint-plugin-baseline-js"
name: "eslint-plugin-baseline-js"
description: "✅ ESLint plugin to enforce the JavaScript Baseline."
readmeQualityOk: true
url: "https://github.com/3ru/eslint-plugin-baseline-js"
homepage: "https://baselinejs.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["baseline", "browser-support", "eslint", "eslint-plugin", "javascript"]
stars: 233
forks: 10
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-09-08T11:08:40Z"
lastCommitAt: "2026-10-25T08:40:07Z"
lastReleaseAt: "2026-03-03T11:56:28Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 36
maintainers: ["3ru", "semantic-release-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1052654174/9c0569b6-8ef9-4700-9e57-1e9d1c92ad88"
discussionCount: 1
---

# eslint-plugin-baseline-js

Enforce the JavaScript Baseline (`widely` / `newly` / `year`) with a single ESLint rule powered by web‑features.
This plugin delegates detection to eslint-plugin-es-x and ESLint core (plus a few small gap‑filling rules) and reports with one consistent Baseline message.

> [!NOTE]
> This project hasn’t reached a major release yet, so behavior and options may change. Please feel free to report false negatives/positives and any rough edges as [issues](https://github.com/3ru/eslint-plugin-baseline-js/issues).

## Install

- npm: `npm i -D eslint-plugin-baseline-js`
- pnpm: `pnpm add -D eslint-plugin-baseline-js`
- yarn: `yarn add -D eslint-plugin-baseline-js`

Recommended
- ESLint >= 9.29.0 and < 11 (Flat Config)

## Quick Start (Flat Config)

```js
// eslint.config.js
import baselineJs from "eslint-plugin-baseline-js";

export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { "baseline-js": baselineJs },
    rules: {
      // Allow only "widely available" Baseline features
      "baseline-js/use-baseline": ["error", { available: "widely" }],
    },
  },
];
```

## Preset Configs

This plugin ships Flat Config presets you can call from…
