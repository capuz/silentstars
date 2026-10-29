---
repo: "OpenAgentsInc/openagents"
name: "openagents"
description: "Enter the Verse"
readmeQualityOk: true
url: "https://github.com/OpenAgentsInc/openagents"
homepage: "https://openagents.com"
language: "Jai"
languages: ["Jai"]
languagePcts: [65]
stars: 458
forks: 63
openIssues: 0
closedIssues: 9456
watchers: 6
contributors: 52
recentReleases: 0
createdAt: "2023-11-07T16:16:46Z"
lastCommitAt: "2026-10-29T05:49:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 38
maintainers: ["AtlantisPleb"]
openGraphImageUrl: "https://opengraph.githubassets.com/30b8f9277ebdc9e0e0ac797f255194ef8ab99400448495b96c447d6e8885fa5d/OpenAgentsInc/openagents"
---

# OpenAgents

We are rebuilding OpenAgents from a small, checked core. The repository was
reset on 2026-10-27. What is here now is the base everything else will be
built on:

- **Coax**, the language;
- **Verse**, the real-time engine, written in it;
- **one protocol** that every OpenAgents surface speaks;
- **openagents.com**, drawn in Coax in the browser;
- **a native iOS app** that runs Coax today.

## What we're building

- **Coax** ([`coax/`](https://github.com/OpenAgentsInc/openagents/blob/HEAD/coax/README.md)) is a systems language for real-time
  and money-handling code.
  - `coax0` is its bootstrap compiler, written in C++20. It emits plain C11,
    so a Coax library links into Swift, C or C++ hosts. It can also emit
    Metal shader functions.
  - Compile-time code runs in a bounded evaluator, and checks are part of
    the language. `#test` and `#forall` run while compiling. `#authority`
    makes every procedure in a file need a check. `coax mutate` checks that
    the checks catch real changes.
  - The [specification](https://github.com/OpenAgentsInc/openagents/blob/HEAD/coax/spec.md) and a…
