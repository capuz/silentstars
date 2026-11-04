---
repo: "merely-made/wgpu-graft"
name: "wgpu-graft"
description: "Library for embedding native GPU textures (GL FBO, Vulkan image, Metal IOSurface) into wgpu textures."
readmeQualityOk: true
url: "https://github.com/merely-made/wgpu-graft"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["embedding", "gpu", "texture", "wgpu", "graphics", "rust"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-08T16:16:03Z"
lastCommitAt: "2026-11-04T05:48:29Z"
lastReleaseAt: "2026-10-23T02:51:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["mark-ik"]
openGraphImageUrl: "https://opengraph.githubassets.com/63b1310f3467af08a9a91f3bb230391cee6823010f5c6829ab3bef0dad5ce4fa/merely-made/wgpu-graft"
---

# wgpu-graft

Rust workspace for grafting an external GPU producer's texture onto
host-owned `wgpu` textures. The framework-agnostic
[`grafting`](https://github.com/merely-made/wgpu-graft/blob/HEAD/grafting/) crate provides the low-level interop (GL FBO /
Vulkan image / Metal IOSurface / DX12 shared texture into wgpu), a Servo
adapter sits on top, and nine demos show the embedding pattern across Rust
GUI frameworks. Derived from the
[Slint Servo embedding example](https://github.com/slint-ui/slint/tree/master/examples/servo).

## Status (2026-10-07)

- `grafting` 0.6.0 is the published baseline; `main` carries subsequent compatibility
  and diagnostic changes. It makes borrowed Metal frame descriptors move-only and carries
  feature-selected wgpu 28/29/30, including the corrected wgpu-28 Metal arm.
  wgpu 29 remains the default while the GUI ecosystem straddles majors.
- Servo demos use the immutable Servo 0.7.0 release
  `aac43a3f31a259f04a574f5ec4e959c943ad7cc7`, with Surfman 0.14 and ANGLE 0.7.
  Current migration checks and runtime acceptance are recorded in the
  [triplet release…
