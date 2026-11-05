---
repo: "brickhouse-tech/debug-fabulous"
name: "debug-fabulous"
description: "Debug extensions for visionmedia's debug"
readmeQualityOk: true
url: "https://github.com/brickhouse-tech/debug-fabulous"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [80, 20]
stars: 6
forks: 1
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-10-11T21:35:35Z"
lastCommitAt: "2026-11-05T11:25:26Z"
lastReleaseAt: "2026-04-23T12:06:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 80
maintainers: ["nmccready", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0499a63a9565f5c819149be19fce6c888c36dcfc79badc92d155b8e02a086cb/brickhouse-tech/debug-fabulous"
fundingLinks: ["GITHUB:https://github.com/nmccready", "GITHUB:https://github.com/brickhouse-tech"]
---

# debug-fabulous

**Lazy-evaluation wrapper for [`debug`](https://github.com/debug-js/debug) — skip string building entirely when logging is disabled.**

## Why?

The `debug` module always evaluates its arguments, even when the namespace is disabled. If you're building expensive strings — JSON serialization, large object inspection, string concatenation — you pay the cost even when nobody's reading the output.

**debug-fabulous** wraps `debug` with lazy evaluation. Pass a function instead of a string, and it only runs when the namespace is actually enabled. When logging is off, the call is a no-op — no string allocation, no concatenation, no wasted cycles.

This matters at scale. Libraries like [`gulp-sourcemaps`](https://www.npmjs.com/package/gulp-sourcemaps) (700K+ weekly downloads) use debug-fabulous as a transitive dependency for exactly this reason.

## Install

```bash
npm install debug-fabulous
```

## Quick Start

```js
const debugFab = require('debug-fabulous');
const debug = debugFab()('my-app');

// Lazy evaluation — the function only runs if 'my-app' is enabled
debug(() => 'user object: ' + JSON.stringify(largeUserObject));

// Plain strings still work
debug('server…
