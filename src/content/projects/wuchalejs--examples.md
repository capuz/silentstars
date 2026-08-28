---
repo: "wuchalejs/examples"
name: "examples"
description: "Examples for using wuchale: Compile-time i18n. Zero code changes. Smallest bundles."
readmeQualityOk: true
url: "https://github.com/wuchalejs/examples"
homepage: "https://wuchale.dev/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [45, 22]
stars: 12
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-23T13:10:47Z"
lastCommitAt: "2026-08-28T15:29:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["dependabot[bot]", "K1DV5"]
openGraphImageUrl: "https://opengraph.githubassets.com/a18f26b4928bf25a909455ed7c710be6ffc500d0148ec1140ce57810da3f511c/wuchalejs/examples"
---

# 📜`wuchale` Examples🪶

This repo contains fully working examples of
**[`wuchale`](https://github.com/wuchalejs/wuchale)**, the modern, normal code
based internationalization toolkit for JavaScript, TypeScript, and Svelte
projects.

Each example demonstrates a different use case and integration strategy — from
minimal setups to advanced per-file catalog loading, including server-side
support.

## 🔰 Examples Overview

### 1. `vanilla`

- Uses only `wuchale` core and the builtin adapter-vanilla
- Works directly with the DOM
- Uses a single catalog per locale

### 2. `react`

- Shows how to use `wuchale` in a basic React app
- Great for client-only React projects
- Uses a single catalog per locale

### 3. `svelte`

- Shows how to use `wuchale` in a basic Svelte app (no routing)
- Great for client-only Svelte projects
- Uses a single catalog per locale

### 4. `sveltekit`

- Basic SvelteKit integration with locale inside query parameters `/?locale=en`
- Supports SSR so it works even without JavaScript
- Uses a single catalog per locale
- Uses SCSS for styling sample

### 5. `sveltekit-advanced`

- Routes directly as URL parameters like `/en`
- Supports SSR so it works even without…
