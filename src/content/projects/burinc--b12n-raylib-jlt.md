---
repo: "burinc/b12n-raylib-jlt"
name: "b12n-raylib-jlt"
description: "75 raylib examples in Jolt — native Clojure on Chez Scheme, binding libraylib directly over its C ABI"
readmeQualityOk: true
url: "https://github.com/burinc/b12n-raylib-jlt"
homepage: "https://raylib-jlt.b12n.app"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
topics: ["chez-scheme", "clojure", "ffi", "gamedev", "jolt", "raylib", "game-development", "graphics", "native-clojure", "scheme"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-18T03:16:10Z"
lastCommitAt: "2026-08-23T04:08:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["burinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/05dff46612485e89f15634cc405dd11a77c51bfe60944e1c7e2ec1b1822d8c4e/burinc/b12n-raylib-jlt"
---

# b12n-raylib-jlt: raylib examples in Jolt

A community suite of [raylib](https://github.com/raysan5/raylib) examples written in
**jolt** (native Clojure, no JVM). These call a **real external C library**: raylib is
the upstream C game library (raysan5/raylib), and jolt binds it directly over its C ABI
with `jolt.ffi`: no wrapper library, no codegen, just the shared `libraylib` loaded at
runtime and called through the FFI.

All the FFI bindings and an ergonomic keyword-argument drawing API live in one
shared namespace, `net.b12n.raylib-jlt.raylib`; each example is a small namespace on top of it.

**Documentation site: <https://raylib-jlt.b12n.app>** carries the guide, the full example
catalog, and every demo GIF at full size.

## Examples

<table>
<tr><th>Preview</th><th>Example</th><th>What it demonstrates</th></tr>
<tr>
<td><img src="docs/demos/tetris.gif" width="240"></td>
<td><code>bb tetris</code></td>
<td>the block-stacking puzzle (move/rotate/drop)</td>
</tr>
<tr>
<td><img src="docs/demos/game-of-life.gif" width="240"></td>
<td><code>bb game-of-life</code></td>
<td>Conway's Game of Life (SPACE reseeds)</td>
</tr>
<tr>
<td><img src="docs/demos/waving-cubes.gif"…
