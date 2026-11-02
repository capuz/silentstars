---
repo: "danielroe/nuxt-capo"
name: "nuxt-capo"
description: "`capo.js` implementation for Nuxt 3"
readmeQualityOk: true
url: "https://github.com/danielroe/nuxt-capo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["nuxt-module"]
stars: 87
forks: 0
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-23T16:35:40Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2024-04-11T14:56:44Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 44
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/danielroe/nuxt-capo"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# capo.js for Nuxt

> `capo.js` implementation for [Nuxt 3](https://nuxt.com)

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-capo/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-capo/tree/main/playground)

## What is Capo.js
[Capo.js](https://github.com/rviscomi/capo.js) is a small snippet that identifies ways to boost the (perceived) performance of your page, by changing the order of elements in the page's `<head>` section.

## Features

- ✨ validates your `<head>` in dev mode and when prerendering pages
- 🔎 visualises optimal head configuration

## Installation

Install and add `nuxt-capo` to your `nuxt.config`.

```bash
npx nuxi@latest module add capo
```

```js
export default defineNuxtConfig({
  modules: ['nuxt-capo'],
})
```

## Usage

That's it! You should now see debugging info and suggestions when server rendering your routes

| | |
| - | - |
| |  |

## Credits

Thanks to [**@rviscomi**](https://github.com/rviscomi) for making [capo.js](https://github.com/rviscomi/capo.js)!

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install…
