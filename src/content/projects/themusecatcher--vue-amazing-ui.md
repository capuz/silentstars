---
repo: "themusecatcher/vue-amazing-ui"
name: "vue-amazing-ui"
description: "基于 Vue3 + TypeScript + Vite 开发的 UI 组件库！主题可调，使用 TypeScript 和 SFC，支持 tree shaking，有点意思 😉"
readmeQualityOk: true
url: "https://github.com/themusecatcher/vue-amazing-ui"
homepage: "https://themusecatcher.github.io/vue-amazing-ui/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [57, 42]
topics: ["less", "typescript", "vite", "vitepress", "vue3", "components", "tree-shaking", "components-library"]
stars: 370
forks: 55
openIssues: 3
closedIssues: 42
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-02-20T08:46:04Z"
lastCommitAt: "2026-11-09T11:58:27Z"
lastReleaseAt: "2026-07-05T03:25:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["themusecatcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/59a4d8c576b26e7d1083634607258486919fa64065fd8afb187cdc96381932ce/themusecatcher/vue-amazing-ui"
---

## Documentation

[Vue Amazing UI](https://themusecatcher.github.io/vue-amazing-ui/)

## Features

- The component library is implemented with `Vue@3.5.44` + `TypeScript@5.9.3` + `Vite@7.3.7` + `Less@4.9.1`.
- Currently, it includes `73` basic UI components and `16` utility functions, with continuous exploration and updates ongoing...
- Theme Customizable, all you need is to provide a theme color, then all the stuffs will be done by me.
- By the way, they are all treeshakable.
- All the stuff in Vue Amazing UI is written in TypeScript. It can work with your typescript project seamlessly.
- All components are built in single file component `SFC` and can be used independently.
- Ready to use out of the box, no fuss.

## Installation

```sh
pnpm add vue-amazing-ui
# or
npm install vue-amazing-ui
# or
yarn add vue-amazing-ui
# or
bun add vue-amazing-ui
```

## Use Components

**Global Registration All Components (Not Recommended)**

_No tree-shaking. Bundle will have redundant codes._

```ts
import { createApp } from 'vue'
import App from './App.vue'
import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'

const app = createApp(App)
app.use(VueAmazingUI)…
