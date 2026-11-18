---
repo: "ver0-project/deep-equal"
name: "deep-equal"
description: "🔎 Deep values comparator for JS "
readmeQualityOk: true
url: "https://github.com/ver0-project/deep-equal"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["assert", "deep-equal", "javascript", "value"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2022-01-11T11:28:10Z"
lastCommitAt: "2026-11-18T12:04:15Z"
lastReleaseAt: "2026-11-18T12:05:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["dependabot[bot]", "xobotyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/39010ddf58b8340b10c158f962bb32bafa433438f9853a7758f5d2480074af38/ver0-project/deep-equal"
discussionCount: 0
---

### Features

- ✅ Handles circular references correctly
- ✅ Supports all modern JS data types
- ✅ Correctly handles special cases like NaN comparisons
- ✅ Lightweight with zero dependencies
- ✅ Fast, while handling all cases

### Why this package exists?

When comparing objects in JavaScript, the built-in equality operators (`==` and `===`) only check for reference
equality, not structural equality. This means that two objects with the same properties and values will be considered
different if they're not the same instance.

Many deep equality solutions exist, but they often have limitations:

- Some don't handle circular references
- Some have inconsistent behavior with special values like NaN
- Some don't support newer JavaScript features or types

This package aims to provide a comprehensive **single** solution that addresses all these concerns while maintaining
excellent performance.

### Installation

```bash
# Using npm
npm install @ver0/deep-equal

# Using yarn
yarn add @ver0/deep-equal

# Using pnpm
pnpm add @ver0/deep-equal
```

### How to use

The API is extremely simple - just import the `isEqual` function and use it to compare any two values:
