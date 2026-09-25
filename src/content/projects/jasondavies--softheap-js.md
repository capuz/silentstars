---
repo: "jasondavies/softheap.js"
name: "softheap.js"
description: "A JavaScript implementation of Chazelle's Soft Heaps; based on Louis Wasserman's Java implementation."
readmeQualityOk: true
url: "https://github.com/jasondavies/softheap.js"
homepage: "http://www.jasondavies.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2011-06-04T12:28:29Z"
lastCommitAt: "2026-09-25T09:01:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 41
maintainers: ["jasondavies"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e4a5644c4651ae2d222968fcc646b4f5ff68647a85a77bf2edc574795249715/jasondavies/softheap.js"
---

softheap.js
===========

A JavaScript implementation of [A simpler implementation and analysis of
Chazelle’s Soft Heaps][1] by Haim Kaplan and Uri Zwick.

Based on a [Java implementation][2] by Louis Wasserman.

A [soft heap][3] is a variant on the simple heap data structure that has
constant amortised time for 5 types of operations:

 * create
 * insert
 * meld
 * delete
 * findmin

This package currently exposes a smaller API:

```sh
npm install softheap
```

```js
import SoftHeap from "softheap";

const heap = new SoftHeap();
heap.insert(5);
heap.insert(1);

heap.findMin(); // 1
heap.extractMin(); // 1
```

 * `new SoftHeap([compare])`
 * `heap.insert(value)`
 * `heap.findMin()`
 * `heap.extractMin()`
 * `heap.size`

`compare` defaults to numeric ascending order. Stored values must be handled by
the comparator you provide.

`findMin()` peeks the same value the next `extractMin()` call would return,
without removing it.

This package is published as ESM.

`meld` and `delete` are not implemented by this package.

The term "soft heap" stems from the fact that a fixed percentage of values have
their keys "corrupted".  The purpose of these corruptions is to lower the
information…
