---
repo: "JoshuaKGoldberg/cached-factory"
name: "cached-factory"
description: "Creates and caches values under keys. 🏭"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/cached-factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cache", "factory", "map"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-08-27T02:58:55Z"
lastCommitAt: "2026-10-10T10:04:20Z"
lastReleaseAt: "2026-06-14T21:37:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 70
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e295348c9eb8c816de386e3955b696d14577bebaaee00cb218e7d0d896389fa/JoshuaKGoldberg/cached-factory"
---

Creates and caches values under keys.
	🏭

	
	

	

## Usage

### `CachedFactory`

`cached-factory` exports a `CachedFactory` class that takes in "factory" function in its constructor.
Each time a factory's `.get(key)` is called with any `key` for the first time, that factory is used to create a value under the `key`.

```ts
import { CachedFactory } from "cached-factory";

const cache = new CachedFactory((key) => `Cached: ${key}!`);

// "Cached: apple!"
cache.get("apple");
```

Values are cached so that subsequent `.get(key)` calls with the same `key` instantly return the same value.

```ts
import { CachedFactory } from "cached-factory";

const cache = new CachedFactory((key) => ({ key }));

// { key: "banana" }
cache.get("banana");

// true
cache.get("banana") === cache.get("banana");
```

### `WeakCachedFactory`

The package also exports a `WeakCachedFactory` class that provides the same behavior as `CachedFactory` but uses a `WeakMap` as its underlying data structure.
As such, only objects can be used for keys (no primitives), and there is no `entries()` function.

```ts
import { WeakCachedFactory } from "cached-factory";

const cache = new WeakCachedFactory((key: Context) =>…
