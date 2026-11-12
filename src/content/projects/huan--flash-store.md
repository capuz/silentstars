---
repo: "huan/flash-store"
name: "flash-store"
description: "FlashStore is a high-performance Key-Value Persistent Local Database using ES6 Map's API (Async & Sync), Powered by LevelDB/RocksDB/SQLite and TypeScript."
readmeQualityOk: true
url: "https://github.com/huan/flash-store"
homepage: "https://paka.dev/npm/flash-store"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 36]
topics: ["nosql", "database"]
stars: 21
forks: 4
openIssues: 7
closedIssues: 36
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-09-23T18:12:16Z"
lastCommitAt: "2026-11-12T05:39:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["huan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a810020c14201bbd4c5d5b22b234781ec255fabf1cbd736de96f5682d28c7bf5/huan/flash-store"
---

# flash-store

FlashStore is Key-Value persistent storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.

## Requirements

1. Node.js v10 or above

## Examples

Try the following command

```shell
npm install
npm run demo
```

The basic function as follows:

```ts
import { FlashStore } from 'flash-store'

const flashStore = new FlashStore('flashstore.workdir')

await flashStore.set(1, 'a')
console.log(`key: 1, value: ${await flashStore.get(1)}`)
// Output: 'a'

await flashStore.del(1)
console.log(`key: 1, value: ${await flashStore.get(1)}`)
// Output: undefined
```

## Supported Backend

| Backend | Flash Store | Install NPM Command |
| :--- | :--- | :--- |
| LevelDB |v1.0 | `npm install flash-store@1` |
| SQLite | v0.20 | `npm install flash-store@0.20` |
| Medea | v0.18 | ~~npm install flash-store@0.18~~ (deprecated) |
| SnapDB | v0.16 | ~~npm install flash-store@0.16~~ (deprecated) |
| RocksDB | v0.14 | `npm install flash-store@0.14` |
| LevelDB |v0.12 | `npm install flash-store@0.12` |

> SnapDB & Medea were all deprecated because of lots of unknown bugs.

## API Reference

### `FlashStore`

FlashStore implements the Standard…
