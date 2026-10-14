---
repo: "cabinet-fe/ultra-ui"
name: "ultra-ui"
description: "A Vue 3 component library focused on ultimate performance, ultimate maintainability, and ultimate developer experience"
originalDescription: "一个专注于极致性能, 极致可维护性, 极致开发体验的Vue3组件库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cabinet-fe/ultra-ui"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [50, 38]
topics: ["vue3", "vue3ui"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 46
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2023-02-01T08:27:09Z"
lastCommitAt: "2026-10-14T08:58:23Z"
lastReleaseAt: "2026-04-24T02:03:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 84
maintainers: ["HodgeWen"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f7e10133828103385e8bd18afab0c9570f1bc9eeeda71123594598290f01ed/cabinet-fe/ultra-ui"
---

---

## ✨ Features

- 🎯 **Ultimate Performance** - Carefully optimized so that every component delivers outstanding performance
- 💎 **TypeScript** - Fully developed in TypeScript, with complete type definitions
- 🎨 **70+ component directories / 80+ U component exports** - A rich component library covering common business scenarios
- 📦 **On-demand import** - Supports Tree Shaking to reduce bundle size
- 🛠️ **Developer-friendly** - Clear code structure, easy to maintain and extend
- 🌈 **Modern** - Built on the latest features of Vue 3.5+

## 📦 Installation

Using bun (recommended):

```bash
bun add @veltra/desktop @veltra/icons
```

Using npm:

```bash
npm install @veltra/desktop @veltra/icons
```

Using yarn:

```bash
yarn add @veltra/desktop @veltra/icons
```

Using pnpm:

```bash
pnpm add @veltra/desktop @veltra/icons
```

## 🚀 Quick Start

### Full import

```ts
import { createApp } from 'vue'
import UltraUI from '@veltra/desktop/install'
import App from './App.vue'

const app = createApp(App)
app.use(UltraUI)
app.mount('#app')
```

### On-demand import

```vue
<template>
  <u-button type="primary" @click="handleClick">点击我</u-button>
  <u-input v-model="value"…
