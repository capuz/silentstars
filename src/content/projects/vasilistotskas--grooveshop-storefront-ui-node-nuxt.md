---
repo: "vasilistotskas/grooveshop-storefront-ui-node-nuxt"
name: "grooveshop-storefront-ui-node-nuxt"
description: "Nuxt Ecommerce"
readmeQualityOk: true
url: "https://github.com/vasilistotskas/grooveshop-storefront-ui-node-nuxt"
homepage: "https://demo.grooveshop.space"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 37]
topics: ["eshop", "i18n", "zod", "pwa", "spa", "typescript", "ecommerce", "nuxt", "vue"]
stars: 19
forks: 6
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-07-05T14:07:59Z"
lastCommitAt: "2026-10-12T11:15:29Z"
lastReleaseAt: "2023-07-09T18:05:05Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 58
maintainers: ["vasilistotskas", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/79087dfc55d25cf2b51292b618db79e97ae93b41382b1ae86fddae01a5ddb2ee/vasilistotskas/grooveshop-storefront-ui-node-nuxt"
---

# GrooveShop Nuxt Storefront

A full-featured **Nuxt 4 SSR e-commerce storefront** built with Vue 3 Composition API, TypeScript, and Tailwind CSS 4. Communicates with a Django REST API backend via a Nitro proxy server.

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Nuxt 4](https://nuxt.com/) (SSR) |
| **UI** | [Vue 3](https://vuejs.org/) Composition API, [`@nuxt/ui`](https://ui.nuxt.com/) v4, [Tailwind CSS 4](https://tailwindcss.com/) |
| **State** | [Pinia](https://pinia.vuejs.org/) |
| **i18n** | [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) (`el` default, `en`) |
| **Auth** | [django-allauth](https://docs.allauth.org/) headless + `nuxt-auth-utils` |
| **Payments** | Viva Wallet (primary), [Stripe](https://stripe.com/) |
| **Search** | [Meilisearch](https://www.meilisearch.com/) |
| **Testing** | [Vitest](https://vitest.dev/) + `@nuxt/test-utils` |
| **Package Manager** | [pnpm](https://pnpm.io/) — version pinned by `packageManager` in `package.json` |
| **Runtime** | Node.js 24 |

## Features

- **Server-Side Rendering** with hydration and build caching
- **Product Catalog** with categories, advanced filters (price range, attributes,…
