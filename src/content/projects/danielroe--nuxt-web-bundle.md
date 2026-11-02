---
repo: "danielroe/nuxt-web-bundle"
name: "nuxt-web-bundle"
description: "Generate web bundles with Nuxt"
readmeQualityOk: true
url: "https://github.com/danielroe/nuxt-web-bundle"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 35]
stars: 58
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-10-15T10:41:17Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-06-08T12:01:06Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 44
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/nuxt-web-bundle"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Web Bundle

> Generate web bundles with [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-web-bundle/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-web-bundle/tree/main/playground)

## Features

**⚠️ `nuxt-web-bundle` is an experiment. ⚠️**

- 📲 Share your website as a single file over Bluetooth.
- ✨ Run it offline in your origin's context
- ⚡️ Try out experimental web features.

## Installation

With `pnpm`

```bash
pnpm add -D nuxt-web-bundle
```

Or, with `npm`

```bash
npm install -D nuxt-web-bundle
```

Or, with `yarn`

```bash
yarn add -D nuxt-web-bundle
```

## Usage

```js
export default defineNuxtConfig({
  modules: ['nuxt-web-bundle'],
  webBundle: {
    baseURL: 'https://my-website.com',
    // filename: 'bundle.wbn',
  },
})
```

That's it! Now when you run `nuxi build` or `nuxi generate`, a web bundle will be generated _instead_ of a server or static directory.

As mentioned earlier, this is an experiment, and in order to experiment with Web Bundles, you can follow [the steps here](https://web.dev/web-bundles/#playing-around-with-web-bundles) to enable usage in your…
