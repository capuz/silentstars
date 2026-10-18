---
repo: "gammazero/radixtree"
name: "radixtree"
description: "Adaptive radix tree (prefix-tree or compact-trie)"
readmeQualityOk: true
url: "https://github.com/gammazero/radixtree"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["radix-tree", "radix-trie", "prefix-tree", "trie", "data-structures", "go", "golang"]
stars: 41
forks: 8
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-01-23T23:01:14Z"
lastCommitAt: "2026-10-18T08:16:21Z"
lastReleaseAt: "2024-09-11T03:00:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 27
maintainers: ["gammazero"]
openGraphImageUrl: "https://opengraph.githubassets.com/c97dfd68f78ec34c03588ffcfcc8ab8b03fe42223dbdc561fe51c91bd38e13b9/gammazero/radixtree"
---

# radixtree

Package `radixtree` implements an Adaptive [Radix Tree](https://en.wikipedia.org/wiki/Radix_tree), also known as a compressed [trie](https://en.wikipedia.org/wiki/Trie) or compact prefix tree. Use it to look up values by key, find values whose keys share a common prefix, or find values whose keys lie along the path to a given key.

The tree uses a radix-256 structure where each key symbol is a byte, giving up to 256 branches per node. Nodes hold only as many children as needed, keeping memory proportional to the data stored.

Read operations (`Get`, `Iter`, `IterAt`, `IterPath`) allocate no heap memory and are safe to call concurrently. Write operations are not synchronized; callers that mix reads and writes must coordinate access themselves.

## Features

- **Efficient**: All operations are O(key-length). Reads allocate no heap memory.
- **Ordered**: Iteration visits keys in lexical order, making output deterministic.
- **Nil-safe**: `Get` distinguishes between a missing key and a key whose value is `nil`.
- **Compact**: Keys with a common prefix share storage. Well-suited for timestamps, file paths, geohashes, and network addresses.
- **Iterators**: Go 1.23 range…
