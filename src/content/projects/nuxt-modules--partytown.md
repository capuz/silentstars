---
repo: "nuxt-modules/partytown"
name: "partytown"
description: "Partytown integration for Nuxt. Run third-party scripts from a web worker."
readmeQualityOk: true
url: "https://github.com/nuxt-modules/partytown"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["nuxt", "nuxt-module", "partytown", "web-worker", "performance"]
stars: 355
forks: 11
openIssues: 11
closedIssues: 20
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-02-03T10:58:05Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2023-12-04T18:09:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 91
undervaluedScore: 35
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/nuxt-modules/partytown"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# @nuxtjs/partytown

> [Partytown](https://partytown.builder.io/) integration for [Nuxt](https://v3.nuxtjs.org)

## Features

- 👌 Zero-config required
- 🔥 Relocates resource intensive scripts into a web worker
- ⚡️ Speeds up your site
- 💯 Nuxt 3, Nuxt 4, Nuxt 5 and Nuxt Bridge support

## Quick setup

1. Install `@nuxtjs/partytown`!

   ```bash
   npx nuxi@latest module add partytown
   ```

2. Add it to the `modules` section of `nuxt.config.ts`

   ```js
   export default defineNuxtConfig({
     modules: ['@nuxtjs/partytown'],
   })
   ```

3. Add `type: 'text/partytown'` attribute to any scripts you want to be handled by partytown.

   ```vue
   <template>
     <div>
       <Script type="text/partytown" src="https://example.com/analytics.js" />
     </div>
   </template>
   ```

## Configuration

Partytown supports a number of options, which you can pass in your `nuxt.config.ts` file:

```js
export default defineNuxtConfig({
  // ...
  partytown: {
    /**
     * When `true`, Partytown scripts are not minified. See https://partytown.builder.io/configuration
     * on how to enable more logging.
     *
     * @default true in development
     */
    debug: boolean
    /**…
