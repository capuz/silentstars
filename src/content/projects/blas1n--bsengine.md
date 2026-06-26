---
repo: "blas1n/BSEngine"
name: "BSEngine"
description: "My own game engine project."
url: "https://github.com/blas1n/BSEngine"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 4
closedIssues: 126
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-09-24T09:38:55Z"
lastCommitAt: "2026-06-26T23:43:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 71
maintainers: ["blas1n"]
openGraphImageUrl: "https://opengraph.githubassets.com/15a9908f61e748109c12f81454fa1eac7d54c3f5884dea6e0895c0ac65c5303f/blas1n/BSEngine"
---

# BSEngine

A personal game engine written in Rust. Started as a C++ project in 2021, rewritten in Rust for a solid infrastructure-first foundation.

![CI](https://github.com/blas1n/BSEngine/actions/workflows/ci.yml/badge.svg)

---

## Architecture

BSEngine is organized as a Cargo workspace of focused crates:

```
bsengine-core         — shared primitives (math, error types)
bsengine-ecs          — ECS wrappers around bevy_ecs
bsengine-app          — application loop and plugin system (bevy_app)
bsengine-window       — platform window management (winit)
bsengine-input        — keyboard/mouse input abstraction
bsengine-rhi          — render hardware interface (abstract GPU trait)
bsengine-rhi-wgpu     — wgpu implementation of bsengine-rhi
bsengine-render       — scene rendering pipeline
bsengine-scene        — scene graph, entity transforms, hierarchy
bsengine-asset        — asset loading (textures, meshes)
bsengine-gltf         — GLTF/GLB import
bsengine-plugin       — runtime plugin loader
bsengine-mcp          — MCP (Model Context Protocol) server runtime
bsengine-editor       — editor backend with 700+ MCP tools
bsengine-scripting    — JavaScript scripting via Deno/V8
```…
