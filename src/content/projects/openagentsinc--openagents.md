---
repo: "OpenAgentsInc/openagents"
name: "openagents"
description: "The Agent Network"
readmeQualityOk: true
url: "https://github.com/OpenAgentsInc/openagents"
homepage: "https://openagents.com"
language: "Jai"
languages: ["Jai"]
languagePcts: [66]
stars: 461
forks: 63
openIssues: 0
closedIssues: 9460
watchers: 6
contributors: 52
recentReleases: 0
createdAt: "2023-11-07T16:16:46Z"
lastCommitAt: "2026-10-31T07:45:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 38
maintainers: ["AtlantisPleb"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a28503c3234f7d4f6b36f38f27f1355c24f7619e7638dafb4c9e6477abf41ed/OpenAgentsInc/openagents"
---

# OpenAgents

OpenAgents.com is a playtest, not a slide deck: a 3D web world where you
walk among the projects we're building, play realms that people dream up,
and pay or get paid in Bitcoin
([Episode 290: Enter the Verse](https://github.com/OpenAgentsInc/openagents/blob/HEAD/docs/transcripts/290.md)).

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
    the language. `#test` and `#forall` run while compiling.…
