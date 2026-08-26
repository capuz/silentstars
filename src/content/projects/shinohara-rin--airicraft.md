---
repo: "shinohara-rin/airicraft"
name: "airicraft"
description: "under construction"
readmeQualityOk: true
url: "https://github.com/shinohara-rin/airicraft"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 6
forks: 6
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-21T07:15:03Z"
lastCommitAt: "2026-08-26T04:15:46Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 97
undervaluedScore: 69
maintainers: ["shinohara-rin", "qyl27"]
openGraphImageUrl: "https://opengraph.githubassets.com/80431b4eb70301e0bc58a2b304fc1f9470073bc78dad5ff8e87ca759c2809256/shinohara-rin/airicraft"
---

# Airicraft

Airicraft is a Fabric mod that exposes an in-game agent bridge and a CLI for automating common tasks. It targets Minecraft `1.21.8` with Java `21`, plus a `wrapper/` CLI subproject.

## Development And Verification

Run these after Java is configured. Source `.envrc` before Gradle build, test, or run commands:

```shell
source .envrc
./gradlew --version
./gradlew build
./gradlew test wrapper:test --rerun-tasks
```

### Planner world inspection contract

The planner has a read-only `inspect_world` tool for exact local block state. It complements vision: use `take_a_look` for visual semantics, and `inspect_world` when the planner needs precise coordinates, block ids, block-state properties, or placement affordances.

`inspect_world` accepts fixed modes:

- `inspect_area`: compact exact local block records.
- `find_blocks`: exact `blockIds` plus optional `stateFilters` such as `age=7` or `moisture=7`.
- `find_placement_sites`: conservative candidate target positions using constraints such as `targetMaterial`, `supportBlockIds`, `supportStateFilters`, `requireAirAbove`, `requireStandableAdjacent`, `requireWithinInteractionRange`, and nearby required blocks.

Scopes are…
