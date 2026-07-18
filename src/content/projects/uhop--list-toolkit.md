---
repo: "uhop/list-toolkit"
name: "list-toolkit"
description: "Zero-dependency list-based data structures: linked lists (doubly/singly linked, circular), caches (LRU, LFU, FIFO), heaps, queues, stacks, splay trees."
readmeQualityOk: true
url: "https://github.com/uhop/list-toolkit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["lists", "cache", "circular-list", "data-structures", "doubly-linked-list", "esm", "fifo-cache", "heap", "lfu-cache", "linked-list"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-10-21T05:25:49Z"
lastCommitAt: "2026-07-18T05:47:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 65
maintainers: ["uhop", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c86533f31ed1bac3604822840f42fd2c20f967656cdba51a48f34c5be01129f1/uhop/list-toolkit"
fundingLinks: ["GITHUB:https://github.com/uhop", "BUY_ME_A_COFFEE:https://buymeacoffee.com/uhop"]
discussionCount: 1
---

# List toolkit [][npm-url]

[npm-img]: https://img.shields.io/npm/v/list-toolkit.svg
[npm-url]: https://npmjs.org/package/list-toolkit

Efficient list-based data structures for JavaScript.
Pure ESM, zero dependencies, works in Node.js, Bun, Deno, and browsers.

Data structures included:

- **Linked lists** — doubly and singly linked, circular. Node-based (link properties on your objects) or value-based (wraps values in nodes). Hosted (sentinel head) or headless (external pointer).
- **NT list converters** — convert null-terminated lists to/from circular lists in place.
- **Heaps** — min heap, leftist heap, skew heap, pairing heap (O(1) push/merge, decrease-key by handle), indexed heap (O(1) membership, update/remove by handle).
- **Caches** — LRU, LFU, FIFO, random, segmented LRU (scan-resistant), CLOCK (second chance). Includes a decorator for functions, methods, and getters.
- **Queue, Stack, and Deque** — list-backed adapters; the deque adds O(1) both-end operations and `rotate()`.
- **Ring buffer** — array-backed deque on a circular buffer: fastest raw throughput, O(1) random access, optional keep-last-N bounded mode.
- **Unrolled list** — chunked value list for bulk…
