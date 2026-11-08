---
repo: "StratumServer/Optimum"
name: "Optimum"
description: "High-performance client fork. Compile-time patches, no Harmony. Same gameplay, faster frames."
readmeQualityOk: true
url: "https://github.com/StratumServer/Optimum"
homepage: "https://mods.vintagestory.at/optimum"
language: "C#"
languages: ["C#"]
languagePcts: [79]
stars: 27
forks: 5
openIssues: 41
closedIssues: 166
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-25T17:14:14Z"
lastCommitAt: "2026-11-08T10:42:39Z"
lastReleaseAt: "2026-07-08T10:56:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 44
maintainers: ["Zaldaryon", "tehtelev"]
openGraphImageUrl: "https://opengraph.githubassets.com/d23a522f4c31dfba4cc31edb38c08da79a748ddca769e545e0dbc07a9e8f1dc4/StratumServer/Optimum"
fundingLinks: ["KO_FI:https://ko-fi.com/zaldaryon"]
---

Optimum is a high-performance, client-side fork of [Vintage Story](https://www.vintagestory.at).

Read the [Optimum Privacy Policy](https://github.com/StratumServer/Optimum/blob/HEAD/PRIVACY.md) for the information handled by the build scripts, installers, launcher, and patcher.

## Features

- Background FPS limiter (30 FPS when alt-tabbed)
- Precise frame pacing (hybrid sleep/yield/spin, fixes stutter)
- Entity shadow distance culling (skip draws beyond 80 blocks)
- Shadow far vegetation skip (skip foliage in far cascade)
- Entity render distance pre-cull (skip render before matrix work)
- Dynamic light radius scaling (35-60 blocks based on view distance)
- Chiseled block LOD (solid cube beyond threshold, 83x vertex reduction)
- Entity repulsion distance gate (skip physics beyond 64 blocks)
- Weather wind throttle (cache lookups for 4 frames)
- Particle distance gate (skip emitters beyond 48 blocks)
- FSR 1.0 upscaling (EASU + RCAS; Quality/Balanced/Performance render scale)
- Smart chunk culling (scale the occlusion-culling threshold with view distance)
- Map page cache (8x8-chunk GPU texture array, single draw call, BC7, disk-persisted)
- Dynamic light scan reuse (reuse the…
