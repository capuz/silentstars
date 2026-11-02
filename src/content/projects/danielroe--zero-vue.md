---
repo: "danielroe/zero-vue"
name: "zero-vue"
description: "Vue bindings for Zero"
readmeQualityOk: true
url: "https://github.com/danielroe/zero-vue"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["sync", "vue", "zero"]
stars: 179
forks: 7
openIssues: 1
closedIssues: 10
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2024-12-27T15:11:08Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2025-12-04T16:46:59Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 41
maintainers: ["renovate[bot]", "danielroe", "Gerbuuun"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/danielroe/zero-vue"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# zero-vue

> Vue bindings for [Zero](https://zero.rocicorp.dev/)

## Usage

Install package:

```sh
# npm
npm install zero-vue

# pnpm
pnpm install zero-vue
```

Creating `useZero` and `useQuery` composables:
```ts
import { createZeroComposables } from 'zero-vue'
import { mutators } from './mutators.ts'
import { schema } from './schema.ts'

// see docs for all options: https://zero.rocicorp.dev/docs/introduction
const { useZero, useQuery } = createZeroComposables({
  userID,
  server: import.meta.env.VITE_PUBLIC_SERVER,
  schema,
  mutators,
  kvStore: 'mem',
})

// OR with computed options:
const { useZero, useQuery } = createZeroComposables(() => ({
  userID: userID.value,
  server: import.meta.env.VITE_PUBLIC_SERVER,
  schema,
  mutators,
  kvStore: 'mem',
}))

// OR with a Zero instance:
const { useZero, useQuery } = createZeroComposables({
  zero: new Zero({
    userID,
    server: import.meta.env.VITE_PUBLIC_SERVER,
    schema,
    mutators,
    kvStore: 'mem',
  }),
})
```

To query data:
```js
import { useQuery, useZero } from './use-zero.ts'

const zero = useZero()
const { data: users } = useQuery(() => zero.value.query.user)
```

> [!TIP]
> See [the Vue…
