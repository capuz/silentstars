---
repo: "webreinvent/vaah-docs"
name: "vaah-docs"
description: "VaahCMS Documentation"
readmeQualityOk: true
url: "https://github.com/webreinvent/vaah-docs"
homepage: "https://docs.vaah.dev"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [70, 27]
topics: ["vaahcms", "docs"]
stars: 10
forks: 6
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 38
recentReleases: 0
createdAt: "2021-07-14T19:42:32Z"
lastCommitAt: "2026-09-18T14:02:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["we-vikram-wri231", "themodernpk"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bf556e672301821dc294750c41c8a2bcc8e95ccc7f1b1280d3a7f7d30716570/webreinvent/vaah-docs"
---

# Vaah Docs

Documentation site for the Vaah product family — [VaahCMS](https://vaah.dev), VaahCLI, VaahFlutter, VaahStore, VaahNuxt and VaahShare — maintained by [WebReinvent](https://github.com/webreinvent).

Live site: [https://vaah.dev](https://vaah.dev)

## Stack

- [Nuxt 3](https://nuxt.com) (SSR + hybrid rendering via `routeRules`)
- [Nuxt UI Pro](https://ui.nuxt.com/pro) — extended in `nuxt.config.ts`
- [@nuxt/content](https://content.nuxt.com) — Markdown/YAML docs in `content/`
- [@scalar/api-reference](https://github.com/scalar/scalar) — API reference renderer for VaahStore OpenAPI
- [Pinia](https://pinia.vuejs.org) — client state
- `nuxt-og-image` — social cards
- `apexcharts` / `flowbite` — charts and UI helpers

## Project Structure

```
.
├── content/              Markdown/YAML sources rendered by @nuxt/content
│   ├── 1.getting-started
│   ├── 2.vaahcms-2x
│   ├── 3.vaahcms-1x
│   ├── 4.guide
│   ├── 5.vaahcli
│   ├── 6.laravel
│   ├── 7.vaahflutter
│   ├── 8.vaahstore
│   ├── 9.testing
│   ├── 10.vaahshare
│   └── 11.vaahnuxt
├── pages/                File-based routes (e.g. pages/vaahstore/api.vue)
├── public/               Static assets, including the OpenAPI…
