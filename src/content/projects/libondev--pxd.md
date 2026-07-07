---
repo: "libondev/pxd"
name: "pxd"
description: "A Vue 2.7 & 3.2 universal component library. Built-in light/dark theme. PC & mobile ready. Animation-free mode supported."
originalDescription: "A Vue 2.7 & 3.2 universal component library. Built-in light/dark theme. PC & mobile ready. Animation-free mode supported. | 兼容 Vue 2.7 & 3.2 的通用 UI 组件库。内置亮暗色主题，自适应 PC 与移动端，支持完全禁用动画。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/libondev/pxd"
homepage: "https://pxd-ui.netlify.app/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [50, 41]
topics: ["vue", "vue2", "vue3", "ui", "dark-mode", "responsive", "ui-components", "vue-component"]
stars: 18
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-09-24T09:52:11Z"
lastCommitAt: "2026-07-07T06:38:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 58
maintainers: ["libondev"]
openGraphImageUrl: "https://opengraph.githubassets.com/5abb2c87affd8861a50c257080dda1a8ac73b73c59bf17c357343e0098ca8bd4/libondev/pxd"
---

# PXD

A Vue 2.7 & 3.2 universal component library. Built-in light/dark theme. PC & mobile ready. Animation-free mode supported.

[简体中文](https://github.com/libondev/pxd/blob/HEAD/README-CN.md) | [Online Preview](https://pxd-ui.netlify.app/)

> [!WARNING]
> The project is under active development and is not ready for production.

## Features

- Universal: One codebase for Vue 2.7+ and Vue 3.2+
- Responsive: Seamlessly works on both PC and mobile devices
- Built-in light & dark theme, no extra configuration needed
- Motion-safe: Supports fully disabling all animations
- Written in TypeScript with full type definitions
- Vue 3 Composition API with `<script setup>`
- Complete tree-shaking support
- Inspired by the [Geist Design System](https://vercel.com/geist/introduction)

## Contribution

### Dev

```shell
pnpm install

pnpm dev
```

### Build

#### Core only

```shell
pnpm build:lib
```

#### Docs only

```shell
pnpm build:docs
```

#### Deploy

```shell
pnpm build
```

## Contribution Guidelines

### Component Naming Rules

- Components that can be used independently do not need to add -group/-item suffix, such as: `Checkbox`, `Radio`, `Toggle`, `ToggleButton`
- Components that…
