---
repo: "dvalnn/maestro"
name: "maestro"
description: "A graph-based agent orchestraction engine for repeatable workflows."
readmeQualityOk: true
url: "https://github.com/dvalnn/maestro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-11-05T11:25:28Z"
lastCommitAt: "2026-11-13T18:31:20Z"
lastReleaseAt: "2026-11-13T18:31:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["dvalnn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d85e4b1d034eb775a94b3b5d0d50ade5b3e582869d6d1040c87c3aa8e4cac8fe/dvalnn/maestro"
---

# maestro

**Coding agents, orchestrated as code.**

Compose agents, checks and reviews into a typed graph. maestro checks the graph and bounds its spend before a single
model call, performs it in isolated lanes, and hands back a changeset you decide whether to apply.

## How it works

1. **Compose.** You write a composition in TypeScript: who builds, who reviews, which checks must pass, how many repair
   rounds to allow. `maestro compose` builds its graph and checks it: types, config, profiles, and an upper bound on
   agent runs. It spends nothing.
2. **Perform.** `maestro perform` runs the graph as a concert. Each agent and check works in a lane, a versioned working
   copy cut from your repository, inside a bubblewrap sandbox. Every step is recorded, so a failed concert resumes where
   it stopped.
3. **Apply.** A concert's only way out is its changeset: patches you show, then apply or drop.

## Why maestro

- **No spend before pre-flight.** The plan names its bound, such as `up to 7 repo.agent`, before anything runs.
- **Your checkout stays yours.** Agents and checks work in lanes; applying the result is your call.
- **Bounded loops.** Repair rounds, fan-outs and escalations…
