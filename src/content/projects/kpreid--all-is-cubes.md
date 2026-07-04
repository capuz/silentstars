---
repo: "kpreid/all-is-cubes"
name: "all-is-cubes"
description: "Yet another block/voxel game; in this one the blocks are made out of blocks. Runs in browsers on WebGPU+WebAssembly."
readmeQualityOk: true
url: "https://github.com/kpreid/all-is-cubes"
homepage: "https://kpreid.dreamwidth.org/tag/all+is+cubes"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["game-engine", "voxel-game", "rust"]
stars: 230
forks: 13
openIssues: 81
closedIssues: 56
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2020-07-30T15:33:04Z"
lastCommitAt: "2026-07-04T22:17:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 88
undervaluedScore: 37
maintainers: ["kpreid", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/698d43f483a44a9dedef9c769532a772486832525b833cd55fd2965c823a2526/kpreid/all-is-cubes"
---

All is Cubes
============

This project is (will be) a game engine for worlds made of cubical blocks (“blocky voxels”). The particular features of this engine are that each ordinary block is itself made out of blocks, and all game mechanics are defined by data within the world that can be interactively edited.

Or rather, that's the plan; for now, it mainly supports rendering of said content, and I am aiming to duplicate and expand on the functionality of my previous work [Cubes](https://github.com/kpreid/cubes/). That was written in JavaScript; this compiles to WebAssembly so the result will still run in the browser, but also someday support a multiplayer server and storage backend.

Above: a partial, procedural voxel recreation of the Sponza Atrium computer graphics test scene, assembled and rendered using All is Cubes.

Project organization
--------------------

This repository is divided into several Rust packages:

* `all-is-cubes/` is a library containing all of the fundamental data types and simulation algorithms.
* `all-is-cubes-render/` is a library containing the CPU raytracer rendering code, and abstract rendering types and traits.
* `all-is-cubes-mesh/` is a library…
