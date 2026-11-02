---
repo: "nuxt-modules/fontaine"
name: "fontaine"
description: "🔤 Font metric overrides to reduce CLS"
readmeQualityOk: true
url: "https://github.com/nuxt-modules/fontaine"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [69, 30]
topics: ["performance", "web-vitals", "cls", "nuxt", "nuxt-module", "hacktoberfest"]
stars: 442
forks: 15
openIssues: 8
closedIssues: 19
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-09-02T14:32:55Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2023-06-08T19:41:55Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 34
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/nuxt-modules/fontaine"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Fontaine

> Font metric fallback implementation for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Changelog](https://github.com/nuxt-modules/fontaine/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/nuxt-modules/fontaine/tree/main/playground)

## Features

**⚠️ `@nuxtjs/fontaine` is under active development. ⚠️**

- 💪 Reduces CLS by using local font fallbacks with crafted font metrics.
- ✨ Generates font metrics and fallbacks automatically.
- ⚡️ Pure CSS, zero runtime overhead.

On the playground project, enabling/disabling this module makes the following differences rendering `/`, with no customisation required:

|             | Before | After   |
| ----------- | ------ | ------- |
| CLS         | `0.34` | `0.013` |
| Performance | `88`   | `98`    |

## What's next

For best performance, you will need to inline _all_ your CSS, not just the font-face fallback rules (which this module does automatically), or there will still be a layout shift when the stylesheet loads (which is why the number above is not zero).

[This PR](https://github.com/nuxt/framework/pull/7160) aims to bring that ability to Nuxt itself.

## Installation

```bash
npx…
