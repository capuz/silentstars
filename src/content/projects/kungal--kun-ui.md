---
repo: "kungal/kun-ui"
name: "kun-ui"
description: "🐳 专为 ACGN 网站设计的现代无头 UI 组件库。Kun UI for Vue, Nuxt, React, Next.js, SolidJS, SolidStart — the most advanced UI framework with ultimate SSR support, ultra-low latency, no external packages, production-ready, helping you ship web apps faster."
readmeQualityOk: true
url: "https://github.com/kungal/kun-ui"
homepage: "https://ui.kungal.com"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [55, 27]
topics: ["nuxt", "nuxt3", "nuxt4", "ui", "ui-components", "vue", "ssr"]
stars: 39
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-07T08:23:25Z"
lastCommitAt: "2026-09-25T09:03:19Z"
lastReleaseAt: "2026-06-17T17:06:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 35
maintainers: ["KunMoe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88bab3677e1b2187341af972921f258692a5afdae88cf1a2fc80f195cdc9e664/kungal/kun-ui"
---

# KunUI

A **cross-framework** component library. One design language, one shared
brain, multiple render layers.

> Status: **P0–P2 complete and published to npm.** Shared foundation
> (`@kungal/ui-tokens` + `@kungal/ui-core`), the full Vue layer (`@kungal/ui-vue`,
> **every component migrated, Nuxt-decoupled**), and the Nuxt layer
> (`@kungal/ui-nuxt`) are done. React (`@kungal/ui-react`) is the next phase.
> See [`docs/architecture.md`](https://github.com/kungal/kun-ui/blob/HEAD/docs/architecture.md).

## Use it in your project

**→ Full step-by-step setup: [`docs/INTEGRATION.md`](https://github.com/kungal/kun-ui/blob/HEAD/docs/INTEGRATION.md).**

Nuxt:

```bash
pnpm add @kungal/ui-nuxt @kungal/ui-vue @kungal/ui-core @kungal/ui-tokens tailwindcss @tailwindcss/vite
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({ extends: ['@kungal/ui-nuxt'], css: ['~/assets/css/main.css'] })
```

Plain Vue (Vite):

```bash
pnpm add @kungal/ui-vue @kungal/ui-core @kungal/ui-tokens tailwindcss @tailwindcss/vite
```

```ts
import { KunUI } from '@kungal/ui-vue'
createApp(App).use(KunUI).mount('#app')
```

Both need a Tailwind v4 entry stylesheet (`tailwindcss` + `@kungal/ui-tokens` +…
