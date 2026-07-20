---
repo: "avoidwork/tiny-lru"
name: "tiny-lru"
description: "A fast, lightweight LRU (Least Recently Used) cache for JavaScript with O(1) operations and optional TTL support."
readmeQualityOk: true
url: "https://github.com/avoidwork/tiny-lru"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 184
forks: 27
openIssues: 0
closedIssues: 33
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2013-07-26T11:14:15Z"
lastCommitAt: "2026-07-20T06:33:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 41
maintainers: ["dependabot[bot]", "avoidwork"]
openGraphImageUrl: "https://opengraph.githubassets.com/158c69a76f300ad37a7331561fba49f64076e269502879ff8fd5b1205ab5d2a0/avoidwork/tiny-lru"
fundingLinks: ["GITHUB:https://github.com/avoidwork"]
---

# Tiny LRU

A high-performance, lightweight LRU (Least Recently Used) cache for JavaScript with O(1) operations and optional TTL support.

## What is an LRU Cache?

Think of an LRU cache like a limited-size bookshelf. When you add a new book and the shelf is full, you remove the **least recently used** book to make room. Every time you read a book, it moves to the front. This pattern is perfect for caching where you want to keep the most frequently accessed items.

The tiny-lru library provides:
- **O(1)** operations for get, set, delete, and has
- Optional **TTL (Time-To-Live)** support for automatic expiration
- **Zero dependencies** - pure JavaScript
- **100% test coverage** - fully tested and reliable
- **TypeScript support** - full type definitions included
- **~2.2 KB** minified and gzipped (compared to ~12 KB for lru-cache)

## Installation

```bash
npm install tiny-lru
```

Requires Node.js ≥14 or modern browsers with ES Module support.

## Quick Start

```javascript
import { lru } from "tiny-lru";

// Create a cache that holds up to 100 items
const cache = lru(100);

// Store and retrieve data
cache.set("user:42", { name: "Alice", score: 1500 });
const user =…
