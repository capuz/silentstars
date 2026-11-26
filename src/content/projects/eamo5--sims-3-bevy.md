---
repo: "Eamo5/sims-3-bevy"
name: "sims-3-bevy"
description: "A full reimplementation of The Sims 3 in the Bevy Game engine (WIP)"
readmeQualityOk: true
url: "https://github.com/Eamo5/sims-3-bevy"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 24
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T08:09:30Z"
lastCommitAt: "2026-11-26T12:56:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 43
maintainers: ["Eamo5"]
openGraphImageUrl: "https://opengraph.githubassets.com/d11ac4d304f6c95c49a73475d803fbb60673204c0d123a2a7ddc150528286c41/Eamo5/sims-3-bevy"
---

# Sims 3 in Bevy

A standalone reimplementation of The Sims 3 in Rust and [Bevy](https://bevyengine.org), running
on the data of an installed copy of the game (base game plus any expansions and stuff packs).

Everything is converted **once, up front** into a local cache of GPU-ready assets
(block-compressed DDS textures, pre-decoded meshes, packed world data), so the game itself
loads a town in well under a second and never touches the original packages while playing.

## Running

```sh
# 1. Convert the installation (≈1 minute the first time; later runs only redo what changed)
cargo run --release -p s3bake -- --all-worlds
#    the install defaults to S:\Games\Sims 3\The Sims 3;
#    use --data <path> or SIMS3_DATA=<path> for another location

# 2. Play
cargo run --release -p sims3
```

The cache lives in `baked/` (or `SIMS3_CACHE`). If the cache is missing, the game converts on
its first run instead. Once converted, every cached world stays playable even when the
installation is unreachable.
