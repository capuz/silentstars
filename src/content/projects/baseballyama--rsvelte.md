---
repo: "baseballyama/rsvelte"
name: "rsvelte"
description: "Rust-powered Svelte ecosystem"
readmeQualityOk: true
url: "https://github.com/baseballyama/rsvelte"
homepage: "https://baseballyama.github.io/rsvelte/"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [52, 39]
topics: ["compiler", "formatter", "language-server", "linter", "svelte", "svelte3", "svelte5", "sveltejs"]
stars: 258
forks: 17
openIssues: 57
closedIssues: 1343
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-01-04T00:35:25Z"
lastCommitAt: "2026-11-21T11:23:04Z"
lastReleaseAt: "2026-05-30T11:18:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["baseballyama", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e784ce592fa8f8778183c864f2e7655947acf82d55b695ca2c9295dd7e176f/baseballyama/rsvelte"
---

# rsvelte (experimental)

A native toolchain for Svelte 5 (and Vue), written in Rust: compile, lint, format
and type check. It reads each file once and keeps immutable trees and a database of facts derived
from them. A task computes only what it needs, one file per thread. The old port it replaced is
only a diff oracle and a performance baseline.

## Use

```sh
npx @rsvelte/cli lint
npx @rsvelte/cli format --check
npx @rsvelte/cli typecheck
```

[The package's README](https://github.com/baseballyama/rsvelte/blob/HEAD/apps/cli/README.md) is the user guide.

rsvelte supports Svelte 5 components in runes mode only. It does not support Svelte 4 projects
or components in legacy mode, such as those that use `export let` or `$:`. On them, `typecheck`
gives wrong results. The compiler rejects legacy syntax, as the official compiler does with
`runes: true`, and refuses `<svelte:options runes={false} />` as unsupported. The user guide lists what each command does with
legacy components. For Svelte 4, use the official tools.
