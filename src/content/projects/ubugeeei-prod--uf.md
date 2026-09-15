---
repo: "ubugeeei-prod/uf"
name: "uf"
description: "uf  —  the unified toolchain for flow & react. the most easy way to build your app with flow type."
readmeQualityOk: true
url: "https://github.com/ubugeeei-prod/uf"
homepage: "https://uniflowed.dev"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [54, 43]
topics: ["flow", "flowtype", "react", "rolldown", "rsc", "rust", "toolchain", "vite", "uniflowed"]
stars: 61
forks: 0
openIssues: 71
closedIssues: 337
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T16:07:00Z"
lastCommitAt: "2026-09-15T08:41:10Z"
lastReleaseAt: "2026-09-07T01:33:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 41
maintainers: ["ubugeeei", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc90d66b357e6d5237332a75c6b9b6f912f2c130af8a7b1f90ab9203c7b46393/ubugeeei-prod/uf"
fundingLinks: ["GITHUB:https://github.com/ubugeeei"]
discussionCount: 0
---

# uf

**Build the strongest React development experience with Modern Flow.**

[Documentation](https://docs.uniflowed.dev) ·
[Start](https://docs.uniflowed.dev/guide/start) ·
[Why uf](https://docs.uniflowed.dev/guide/why-uf) ·
[What uf does not do](https://docs.uniflowed.dev/guide/scope) ·
[Roadmap](https://github.com/ubugeeei-prod/uf/blob/HEAD/docs/roadmap.md)

</div>

`uf` is a single native binary that runs, builds, tests, formats, lints and
type-checks a React application written in Flow. It is not a wrapper around
tools you assemble: the dev server, the production build, the test runner, the
formatter and the linter all read the same syntax tree, produced once by Meta's
own Flow parser, which is compiled into the binary.

The name is short for *unified flow*. The command is `uf`; the package scope on
npm is `@uniflowed`.

## Why it exists

React is written in Flow, and Flow has spent years growing syntax that exists to
describe React — `component` and `hook` declarations, `renders` types, `match`,
enums. Nothing else has any of it.

Using that syntax without uf is an assembly job. Babel to strip the types, a
preset that understands `component`, a plugin for the React Compiler,…
