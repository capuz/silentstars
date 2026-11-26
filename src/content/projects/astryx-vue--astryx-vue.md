---
repo: "astryx-vue/astryx-vue"
name: "astryx-vue"
description: "Vue 3 implementation of Astryx — components, themes, and an agent-friendly CLI. Not affiliated with Meta."
readmeQualityOk: true
url: "https://github.com/astryx-vue/astryx-vue"
homepage: "https://astryx-vue.pages.dev"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [57, 29]
topics: ["astryx", "css-variables", "design-system", "typescript", "ui", "vue", "vue3"]
stars: 14
forks: 1
openIssues: 2
closedIssues: 163
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-20T17:58:21Z"
lastCommitAt: "2026-11-26T13:04:02Z"
lastReleaseAt: "2026-10-14T08:22:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["ShenQingchuan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6dd1b6c53bcd5d6fb077af52c8064940605fbc635ecadeeefe83134ee9bc91a/astryx-vue/astryx-vue"
---

English | [简体中文](https://github.com/astryx-vue/astryx-vue/blob/HEAD/README.zh-CN.md)

# astryx-vue

Unofficial Vue 3 port of Astryx — components, themes, and an agent-friendly CLI.

> Not affiliated with, endorsed by, or supported by Meta. The original Astryx is at <https://github.com/facebook/astryx>.

## Install

```sh
pnpm add @astryx-vue/core @astryx-vue/themes
```

The only peer dependency is `vue` `^3.5.0`. npm and yarn use the same package names.

## Quick start

Import one theme at the app entry. Neutral also applies on `:root`, and it brings Figtree and JetBrains Mono.

```ts
import '@astryx-vue/themes/neutral.css'
```

Import each component from its own subpath. That entry loads the matching structural styles. StyleX and UnoCSS are not required.

```vue
<script setup lang="ts">
import { Button } from '@astryx-vue/core/Button'
</script>

<template>
  <Button label="Get started" />
</template>
```
