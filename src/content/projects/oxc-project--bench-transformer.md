---
repo: "oxc-project/bench-transformer"
name: "bench-transformer"
description: "Bench transformer and isolated declarations"
url: "https://github.com/oxc-project/bench-transformer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 24
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2024-06-20T03:31:43Z"
lastCommitAt: "2026-07-04T06:13:04Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 62
maintainers: ["renovate[bot]", "Boshen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d259948952f8b3da098c8d03fdcf8c39fdefce80e0c39e305a22d006c215fc53/oxc-project/bench-transformer"
fundingLinks: ["GITHUB:https://github.com/Boshen", "OPEN_COLLECTIVE:https://opencollective.com/oxc", "THANKS_DEV:https://thanks.dev/u/gh/oxc-project"]
---

# Bench Oxc, Swc, and Babel Transformer

## Summary

- Transform: Oxc is 3x - 5x faster than SWC, uses 20% less memory, and has smaller package size (2 MB vs SWC's 37 MB).
- Transform: Oxc is 20x - 50x faster than Babel, uses 70% less memory, and is 19 MB smaller, with only 2 npm packages to install vs Babel's 170.
- React development + React Refresh: Oxc is 5x faster than SWC, 50x faster than Babel.
- TS isolated declarations `.d.ts` emit: Oxc is 40x faster than TSC on typical files, 20x faster on larger files.

## Transform / Transpile

Oxc is 3x - 5x faster than swc, and 20x - 50x faster than Babel.

React development + refresh is 6x faster than swc and 20x - 70x faster than Babel.

### GitHub Actions `ubuntu-latest`

```
  oxc - src/transform.bench.ts > UserSettings.tsx (sourceMap: false, reactDev: false, target: esnext)
    4.18x faster than swc
    49.04x faster than babel
  oxc - src/transform.bench.ts > UserSettings.tsx (sourceMap: false, reactDev: false, target: es2015)
    5.71x faster than swc
    46.49x faster than babel
  oxc - src/transform.bench.ts > UserSettings.tsx (sourceMap: true, reactDev: false, target: esnext)
    4.23x faster than swc
    40.18x faster than…
