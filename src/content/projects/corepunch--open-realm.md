---
repo: "corepunch/open-realm"
name: "open-realm"
description: "Open-source reimplementation of the Warcraft III (as well as World of Warcraft and Starcraft II) game engine, written in C. Loads and renders original game assets directly from MPQ files, targeting Linux and macOS."
readmeQualityOk: true
url: "https://github.com/corepunch/open-realm"
homepage: "https://corepunch.github.io/open-realm/"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["classic-wow", "mpq", "opengl", "starcraft-ii", "starcraft2", "warcraft-iii", "warcraft3", "world-of-warcraft", "wow-client"]
stars: 259
forks: 35
openIssues: 9
closedIssues: 30
watchers: 6
contributors: 9
recentReleases: 3
createdAt: "2023-05-13T17:39:29Z"
lastCommitAt: "2026-08-28T15:31:09Z"
lastReleaseAt: "2026-08-26T20:00:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 44
maintainers: ["corepunch", "sookyboo"]
openGraphImageUrl: "https://opengraph.githubassets.com/da289e930339ba04372b3ef2e9bc4ad18f642a40271084e12dded6add0264b16/corepunch/open-realm"
discussionCount: 0
---

</p>

**OpenRealm** is an open-source implementation of Warcraft III that uses SDL2 and runs on Windows, Linux, and macOS.

It was developed using War3.mpq from Warcraft III v1.0 as reference, with ongoing support for version 1.29b.

## Community

Join the <a href="https://discord.gg/5W66nrcaB">Discord server</a> to discuss development, ask questions, share screenshots, and contribute:

## Download

Pre-built binaries for Linux and macOS are available on the [Releases page](https://github.com/corepunch/open-realm/releases/latest).

You can also download the latest build artifact from the [CI workflow runs](https://github.com/corepunch/open-realm/actions/workflows/c-cpp.yml) (click the most recent successful run and download `open-realm-linux-x64`).

  </a>
</p>

## Beyond Warcraft III

Warcraft III is the first and most complete target, but the long-term goal is a reusable engine for several Blizzard-era game formats and play styles.

The project is being organized around a small core runtime: client, server, renderer, UI, networking, math, archive loading, console/cvars, and Quake-style module boundaries. Each game then brings its own policy and data formats under…
