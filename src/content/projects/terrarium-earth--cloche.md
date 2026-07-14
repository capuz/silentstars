---
repo: "terrarium-earth/cloche"
name: "cloche"
description: "Simple & robust cross-platform Minecraft Gradle plugin"
readmeQualityOk: true
url: "https://github.com/terrarium-earth/cloche"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 42
forks: 7
openIssues: 41
closedIssues: 85
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2023-06-18T04:42:42Z"
lastCommitAt: "2026-07-14T05:54:13Z"
lastReleaseAt: "2025-12-08T00:33:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 41
maintainers: ["MsRandom"]
openGraphImageUrl: "https://opengraph.githubassets.com/faa36b381514b0e20c1709e24471132b029010f8a94a7491378e1bc7f531d173/terrarium-earth/cloche"
fundingLinks: ["KO_FI:https://ko-fi.com/terrariumearth"]
---

# Cloche
A general-purpose Minecraft Gradle plugin for all sorts of use-cases.

Cloche functions in terms of targets, a target can have any Minecraft version or mod loader setup that you compile to, all within the same project.

A plethora of easily configurable features, including but not limited to:
- Separated client source-set where possible
- Simple Data Generation
- Tests for all different source-sets and configurations
- Run configurations generated for various different cases
- Pre-applied mixins, allowing for a better debug experience (WIP)
- Mod metadata(`fabric.mod.json`, `neoforge.mods.toml`, etc) generated for all targets
- Multi-platform utilities when using multiple targets, such as Java @Expect/@Actual annotations and Kotlin multiplatform features
  - Part of the [jvm-multiplatform](https://github.com/MsRandom/jvm-multiplatform) tool suite

### Publishing and Consumption
If you publish a library/mod API with Cloche, variants are automatically configured for consumers, thus if you use the library in common, it will automatically pick the right variants for each consuming target.

## Setup
The basic structure for using Cloche in a `build.gradle`(`.kts`) build script…
