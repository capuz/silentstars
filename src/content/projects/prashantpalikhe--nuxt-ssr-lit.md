---
repo: "prashantpalikhe/nuxt-ssr-lit"
name: "nuxt-ssr-lit"
description: "SSR support for Lit elements in Nuxt3"
readmeQualityOk: true
url: "https://github.com/prashantpalikhe/nuxt-ssr-lit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 58
forks: 14
openIssues: 2
closedIssues: 33
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2022-10-06T15:37:02Z"
lastCommitAt: "2026-11-03T10:52:27Z"
lastReleaseAt: "2023-01-20T09:13:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["steveworkman", "tala91", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a76ea53e7ffaf6af678aff8b7ac9ee92b7686ffc96c248da96ac46f541d3959/prashantpalikhe/nuxt-ssr-lit"
---

# nuxt-ssr-lit

A Nuxt3 module for server-side rendering and client-side hydration of Lit custom elements.

## 🚀 Usage

_Note: This module is for Nuxt3._ Please see this issue [on Nuxt2 support](https://github.com/prashantpalikhe/nuxt-ssr-lit/issues/9). We are looking for assistance in finishing up the module.

### Installation

Install `nuxt-ssr-lit`.

```shell
npx nuxi@latest module add ssr-lit
```

Add following code to modules section of nuxt.config.js.

```js
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    ["nuxt-ssr-lit", { litElementPrefix: ["acme-"] }]
    // ...
  ]
});
```

That's it! Now all the Lit elements prefixed with `acme-` will be server-side rendered. If there are any other custom elements in the project they will be client-side rendered.

## 👨‍💻 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](https://github.com/prashantpalikhe/nuxt-ssr-lit/blob/HEAD/playground) in development mode.
- Run `npx playwright-core install chromium` once: some tests open the playground in Chromium.

## Common issues

### `TypeError: customElements.get(...) is not a constructor`…
