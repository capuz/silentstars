---
repo: "Rawframe-Project/maul2d"
name: "maul2d"
description: "Deterministic 2D physics engine: bit-exact rollback, record/replay, particle fluids. C17, zero dependencies, MIT."
readmeQualityOk: true
url: "https://github.com/Rawframe-Project/maul2d"
homepage: "https://rawframe-project.github.io/maul2d/"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["c", "physics-engine", "2d", "c17", "deterministic", "fluid-simulation", "game-physics", "netcode", "rollback", "game-development"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 99
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-03T08:09:42Z"
lastCommitAt: "2026-11-01T22:59:51Z"
lastReleaseAt: "2026-11-01T00:38:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 71
maintainers: ["siracozmen01", "rawframe-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc2d6a2519d4a92d402da0915754f734b02f0b19ccd8eb79ccbc21fb24ac4861/Rawframe-Project/maul2d"
discussionCount: 0
---

# Maul2D

A deterministic 2D physics engine for games. Written in C, with a plain C API, no dependencies and an MIT license.

Same inputs, same bits, on every supported platform and at every thread count. A snapshot restores a world exactly, and the command journal records a session and replays it byte for byte. Rollback netcode, lockstep multiplayer, replays and server-side verification are a few calls away:

```c
int64_t size = m2World_GetSnapshotSize(world);
int64_t written = 0;
m2Result result = m2World_Snapshot(world, buffer, size, &written);
/* ... mispredicted steps ... */
result = m2World_Restore(world, buffer, written); // resimulate from here, bit for bit
```

**[Try the testbed in your browser](https://rawframe-project.github.io/maul2d/testbed/)**: the same engine compiled to WebAssembly. Hold R and time runs backward.

## What it has

- **Rigid bodies**: circles, capsules, rounded polygons, segments and one-way chain terrain; static, kinematic and dynamic bodies; forces, damping, motion locks, dominance, conveyors and explosions.
- **A soft-step solver** with speculative contacts, warm starting and graph-colored SIMD solving. Parallel work runs on the program's own…
