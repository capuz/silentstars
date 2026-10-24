---
repo: "Rawframe-Project/maul2d"
name: "maul2d"
description: "Deterministic 2D physics engine: bit-exact rollback, record/replay, particle fluids. C17, zero dependencies, MIT."
readmeQualityOk: true
url: "https://github.com/Rawframe-Project/maul2d"
homepage: "https://rawframe-project.github.io/maul2d/"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["c", "gamedev", "physics-engine", "2d", "c17", "deterministic", "fluid-simulation", "game-physics", "netcode", "rollback"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-03T08:09:42Z"
lastCommitAt: "2026-10-24T00:15:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 52
maintainers: ["siracozmen01"]
openGraphImageUrl: "https://opengraph.githubassets.com/81791b4896eef644de6bc29ce981eefbd7efe25499b29f4481af8b06c35671b5/Rawframe-Project/maul2d"
discussionCount: 0
---

# Maul2D

A deterministic 2D physics engine for games. Written in C17, with a
plain C API, no dependencies and an MIT license.

Same inputs, same bits, on every supported platform and at every
thread count. A snapshot restores a world exactly, and the command
journal records a session and replays it byte for byte. Rollback
netcode, lockstep multiplayer, replays and server-side verification
are a few calls away:

```c
int32_t size = m2World_SnapshotSize(world);
int32_t written = 0;
m2Result result = m2World_Snapshot(world, buffer, size, &written);
/* ... mispredicted steps ... */
result = m2World_Restore(world, buffer, written); // resimulate from here, bit for bit
```

**[Try the testbed in your browser](https://rawframe-project.github.io/maul2d/testbed/)**:
the same engine compiled to WebAssembly. Hold R and time runs
backward.

## The Maul family

Maul2D has a 3D sibling, [Maul3D](https://github.com/Rawframe-Project/maul3d).
The two are one family: two engines, one set of rules.

| | Maul2D | Maul3D |
|---|---|---|
| World | 2D | 3D |
| Built for | platformers, puzzles, top-down games, machines, water | destruction, vehicles, characters, lockstep multiplayer |
| Beyond rigid…
