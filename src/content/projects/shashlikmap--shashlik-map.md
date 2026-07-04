---
repo: "ShashlikMap/shashlik-map"
name: "shashlik-map"
description: "A WIP map engine written in Rust using WGPU, with Kotlin Multiplatform support and Linux KMS"
url: "https://github.com/ShashlikMap/shashlik-map"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["map", "rendering-engine", "rust", "wgpu", "map-engine", "text-rendering", "uniffi-rs", "wgpu-rs", "webgpu", "android"]
stars: 8
forks: 0
openIssues: 4
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-10-29T01:47:14Z"
lastCommitAt: "2026-07-04T06:13:12Z"
lastReleaseAt: "2026-07-03T14:58:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["agent10"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c854f9e39f52d454786110ea11c97b251c6d20c44b337403686ab29f6be28d/ShashlikMap/shashlik-map"
---

# Shashlik Map
A WIP map engine written in Rust using WGPU.

The initial goal of the project is to learn a new cross-platform tech stack to build a mobile and Linux KMS-ready map engine. 
The project focuses on rendering and navigation features, including dead reckoning and map matching.

I'm writing about the tech I've learned [here](https://hackmd.io/@agent10)

## Showcases
Running on macOS, Android, iOS and Linux via KMS

## Tech stack
The stack leverages the following approaches and libraries:
- Map vector graphics renderer written in Rust using [WGPU](https://github.com/gfx-rs/wgpu) as a low-level cross-platform graphics API and
with [RustyBuzz](https://github.com/harfbuzz/rustybuzz) support as a vector font shaper for TextRenderer.
- Uses custom tiles, a simple tiles generator and a tile server, [separate repo](https://github.com/ShashlikMap/shashlik-tiles-gen-v0). The server is running in free AWS EC2 Cloud. 
- Kotlin/Compose Multiplatfom, [uniffi-rs](https://github.com/mozilla/uniffi-rs) and [gobley](https://github.com/gobley/gobley) projects enable fast and seamless integration 
with Android/iOS mobile apps(Android is priority for now)
- [Slint…
