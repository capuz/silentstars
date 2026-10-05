---
repo: "nanostores/preact"
name: "preact"
description: "Preact integration for Nano Stores, a tiny state manager with many atomic tree-shakable stores"
readmeQualityOk: true
url: "https://github.com/nanostores/preact"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 24
forks: 8
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 12
recentReleases: 1
createdAt: "2021-10-14T16:51:55Z"
lastCommitAt: "2026-10-05T10:46:30Z"
lastReleaseAt: "2026-10-05T10:46:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 44
maintainers: ["ai", "Seigiard"]
openGraphImageUrl: "https://opengraph.githubassets.com/aafc7e7b8cdc64b31293c0e9ce37bca0bbb6bf9f186b7788198c96c9dfa7c417/nanostores/preact"
fundingLinks: ["GITHUB:https://github.com/ai"]
---

# Nano Stores Preact

     src="https://nanostores.github.io/nanostores/logo.svg">

Preact integration for **[Nano Stores]**, a tiny state manager
with many atomic tree-shakable stores.

- **Small.** Less than 1 KB. Zero dependencies.
- **Fast.** With small atomic and derived stores, you do not need to call
  the selector function for all components on every store change.
- **Tree Shakable.** The chunk contains only stores used by components
  in the chunk.
- Was designed to move logic from components to stores.
- It has good **TypeScript** support.

```tsx
import { useStore } from '@nanostores/preact'

import { $profile } from '../stores/profile.js'

export const Header = () => {
  const profile = useStore($profile)
  return <header>{profile.name}</header>
}
```

[Nano Stores]: https://github.com/nanostores/nanostores/

---

---

## Options

### Keys

Use the `keys` option to re-render only on specific key changes:

```tsx
export const Header = () => {
  const profile = useStore($profile, { keys: 'name' })
  return <header>{profile.name}</header>
}
```

Listening to a base key will automatically trigger a re-render
if any of its nested properties mutate.

```tsx
// Will listen…
