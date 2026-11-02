---
repo: "danielroe/vue-sanity"
name: "vue-sanity"
description: "Sanity integration for Vue Composition API"
readmeQualityOk: true
url: "https://github.com/danielroe/vue-sanity"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["vue", "sanity", "composition-api", "typescript", "javascript", "vuejs", "nuxt", "hacktoberfest"]
stars: 62
forks: 6
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-03-26T10:28:53Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2020-04-14T15:45:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 51
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/danielroe/vue-sanity"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

> Composition API methods to incorporate [Sanity](https://www.sanity.io/) into a Vue project.

## Features

- 🗄 **Caching:** Query results are cached.
- 💪 **TypeScript**: Written in TypeScript.
- 📡 **Real-time**: Supports previews using Sanity listening mode.
- 🖇 **Composition API**: Vue3/Vue2 support using `vue-demi`.
- 📝 **SSR support**: Compatible with server-side rendering with Nuxt and vanilla Vue.

## Quick Start

First install `vue-sanity`:

```bash
yarn add vue-sanity

# or npm

npm install vue-sanity --save
```

Now configure Sanity in your root component:

```js
import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup() {
    useSanityClient({
      projectId: 'myprojectid',
      dataset: 'production',
      useCdn: process.env.NODE_ENV === 'production',
    })
  },
}
```

Then you can use `useSanityFetcher` in any child component:

```vue
<script>
import { useSanityFetcher } from 'vue-sanity'

export default {
  setup() {
    const { data: title } = useSanityFetcher('*[_type == "article"][0].title')

    // OR use a factory function
    const { data: title } = useSanityFetcher(
      () => `*[slug.current == ${slug.value}][0].title`…
