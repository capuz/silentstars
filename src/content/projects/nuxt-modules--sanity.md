---
repo: "nuxt-modules/sanity"
name: "sanity"
description: "Sanity integration for Nuxt"
readmeQualityOk: true
url: "https://github.com/nuxt-modules/sanity"
homepage: "https://sanity.nuxtjs.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["nuxt", "nuxt-module", "sanity", "cms", "sanity-io", "module", "hacktoberfest"]
stars: 264
forks: 43
openIssues: 30
closedIssues: 144
watchers: 5
contributors: 39
recentReleases: 0
createdAt: "2020-08-07T18:15:28Z"
lastCommitAt: "2026-09-07T08:34:01Z"
lastReleaseAt: "2020-10-06T12:26:20Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 41
maintainers: ["renovate[bot]", "danielroe", "rdunk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/285893677/4e641335-e73a-4052-bea4-ea990fbd343d"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Sanity

> [Sanity](https://sanity.io/) integration for [Nuxt](https://nuxt.com)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-modules/sanity/releases)
- [📖 &nbsp;Documentation](https://sanity.nuxtjs.org)

## Features

- Just bring your `sanity.config.ts` - no additional configuration required
- Ultra-lightweight Sanity client
- Zero-config image/file components + portable text renderer
- Supports GROQ syntax highlighting

[📖 &nbsp;Read more](https://sanity.nuxtjs.org)

## Quick setup

1. Add `@nuxtjs/sanity` dependency to your project

```bash
npx nuxi@latest module add sanity
```

2. Add `@nuxtjs/sanity` to the `modules` section of `nuxt.config.ts`

```js
{
  modules: [
    '@nuxtjs/sanity',
  ],
  sanity: {
    // module options
  }
}
```

**Note**: For Nuxt 2 support without Bridge, install `@nuxtjs/sanity@0.10.0` and follow the instructions at https://v0.sanity.nuxtjs.org.

## Development

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Stub module with `pnpm dev:prepare`
3. Start development server using `pnpm dev`

## License

[MIT License](https://github.com/nuxt-modules/sanity/blob/HEAD/LICENSE)

[npm-version-src]:…
