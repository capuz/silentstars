---
repo: "ltwlf/json-diff-ts"
name: "json-diff-ts"
description: "A diff tool for JavaScript written in TypeScript."
readmeQualityOk: true
url: "https://github.com/ltwlf/json-diff-ts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 194
forks: 30
openIssues: 0
closedIssues: 43
watchers: 3
contributors: 15
recentReleases: 4
createdAt: "2019-11-30T08:15:21Z"
lastCommitAt: "2026-11-14T10:43:18Z"
lastReleaseAt: "2026-11-14T10:46:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 38
maintainers: ["ltwlf", "rune-oai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1aacd9c6c7f5a750177ce184bd43601327dc0284fa46223df87371993b2b6c27/ltwlf/json-diff-ts"
---

# json-diff-ts

**Turn JSON changes into something you can inspect, apply, and undo.** A TypeScript toolkit for meaningful diffs, stable array identity, and reversible [JSON Atom](https://github.com/ltwlf/json-atom-format) operations. Zero runtime dependencies. ESM and CommonJS included.

**Around 1.2 million npm downloads a week.** [npm recorded 1,196,776 downloads for November 7–13, 2026](https://api.npmjs.org/downloads/point/2026-11-07:2026-11-13/json-diff-ts); the badge above updates automatically.

Created by **[Christian Glessner](https://www.linkedin.com/in/christian-glessner/)** · [Support the project](https://buymeacoffee.com/leitwolf)

[Quick start](#quick-start) · [Regex skipping](#skip-the-noise) · [JSON Atom API](#json-atom-api) · [Python & specification](#one-format-two-languages) · [Migrate from v4](#migration-from-v4)

## Installation

```sh
npm install json-diff-ts
```

```typescript
// ESM / TypeScript
import { diffAtom, applyAtom, revertAtom } from 'json-diff-ts';

// CommonJS
const { diffAtom, applyAtom, revertAtom } = require('json-diff-ts');
```

Maintaining a v4 application? `npm install json-diff-ts@legacy-v4` installs the v4 maintenance release. npm…
