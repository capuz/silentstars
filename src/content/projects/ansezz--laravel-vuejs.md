---
repo: "ansezz/laravel-vuejs"
name: "laravel-vuejs"
description: "Laravel and VueJs Blog, using Laravel nova, GraphQL, NuxtJs, Apollo and ...more"
readmeQualityOk: true
url: "https://github.com/ansezz/laravel-vuejs"
homepage: "https://laravel-vuejs.space"
language: "MDX"
languages: ["MDX"]
languagePcts: [63]
topics: ["laravel", "vuejs", "vuex", "nuxtjs", "nuxt", "vue", "vue-router", "graphql", "apollo", "ssr"]
stars: 62
forks: 18
openIssues: 0
closedIssues: 14
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2018-07-05T17:34:42Z"
lastCommitAt: "2026-11-10T11:38:25Z"
lastReleaseAt: "2019-06-03T03:29:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 56
maintainers: ["ansezz", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/139881462/4e260700-801e-11e9-93fb-f27ccdbe4ed3"
---

# Laravel & VueJs · laravel-vuejs.space

Open source blog and community for developers who build with **Laravel** and **Vue**: practical guides, developer tools, cheat sheets, community channels and a free jobs group. The site is a static [Astro](https://astro.build) build served by a Cloudflare Worker at **https://laravel-vuejs.space**. Contact: **contact@laravel-vuejs.space**.

## Stack

| Piece | Version (package.json / lock) | Role |
| --- | --- | --- |
| [Astro](https://astro.build) | `astro` ^7.3.8 | Static output (`output: 'static'`), no UI framework: every page is plain HTML and CSS |
| MDX | `@astrojs/mdx` ^8.0.3, `@astrojs/markdown-remark` ^7.3.2 | Posts in Markdown plus a few components |
| Shiki | `shiki` ^4.5.0, `@shikijs/transformers` ^4.5.0 | Build-time syntax highlighting (light + dark themes, line highlights, diff/focus notations) |
| RSS | `@astrojs/rss` ^4.0.19 | Feeds |
| Fonts | `@fontsource-variable/geist`, `geist-mono`, `newsreader` ^5.3.0 | Self-hosted Geist, Geist Mono and Newsreader |
| Cloudflare | `wrangler` ^4.149.0, `@cloudflare/workers-types` | Worker + static assets, D1, Email Service, cron |
| Tooling | `typescript` ^6.0.3, `@astrojs/check`…
