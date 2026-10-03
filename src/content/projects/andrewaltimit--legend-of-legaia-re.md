---
repo: "AndrewAltimit/legend-of-legaia-re"
name: "legend-of-legaia-re"
description: "Reverse-engineering Legend of Legaia (PSX, 1999): Ghidra-traced format documentation, Rust extractors for every asset on the disc, and a clean-room engine reimplementation targeting wgpu/SDL3 with optional WASM.  BYO-disc model, no assets distributed."
readmeQualityOk: true
url: "https://github.com/AndrewAltimit/legend-of-legaia-re"
homepage: "https://andrewaltimit.github.io/legend-of-legaia-re/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["clean-room", "decompilation", "playstation", "ps1", "psx", "reverse-engineering", "rust", "wasm", "wgpu", "legaia"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-05-05T10:34:45Z"
lastCommitAt: "2026-10-03T22:05:15Z"
lastReleaseAt: "2026-08-29T21:25:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["AndrewAltimit"]
openGraphImageUrl: "https://opengraph.githubassets.com/402e8f50bbaa11317a30310fa8e5444e8e88bc17146c55071fce98fb5e0b2de0/AndrewAltimit/legend-of-legaia-re"
---

# legend-of-legaia-re

A playable port and modding hub for the PSX game **Legend of Legaia** (1998, Sony, NA SCUS-94254), standing on Ghidra-traced reverse engineering of the retail disc. The disc's formats are documented byte-by-byte with provenance back to traced retail functions, Rust parsers extract every asset, and a from-scratch engine runs the game's own scenes, scripts and menus - natively on wgpu, and in your browser via WebAssembly. On top of that sit a disc randomizer, a translation toolchain, and a project site full of interactive viewers that run entirely off your own disc image.

The repo name `-re` is in both senses: **r**everse-**e**ngineering and **r**e-implementation. This is **not a decompilation project**: nothing aims at a byte-matching recompile of the executable, and the engine is fresh Rust written from the project's own reverse-engineering record - Ghidra-traced function dumps and live emulator probes - never auto-translated MIPS. Same legal model as [ScummVM](https://www.scummvm.org/), [OpenRCT2](https://github.com/openrct2/OpenRCT2), [OpenMW](https://github.com/OpenMW/openmw), [OpenLara](https://github.com/XProger/OpenLara): this repo is code and…
