---
repo: "nuxt-modules/harlem"
name: "harlem"
description: "Harlem integration for Nuxt. A state management solution for Vue 3."
readmeQualityOk: true
url: "https://github.com/nuxt-modules/harlem"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [74, 20]
topics: ["store", "vue3", "nuxt", "nuxt-module"]
stars: 83
forks: 3
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-02-14T15:41:37Z"
lastCommitAt: "2026-11-02T13:38:25Z"
lastReleaseAt: "2025-02-09T22:04:54Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 46
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/459220995/1834257d-af10-4011-b18c-a4377e8724cb"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# @nuxtjs/harlem

> [Harlem](https://harlemjs.com/) integration for [Nuxt](https://v3.nuxtjs.org)

Harlem is a simple, unopinionated, lightweight and extensible state management solution for Vue 3. It is designed to suit projects of all sizes and developers of all different levels of experience.

- [👉 &nbsp;More about Harlem](https://harlemjs.com/)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/nuxt-modules/harlem/tree/main/playground)

## Features

- 👌 Zero-config required
- 🐨 Simple, functional state management
- 🧱 Easily extensible
- 💯 Nuxt 3, 4 and 5 support

## Quick setup

1. Add `@nuxtjs/harlem` dependency to your project

```bash
npx nuxi@latest module add harlem
```

2. Add `@nuxtjs/harlem` to the `modules` section of `nuxt.config.ts`

3. Follow the [Harlem guide on how to create and use your stores](https://harlemjs.com/guide/introduction/getting-started.html#create-your-first-store).

   **Note**: `createStore` will be auto-imported wherever you use it, so you don't need to import it yourself.

## Example

Here's a minimal example - you can copy and paste this into your app with no extra steps.

### `~/stores/user.ts`

```ts
const STATE = {…
