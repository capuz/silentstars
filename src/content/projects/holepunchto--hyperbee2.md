---
repo: "holepunchto/hyperbee2"
name: "hyperbee2"
description: "Scalable P2P BTree"
readmeQualityOk: true
url: "https://github.com/holepunchto/hyperbee2"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 13
forks: 5
openIssues: 7
closedIssues: 0
watchers: 2
contributors: 13
recentReleases: 3
createdAt: "2025-08-25T09:06:41Z"
lastCommitAt: "2026-10-21T20:00:33Z"
lastReleaseAt: "2026-08-20T19:51:29Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 66
maintainers: ["mafintosh", "lejeunerenard", "chm-diederichs"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f7a648a6417ad932d33d33ad1df633a9aa35439ea020f7eed8b8c06686805bb/holepunchto/hyperbee2"
---

# hyperbee2

```
npm install hyperbee2
```

Next major version for [hyperbee](https://github.com/holepunchto/hyperbee).
Will be merged in there and released a new major when fully done.

An append-only B-tree on top of a [Hypercore][hypercore].

## Usage

```js
import Hyperbee2 from 'hyperbee2'
import Corestore from 'corestore'

// Create/open tree
const tree = new Hyperbee2(new Corestore('./mystore'))

// Wait for tree to become available
await tree.ready()

// Write some values to tree
const batch = tree.write()
batch.tryPut(Buffer.from('name'), Buffer.from('example'))
batch.tryPut(Buffer.from('email'), Buffer.from('example@example.com'))
await batch.flush()

// Read values from tree
const name = await tree.get(Buffer.from('name'))
const email = await tree.get(Buffer.from('email'))

// Print values
console.log(name.value.toString()) // example
console.log(email.value.toString()) // example@example.com
```

## License

Apache-2.0

## API

### Hyperbee

#### `const db = new Hyperbee(store, [options])`

Make a new Hyperbee2 instance. The `store` argument expects a
[Corestore][corestore].

Options include:

```js
{
  key: null,               // Buffer or String. Key of Hypercore to…
