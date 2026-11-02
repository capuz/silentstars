---
repo: "typeshade/typeshade"
name: "typeshade"
description: "Write GPU shaders in TypeScript."
readmeQualityOk: true
url: "https://github.com/typeshade/typeshade"
homepage: "https://typeshade.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["compiler", "computer-graphics", "glsl", "gpgpu", "graphics", "language-service", "rendering", "shader", "shaders", "shading-language"]
stars: 5
forks: 0
openIssues: 89
closedIssues: 132
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-07T08:19:16Z"
lastCommitAt: "2026-11-02T15:17:47Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 53
maintainers: ["Seungup", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1335ac2c00fbc5ba9277d639333fc2e316852b68d4e2daab70b42f9a5544e73/typeshade/typeshade"
---

# [TypeShade](https://typeshade.dev/)

**Write shaders in TypeScript. Start with `"use typeshade"`.**

TypeShade is a shader language and compiler built around the TypeScript authoring experience. A TypeScript source file opts into TypeShade with the file-level `"use typeshade"` directive, then uses TypeShade's typed resources, value layouts and shader-stage entry points.

- **TypeScript-shaped authoring.** Keep familiar functions, types, expressions and modules where they fit the GPU execution model.
- **GPU semantics at the language boundary.** `declare` resources, GPU value types and stage decorators make shader constraints explicit in the source.
- **One source, multiple targets.** The compiler lowers the TypeShade source to a shared IR and emits WGSL for WebGPU and GLSL ES 3.00 for WebGL2 where the example supports both.
- **Typed in the editor.** TypeScript catches wrong types and misspelled fields before shader code is emitted.
- **Reflection.** `reflect(module)` exposes bind groups, layouts and entry signatures from the same IR used for emission.

TypeShade ships the authoring and emit surface and a program runtime. `typeshade/runtime` loads a compiled program's manifest…
