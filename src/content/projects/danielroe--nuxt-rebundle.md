---
repo: "danielroe/nuxt-rebundle"
name: "nuxt-rebundle"
description: "Bundler optimisations for Nuxt"
readmeQualityOk: true
url: "https://github.com/danielroe/nuxt-rebundle"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 64
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-21T23:33:43Z"
lastCommitAt: "2026-11-02T13:38:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 78
undervaluedScore: 40
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b53b5765f6eb9ced8665473ae3b93295c8fc1cd64812004d297d5b005a2d5/danielroe/nuxt-rebundle"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Rebundle

> Bundler optimisations for [Nuxt](https://nuxt.com)

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-rebundle/blob/main/CHANGELOG.md)

> [!WARNING]  
> This module is a work-in-progress laboratory for exploring bundler optimisations in Nuxt.

## Features

- ⚡️ automatically splits out `useAsyncData` fetcher functions into async chunks (for use with static site generation)

## Installation

Install and add `nuxt-rebundle` to your `nuxt.config`.

```bash
npx nuxi@latest module add nuxt-rebundle
```

```js
export default defineNuxtConfig({
  modules: ['nuxt-rebundle'],
})
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Stub module with `pnpm dev:prepare`
- Run `pnpm dev` to start [playground](https://github.com/danielroe/nuxt-rebundle/blob/HEAD/playground) in development mode

## License

Made with ❤️

Published under the [MIT License](https://github.com/danielroe/nuxt-rebundle/blob/HEAD/LICENCE).

[npm-version-src]: https://npmx.dev/api/registry/badge/version/nuxt-rebundle
[npm-version-href]: https://npmx.dev/package/nuxt-rebundle…
