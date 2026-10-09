---
repo: "sepahead/melkor"
name: "melkor"
description: "C++17 toolkit for 3D Gaussian splats: deterministic conversion, inspection, geometry-based scene completion and viewing across PLY, SPZ and glTF, with CPU/Metal and optional CUDA backends. v2 hardening in progress; no supported production binary release."
readmeQualityOk: true
url: "https://github.com/sepahead/melkor"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 22]
topics: ["3d-reconstruction", "gaussian-splatting", "point-cloud", "3d-gaussian-splatting", "3dgs", "computer-graphics", "cpp", "gltf", "ply", "spz"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-06T20:48:39Z"
lastCommitAt: "2026-10-09T18:56:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 42
maintainers: ["sepahead", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6608468acf11b7249524b97a9e95cc0fbf83dd0b41e32ca4f2bd95be35cbd44/sepahead/melkor"
discussionCount: 0
---

[Logo design archive](https://github.com/sepahead/melkor/blob/HEAD/assets/archive/logos/README.md)

# Melkor

**A bounded toolkit for Gaussian-splat inspection, conversion, and local viewing.**

[Scope](#scope) ·
[Formats](#format-contract) ·
[Build](#build-and-test) ·
[CLI](#cli) ·
[Viewer](#viewer) ·
[SDK](#c-sdk) ·
[Documentation](#documentation)

> **Development status:** Melkor `2.0.0-dev` has no supported production release.
>
> `main` can change its public contract.
> The `v2.0.0-rc.1` tag has no production support.
> The project publishes no signed binary, package, or desktop application.

## Scope

Melkor validates and converts Gaussian-splat assets.
Its native core has no renderer, GPU backend, trainer, learned model, or network loader.

The product has four clear surfaces:

| Surface | Contract |
|---|---|
| Native CLI | Inspect and convert supported PLY, SPZ, glTF, and GLB Gaussian assets. |
| C SDK | Inspect a PLY file through the stable C ABI. |
| Local viewer | Render local splat files through pinned SparkJS and three.js files. |
| Development adapters | Invoke user-supplied reconstruction programs outside the core. |

External adapters do not extend the native…
