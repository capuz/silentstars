---
repo: "estjs/essor"
name: "essor"
description: "A clean, near-native, powerful and fast javascript library"
url: "https://github.com/estjs/essor"
homepage: "https://essor-playground.netlify.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 15
forks: 1
openIssues: 0
closedIssues: 18
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-01T08:08:36Z"
lastCommitAt: "2026-06-27T06:23:53Z"
lastReleaseAt: "2026-02-04T01:15:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 72
maintainers: ["xd-jiang", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2726036010ce2fbc4598574f3e0a45aa65fbf1de90b20fc96ac4574658909480/estjs/essor"
discussionCount: 1
---

# Essor - Next Generation Frontend Framework

**just JavaScript & JSX — fine-grained reactivity, no virtual DOM, ultimate performance**

English | [简体中文](./README_CN.md)

</div>

## ✨ Features

- 🚀 **Fine-grained Reactivity** — Signal-based system, no virtual DOM, surgical DOM updates
- ✨ **`$` Prefix Magic** — Declare `const $count = 0` and it auto-becomes a signal via Babel transform
- 🎯 **Zero Config** — Works out of the box with `npm create essor@latest`
- 🔧 **TypeScript** — Full TypeScript support with strict mode
- 🎨 **JSX Support** — Familiar JSX syntax with two-way binding via `bind:value`
- 📦 **Modular** — Tree-shakable packages, tiny bundle size
- 🌐 **SSR/SSG** — Server-side rendering and static site generation
- 🔄 **HMR** — Hot module replacement with component-level granularity
- 🛠️ **Universal Build** — Vite, Webpack, Rollup, Rspack, esbuild support

## 🚀 Quick Start

### 1. Create Project

```bash
npm create essor@latest my-app
cd my-app && npm install
```

### 2. Write a Component

The `$` prefix is the key concept — variables prefixed with `$` are automatically transformed into reactive signals by the Babel plugin:

```jsx
import { createApp } from…
