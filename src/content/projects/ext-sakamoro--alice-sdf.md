---
repo: "ext-sakamoro/ALICE-SDF"
name: "ALICE-SDF"
description: "Signed distance fields as a shape tree: CPU evaluation, GLSL / WGSL / HLSL / Metal transpile, marching cubes, SVO and texture fitting."
readmeQualityOk: true
url: "https://github.com/ext-sakamoro/ALICE-SDF"
homepage: "https://crates.io/crates/alice-sdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
topics: ["3d", "csg", "distance-field", "gpu", "marching-cubes", "procedural", "raymarching", "rust", "sdf", "shader"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-01T14:23:44Z"
lastCommitAt: "2026-10-29T09:45:52Z"
lastReleaseAt: "2026-07-04T11:50:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5b1120d4a49c36a88ae539d9c706319d3ee71046f175be22fced7efb46d2f99d/ext-sakamoro/ALICE-SDF"
---

# ALICE-SDF

Signed distance functions for Rust. A shape is a tree of primitives,
CSG operations, transforms and modifiers. The crate evaluates the tree on the
CPU (scalar, SIMD, BVH and JIT evaluators), transpiles it to GLSL, WGSL, HLSL
and Metal, and turns it into meshes and file formats.

English | [日本語](https://github.com/ext-sakamoro/ALICE-SDF/blob/HEAD/README_JP.md)

The same tree drives every backend, and the CPU evaluators return the same
bits as each other on every platform CI tests. That makes the tree usable as
the single description of a shape: the shader that renders it, the collider
that a physics engine queries, and the mesh that is exported or printed are
all computed from it, not from separate approximations.

It is not a mesh modeller or a renderer. The GPU shaders are not bit-exact
with the CPU (they agree within a tolerance), the value after some modifiers
(twist, bend, displacement and similar) is a bound on the distance rather than
the distance itself, and turning a field into a fine mesh costs time and memory
that grow with the resolution.

## Contents

- [Installation](#installation)
- [Example](#example)
- [Determinism](#determinism)
- [What is…
