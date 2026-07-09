---
repo: "cdiggins/plato"
name: "plato"
description: "A simple and efficient cross-platform programming language. "
readmeQualityOk: true
url: "https://github.com/cdiggins/plato"
homepage: "https://cdiggins.github.io/plato/"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [69, 24]
topics: ["functional-programming", "programming-language", "learn-to-code", "teaching"]
stars: 96
forks: 6
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2020-12-31T22:17:07Z"
lastCommitAt: "2026-07-09T20:45:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 43
maintainers: ["cdiggins"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/325881124/65c07f71-91a5-49b6-8e13-a5204b4b833d"
---

# Plato

**Write geometry once. Run it everywhere.**

**Plato** is a small, pure, statically-typed language for writing geometric and numeric libraries once, and compiling them into fast, idiomatic code for other platforms. The C# backend is in daily production use — it generates the geometry library consumed by the [Ara 3D SDK](https://github.com/ara3d/ara3d-sdk) — and the **TypeScript and Rust backends are working proofs of concept**, each with a browser demo you can try right now.

### ▶ [Try the live demos](https://cdiggins.github.io/plato/)

Twelve geometry algorithms — Delaunay triangulation, convex hulls, BVHs, half-edge meshes, raycasting, and more — written once in Plato and running in your browser two different ways, from the same source file:

- **[TypeScript sample browser](https://cdiggins.github.io/plato/typescript/)** — Plato compiled to TypeScript, rendered with Three.js.
- **[Rust sample browser](https://cdiggins.github.io/plato/rust/)** — the same Plato source compiled to Rust, built to WebAssembly, computing every sample live in the browser.

Both pass the same conformance suite: identical algorithms, identical seeds, identical results. To run them locally, see…
