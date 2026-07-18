---
repo: "kawamataryo/vue-word-highlighter"
name: "vue-word-highlighter"
description: "The word highlighter library for Vue 2 and Vue 3."
readmeQualityOk: true
url: "https://github.com/kawamataryo/vue-word-highlighter"
homepage: "https://kawamataryo.github.io/vue-word-highlighter/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["vue", "vuejs", "vue3", "typescript", "vue-components"]
stars: 340
forks: 22
openIssues: 8
closedIssues: 16
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-07-29T23:35:30Z"
lastCommitAt: "2026-07-18T05:47:27Z"
lastReleaseAt: "2022-11-20T06:33:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 35
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/390875517/8935d287-97ca-483a-88cf-215226a59ce7"
---

<p><img width="450" alt="Vue Word highlighter" src="https://user-images.githubusercontent.com/11070996/127788684-906f7756-865f-44ae-b27a-2a80e3c7349b.png"></p>

The word highlighter library for Vue 2 & Vue 3.

### [Demo](https://kawamataryo.github.io/vue-word-highlighter/)
### [CodeSandbox](https://codesandbox.io/s/vue3-word-highlighter-example-u2bhe)

## 📦 Installation

### Vue 3
```bash
yarn add vue-word-highlighter
# or
npm install vue-word-highlighter
```

### Vue 2
powered by [vue-demi](https://github.com/antfu/vue-demi).
```bash
yarn add vue-word-highlighter @vue/composition-api
# or
npm install vue-word-highlighter @vue/composition-api
```

If you get a `Uncaught TypeError: e.defineComponent is not a function` error, and it doesn't work, try [this one](https://github.com/vueuse/vue-demi#manually-switch-versions) from vue-demi

## 🚀 Usage
To use it, just provide it with search words to props and a body of text to default slots.

```vue
<template>
  <WordHighlighter query="vue">
    The word highlighter library for Vue 2.x Vue 3.x 💅
  </WordHighlighter>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordHighlighter from…
