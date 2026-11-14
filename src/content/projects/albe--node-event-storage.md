---
repo: "albe/node-event-storage"
name: "node-event-storage"
description: "An optimized event store for node.js"
readmeQualityOk: true
url: "https://github.com/albe/node-event-storage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["event-stream", "event-storage", "event-sourcing", "embedded", "cqrs", "nodejs", "electron", "eventstore"]
stars: 41
forks: 4
openIssues: 11
closedIssues: 33
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2016-12-04T23:08:24Z"
lastCommitAt: "2026-11-14T22:03:45Z"
lastReleaseAt: "2018-03-14T14:49:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 40
maintainers: ["albe", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e5bf15f9a15e19ce70454cdb4ee8f12e2a7b91b04d88d422cd8a3f20e2b0354/albe/node-event-storage"
---

# node-event-storage

An optimized embedded event store for modern node.js, written in ES6.

📖 **[Full documentation on readthedocs.io](https://node-event-storage.readthedocs.io/en/latest/)**

---

## Why?

There is currently only a single other embedded event store for node/javascript: [node-eventstore](https://github.com/adrai/node-eventstore). It has a few drawbacks:

- Its API requires loading a full Event Stream before committing, making it unfit for frequently-restarting client applications.
- Its embeddable backends (TingoDB, NeDB) do not persist indexes and are slow on initial load.
- Events are fixed to one stream — creating overlapping projection streams is not possible.

**node-event-storage** is built from first principles for append-only workloads, giving you near-optimal write speed with no unnecessary overhead.

---

## Installation

```bash
npm install event-storage
```

> **CommonJS / `require()` users:** version 1.0 is ESM-only. If your project uses `require()` and migrating to ESM is not an option, install the 0.x series (`npm install event-storage@0`) which is functionally equivalent and retains full CJS support.

## Quick Start

```javascript
import {…
