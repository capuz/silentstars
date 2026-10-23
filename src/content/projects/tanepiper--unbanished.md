---
repo: "tanepiper/unbanished"
name: "unbanished"
description: "Un-Banished: a from-scratch Rust reimplementation of the Banished engine, native and in the browser. Bring your own copy of the game."
readmeQualityOk: true
url: "https://github.com/tanepiper/unbanished"
homepage: "https://tanepiper.github.io/unbanished/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["banished", "city-builder", "game-engine", "reimplementation", "rust", "webassembly", "wgpu"]
stars: 13
forks: 1
openIssues: 6
closedIssues: 18
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-10-14T08:46:18Z"
lastCommitAt: "2026-10-23T08:47:30Z"
lastReleaseAt: "2026-10-21T16:50:37Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 55
maintainers: ["tanepiper"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ccdf7cd6bb20623d4070c67156597185b7e9cfca3c24b0b6edd82c8ca8e1e45/tanepiper/unbanished"
---

A new game engine, written in Rust. It uses the game files from your own copy of Banished.

## What is Un-Banished?

[Banished](https://www.shiningrocksoftware.com/) is a city-building game by Shining Rock
Software. In the game, a group of exiled travellers build a new town in a hard land. The game
runs only on Windows. Its last version is 1.0.7.

**Un-Banished is a new engine for this game.** All of its code is new. It contains no code, art,
sound or text from the original game. It reads the data files from your copy of Banished, and it
rebuilds the game's rules, menus, graphics and sound around them.

The goal is to match the original exactly. The same seed gives the same map. The citizens, the
timings and the save files are the same.

- 🖥️ **Desktop:** Windows, macOS (Apple Silicon and Intel) and Linux.
- 🌐 **Browser:** through WebAssembly. The page reads your game files on your computer. It does not upload them.
- 💾 **Saves:** saves from the original game load without changes. Un-Banished uses the same save format and the same save folder.
- 🧩 **Mods:** mods made with the BanishedKit (`.pkm` files) work through the Mods menu, as in the original.
- 🔎 **Mod sites:** the…
