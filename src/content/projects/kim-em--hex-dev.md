---
repo: "kim-em/hex-dev"
name: "hex-dev"
description: "Development monorepo for Hex: verified computational algebra in Lean 4 (polynomial factoring, LLL, and friends). Released aggregate: https://github.com/leanprover/hex"
readmeQualityOk: true
url: "https://github.com/kim-em/hex-dev"
homepage: "https://github.com/leanprover/hex"
language: "Lean"
languages: ["Lean"]
languagePcts: [93]
stars: 18
forks: 2
openIssues: 23
closedIssues: 5193
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-22T23:48:18Z"
lastCommitAt: "2026-09-20T08:46:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a8aa17070b77867ba4b4093485f84c9b8772bbaa637caf38ea78f53cf01e904/kim-em/hex-dev"
---

# hex-dev

Verified computational algebra in Lean 4.

**If you want to *use* Hex, you want https://github.com/leanprover/hex, not
this repository.** That is the released aggregate: it depends on one shared
semantic version of the split Hex libraries and is what downstream projects
should add as a dependency.

**Documentation: https://kim-em.github.io/hex-dev/** is the Hex manual,
rendered from `HexManual/` and published on every push to `main`.

## What this repository is

`hex-dev` is the development monorepo. Every Hex library is developed here,
in one tree, so that a single `lake build` (plus the `bench/` and
`conformance/` sub-projects) builds the whole dependency graph together and
a change that breaks a downstream library shows up immediately.

The released repositories are **published mirrors**, not places to work: a
dispatchable CI workflow regenerates each one from the matching content
here, rewrites its cross-repo Lake requirements, and publishes the same version
tag in every repository. Never
hand-edit a released repo; change it here and let the sync publish it.

The authoritative list of published libraries, in topological order and with
each one's cross-repo pins, is…
