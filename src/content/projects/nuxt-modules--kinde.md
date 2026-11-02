---
repo: "nuxt-modules/kinde"
name: "kinde"
description: "Kinde integration for Nuxt"
readmeQualityOk: true
url: "https://github.com/nuxt-modules/kinde"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 92
forks: 8
openIssues: 8
closedIssues: 32
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2023-09-06T14:42:28Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2024-04-11T06:26:10Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 46
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/688048999/79219162-7b11-4f4a-9d03-967f38d81532"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# Nuxt Kinde

[Kinde](https://kinde.com/) integration for [Nuxt](https://nuxt.com).

- [✨ &nbsp;Release Notes](https://github.com/nuxt-modules/kinde/blob/HEAD/CHANGELOG.md)
  
  

## Quick Setup

1. Add `@nuxtjs/kinde` dependency to your project

```bash
npx nuxi@latest module add kinde
```

2. Add `@nuxtjs/kinde` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@nuxtjs/kinde'],
  kinde: {
    // This is true by default and adds 'auth-logged-in' and 'auth-logged-out'
    // middleware to your Nuxt application.
    // 
    // middleware: false,
    //
    // enable the debug `/api/health` endpoint
    // debug: true,
    // 
    // Set custom endpoints in case you use any of the default routes for other purposes
    // endpoints: {
    //   callback: '/api/callback',
    //   login: '/api/login',
    //   register: '/api/register',
    //   health: '/api/health',
    //   logout: '/api/logout'
    //   access: '/api/access'
    //   portal: '/api/portal'
    // }
  }
})
```

Add the following configuration to your `.env` file replacing the values in `< >` with your Kinde credentials.

> **NOTE:** The Nuxt Kinde module requires the…
