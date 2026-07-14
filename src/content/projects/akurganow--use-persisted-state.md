---
repo: "Akurganow/use-persisted-state"
name: "use-persisted-state"
description: "useState hook with persistence in storage"
readmeQualityOk: true
url: "https://github.com/Akurganow/use-persisted-state"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 20
forks: 7
openIssues: 1
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-09-04T10:27:20Z"
lastCommitAt: "2026-07-14T05:53:35Z"
lastReleaseAt: "2020-06-02T10:08:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 55
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5a207d7cd42aae409410d878d9ff5ed3f20ef5d042602b460b0b71b37280822/Akurganow/use-persisted-state"
fundingLinks: ["GITHUB:https://github.com/Akurganow", "PATREON:https://patreon.com/akurganow"]
---

# usePersistedState

Persists the state to localStorage, sessionStorage or any custom storage

## Features

- Persist the state to `localStorage`, `sessionStorage` or almost anything else implements [storage API](https://github.com/Akurganow/use-persisted-state/blob/master/docs/storage-api.md)
- The state factory takes as many keys as needed, so you don't have to call the factory for each variable
- Written with the TypeScript, the definitions go with the library
- No third-party dependencies

## Example

```jsx
import createPersistedState from '@plq/use-persisted-state'
import storage from '@plq/use-persisted-state/lib/storages/local-storage'

const [usePersistedState] = createPersistedState('example', storage)

export default function App() {
  const [count, setCount] = usePersistedState('count', 0)
  const handleIncrement = () => setCount(prevCount => prevCount + 1)

  return (
      {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}
```

## Requirement
To use `@plq/use-persisted-state`, you must use `react@16.8.0` or greater which includes Hooks.
The library is fully compatible with React 18 and React 19.

## React 19 Compatibility

This library is…
