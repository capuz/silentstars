---
repo: "openkumite/openkumite"
name: "openkumite"
description: "🥋 Open-source 3D fighting game engine in Rust 🦀 that plays game data converted by kumite_converter, 1:1 as the original. Native (wgpu) and browser (WebAssembly) builds, local versus and online rollback netplay."
readmeQualityOk: true
url: "https://github.com/openkumite/openkumite"
homepage: "https://openkumiteengine.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["fighting-game", "game-engine", "ggrs", "gltf", "rollback-netcode", "rust", "webassembly", "webrtc", "wgpu"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-10-23T23:48:53Z"
lastCommitAt: "2026-11-20T12:19:48Z"
lastReleaseAt: "2026-11-18T00:40:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 54
maintainers: ["portvex", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431655425/e08e247c-b359-42bf-ab39-6a2e497d9bf8"
---

# OpenKumite

A 3D fighting game engine in Rust that plays converted game data 1:1, as the original does. It runs natively
(wgpu + winit) and in the browser (WebAssembly), with local two-player and online rollback netplay.

The repository contains **no game data**. Everything game-specific is converted once, in the game, from your own copy
of the game, into standard formats: glTF 2.0, PNG, JSON, WAV/FLAC and AVI. The converters are separate crates the game
links: ok_tekken3_converter (the game, required), ok_tekken2_converter, ok_hl_cs_converter and
ok_tekken3_arcade_converter (optional packs beside it), on ok_converter_common.
