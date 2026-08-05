---
repo: "imcf/patchworks"
name: "patchworks"
description: "Tiled processing of arbitrarily large images — any image, any function."
readmeQualityOk: true
url: "https://github.com/imcf/patchworks"
homepage: "https://imcf.one/patchworks/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-18T14:26:32Z"
lastCommitAt: "2026-08-05T06:05:49Z"
lastReleaseAt: "2026-06-23T12:25:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 42
maintainers: ["lguerard"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5a4aa854f3a2d157e9328b1a2e6d1d17941377d9a7941296037a48e835d06be/imcf/patchworks"
---

</p>

# patchworks

> Tiled processing of arbitrarily large images — any image, any function.

```text
┌──────┬──────┬──────┐     fn(tile) → labels      ┌──────┬──────┬──────┐
│ tile │ tile │ tile │  ─────────────────────►    │  1   │  2   │  3   │
├──────┼──────┼──────┤                            ├──────┼──────┼──────┤
│ tile │ tile │ tile │                            │  4   │  5   │  6   │   globally
├──────┼──────┼──────┤                            ├──────┼──────┼──────┤   consistent
│ tile │ tile │ tile │                            │  7   │  8   │  9   │   labels
└──────┴──────┴──────┘                            └──────┴──────┴──────┘
```

patchworks splits a large image into tiles, runs **any callable** on each
tile in parallel, and merges the results into a globally consistent label array.
It handles terabyte-scale images without loading them into memory.

> [!NOTE]
> **On how this was written.** Large parts of patchworks were vibe coded —
> written with heavy LLM assistance rather than line by line. It is covered by
> a test suite and has been run on real data, so it is not untested, but the
> usual caveats apply: read the code before you trust it with anything
>…
