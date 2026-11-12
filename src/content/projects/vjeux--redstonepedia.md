---
repo: "vjeux/redstonepedia"
name: "redstonepedia"
description: "Headless, tick-by-tick Minecraft simulation infrastructure for building and optimizing redstone and farm contraptions"
readmeQualityOk: true
url: "https://github.com/vjeux/redstonepedia"
homepage: "https://vjeux.github.io/redstonepedia/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-18T02:21:11Z"
lastCommitAt: "2026-11-12T11:23:22Z"
lastReleaseAt: "2026-10-18T03:29:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["vjeux"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7f9f9b20158383bc3bab3dab93588b726deabb18b545bdfe04f3d83db0749e0/vjeux/redstonepedia"
---

# redstonepedia

Engineer Minecraft redstone against the **real game code**: a headless Minecraft 26.3 simulator
that runs the game's own server classes, one game tick at a time, hundreds of sandboxes per
machine, plus the tools built on it. Its first project: **the 3x3 piston door with the fewest
blocks**, built from first principles by a night of agents.

* **Real mechanics.** Nothing is re-implemented: pistons, redstone dust, observers and block update
  order are vanilla, and every record behaves identically, tick for tick, in the unmodified
  official server.
* **Tick by tick.** Nothing advances unless asked: place blocks, flip a lever, step one tick, read
  every block back.
* **Many at once.** Each simulation is an isolated sandbox (its own level, clock and random); one
  JVM hosts many sandboxes, a pool runs one JVM per core.
* **Readable source.** Minecraft ships unobfuscated since 26.1; `mctas src` decompiles it so
  mechanics are checked in the code instead of folklore.

## The smallest 3x3 piston door

A door's size is its **volume**, as the piston door community counts it (vjeux, 2026-10-18: the
bounding box of the build over every state of a cycle, the lever…
