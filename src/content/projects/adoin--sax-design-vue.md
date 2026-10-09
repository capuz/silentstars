---
repo: "adoin/sax-design-vue"
name: "sax-design-vue"
description: "Beautiful Vue3 UI components base on Vuesax Vue2 version"
readmeQualityOk: true
url: "https://github.com/adoin/sax-design-vue"
homepage: "https://sax-design.emssion.com/"
language: "Vue"
languages: ["Vue"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-06T03:31:39Z"
lastCommitAt: "2026-10-09T10:50:05Z"
lastReleaseAt: "2026-09-30T09:59:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 60
maintainers: ["adoin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9337e951299d63bc2480d1c36facf6ab037629571d82df65202662c7a40f95c/adoin/sax-design-vue"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/vuesax-alpha"]
---

- Vue 3 Composition API
- Written in TypeScript
- Components aligned with [Vuesax 3.x](https://vuesax.com/) design language

English | [简体中文](https://github.com/adoin/sax-design-vue/blob/HEAD/README.zh-CN.md)

[Website](https://sax-design.emssion.com/) · [GitHub Pages mirror](https://adoin.github.io/sax-design-vue/)

## Getting started

Install Vue and **sax-design-vue**:

```bash
pnpm add vue sax-design-vue
```

Register globally in your app entry:

```ts
import { createApp } from 'vue'
import SaxDesignVue from 'sax-design-vue'
import 'sax-design-vue/theme-chalk/index.css'
import 'sax-design-vue/theme-chalk/dark/css-vars.css'

import App from './App.vue'

createApp(App).use(SaxDesignVue).mount('#app')
```

See the full guide on the [documentation website](https://sax-design.emssion.com/).

## Programmatic dialogs

```ts
import { SDialogBox } from 'sax-design-vue'

await SDialogBox.alert('Saved successfully')
try {
  await SDialogBox.confirm('Delete this item?')
} catch {
  // The user cancelled or closed the dialog
}
```

## Development

```bash
pnpm install
pnpm dev          # full documentation site (also pnpm docs:dev)
pnpm dev --component textarea          # one component,…
