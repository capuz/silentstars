---
repo: "deadbeef7/ElectroBench"
name: "ElectroBench"
description: "A OpenGL 2.1/3.3 benchmark designed specifically to benchmark old and new PCs."
readmeQualityOk: true
url: "https://github.com/deadbeef7/ElectroBench"
language: "C++"
languages: ["C++", "C", "Python"]
languagePcts: [34, 28, 27]
topics: ["benchmark", "benchmarks", "c", "cpp", "glmark2", "glsl", "glsl-shader", "glsl-shaders", "make", "makefile"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2024-04-25T15:49:07Z"
lastCommitAt: "2026-10-09T10:48:54Z"
lastReleaseAt: "2026-09-25T08:34:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 91
maintainers: ["deadbeef7", "freebuff-web[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27dbb0e5c2ad3a982122938781d2ab3f4a86b7a6d79d3b123699e80cdcecfbfe/deadbeef7/ElectroBench"
---

# ElectroBench
ElectroBench is a 45+60+45+45 second long four-scene benchmark specifically designed to run on old and modern PCs, don't critise it by it using OpenGL 2.1, and GLSL 1.2, Even office PCs have low scores at it.
It uses OpenGL 2.1/3.3, and C++, and uses make for compilation. It is designed to be a replacement for glmark (even though it is great and I used it before).

It ships **one** executable that contains **all four** scenes — no second binary, no child process:

All four scenes present at **1280x720 fullscreen**. Pass `--windowed` to run in a window instead;
fullscreen is suppressed automatically whenever `--screenshot` or `--width` is given, so the
headless capture pipeline can still pin the framebuffer exactly.

| Scene | Renderer | Contents |
|---|---|---|
| **Scene 1 — ElectroBench** (the OG) | OpenGL 2.1 / GLSL 1.2, fixed-function pipeline | **110 UZIs** on a power-trowelled concrete floor under a generated dusk sky, lit by a warm sun, opened by a three-act **flyover camera** (approach, runway pass down the array, pull back) |
| **Scene 2** | OpenGL 3.3 core, pixel-shader workloads | An ocean under volumetric clouds (3DMark2001 SE "Pixel Shader" benchmark…
