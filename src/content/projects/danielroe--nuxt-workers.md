---
repo: "danielroe/nuxt-workers"
name: "nuxt-workers"
description: "SSR-safe, zero-config Web Workers integration for Nuxt."
readmeQualityOk: true
url: "https://github.com/danielroe/nuxt-workers"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 448
forks: 10
openIssues: 7
closedIssues: 2
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2024-06-19T22:58:51Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2025-02-21T22:47:59Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 82
undervaluedScore: 30
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b53b5765f6eb9ced8665473ae3b93295c8fc1cd64812004d297d5b005a2d5/danielroe/nuxt-workers"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Workers

SSR-safe, zero-config Web Workers integration for [Nuxt](https://nuxt.com).

> Web Workers enable running JavaScript code in the background to perform complex tasks without blocking the main thread, ensuring smoother and more responsive web applications.
>
> [Read more about Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-workers/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-workers/tree/main/playground)

## Features

- 🔥 SSR-safe usage of Web Workers
- ✨ auto-imported, zero-configuration
- 💪 fully typed

## Quick Setup

Install and add `nuxt-workers` to your `nuxt.config`.

```bash
npx nuxi@latest module add nuxt-workers
```

That's it! You can add web workers in your Nuxt app ✨

## Usage

Create your web worker in the `~/workers/` directory. It should export any utilities you want to be usable elsewhere:

```ts
// workers/hi.ts
export function hi() {
  return 'Hello from web worker!'
}
```

Then, call it in the rest of your Vue app.

```vue
<script setup lang="ts">
const message = await hi()
</script>…
