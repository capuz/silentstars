---
repo: "nuxt-modules/critters"
name: "critters"
description: "CSS optimization using critters for Nuxt"
readmeQualityOk: true
url: "https://github.com/nuxt-modules/critters"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 190
forks: 4
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2021-06-22T15:01:03Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2023-07-10T15:29:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 40
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/nuxt-modules/critters"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# @nuxtjs/critters

> CSS optimization using [beasties](https://github.com/danielroe/beasties) (formerly [critters](https://github.com/GoogleChromeLabs/critters)) for [Nuxt](https://nuxtjs.org)

## Features

- Zero-configuration required
- Stylesheets are compiled at build time, so no CSS parser or DOM is needed at runtime
- Critical CSS automatically injected to page
- Works with runtime SSR and Nitro prerendering

## Quick setup

1. Add `@nuxtjs/critters` dependency to your project

```bash
yarn add @nuxtjs/critters # or npm install @nuxtjs/critters
```

2. Add `@nuxtjs/critters` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/critters',
  ],
}
```

## How it works

Nuxt has a number of ways to optimize your CSS in production:

1. ✅ Nuxt uses [`cssnano`](https://cssnano.github.io/cssnano/) in the build step to minify CSS rules
2. 📦 You can enable [`purgecss`](https://github.com/Developmint/nuxt-purgecss) to remove unused CSS rules from your bundle.
3. ✅ with `@nuxtjs/critters` you can now extract CSS files and load them separately, just inlining the CSS necessary to render the page.

At build time the module compiles every CSS asset emitted by…
