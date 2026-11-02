---
repo: "danielroe/stream-vue"
name: "stream-vue"
description: "Vue component for Cloudflare Stream."
readmeQualityOk: true
url: "https://github.com/danielroe/stream-vue"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["cloudflare", "stream", "vuejs", "vue"]
stars: 30
forks: 4
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2020-09-26T20:08:25Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2024-05-29T08:15:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 54
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/stream-vue"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

> Vue component for [Cloudflare Stream](https://www.cloudflare.com/products/cloudflare-stream/).

**Note that this is not an official component.**

## Quick Start

First install `stream-vue`:

```bash
pnpm add stream-vue

# or
yarn add stream-vue
npm install stream-vue --save
```

## Usage

```vue
<script setup>
import { VideoStream } from 'stream-vue'
</script>

<template>
  <VideoStream controls src="YOUR_VIDEO_ID_OR_SIGNED_URL" />
</template>
```

### Nuxt support

To use with Nuxt 2, make sure to add the following to your `nuxt.config.js`:

```js
vue: {
  config: {
    ignoredElements: ['stream']
  }
}
```

See [@cloudflare/stream-react](https://github.com/cloudflare/stream-react) for more props and events.

## Inspirations

This is just a Vue fork of [@cloudflare/stream-react](https://github.com/cloudflare/stream-react).

## Contributors

This has been developed to suit my needs but additional use cases and contributions are very welcome.

## License

[MIT License](https://github.com/danielroe/stream-vue/blob/HEAD/LICENSE) - Copyright &copy; Daniel Roe
