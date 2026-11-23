---
repo: "logue/vue-vrm"
name: "vue-vrm"
description: "@vrm-c @vuejs component"
readmeQualityOk: true
url: "https://github.com/logue/vue-vrm"
homepage: "http://logue.dev/vue-vrm/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [70, 29]
topics: ["avatar", "threejs", "vrm", "vrma", "vue-component", "vue3"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T00:37:27Z"
lastCommitAt: "2026-11-23T10:24:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 55
undervaluedScore: 18
maintainers: ["logue"]
openGraphImageUrl: "https://opengraph.githubassets.com/00bf7b30e210cf85906e34341119ea2463fa98babb4c6197fa6d56782cd00501/logue/vue-vrm"
fundingLinks: ["GITHUB:https://github.com/logue", "KO_FI:https://ko-fi.com/logue", "CUSTOM:https://www.paypal.me/logue"]
---

# vue-vrm

English | [日本語](https://github.com/logue/vue-vrm/blob/HEAD/README.ja.md)

Vue 3 component library for rendering [VRM avatars](https://vrm.dev/en) with [three.js](https://threejs.org/). It supports [VRM 1.0](https://vrm.dev/en/vrm1/) loading, [VRMA](https://vrm.dev/en/vrma/) playback, camera controls, screenshots, and low-level helper utilities for working with VRM and VRMA buffers.

## Features

- Vue 3 component for rendering VRM 1.0 models from `ArrayBuffer`
- VRMA playback with single or multiple animation clips
- Configurable camera, lights, background, grid, and optional shader pass
- Optional orbit-style camera interaction with rotate, pan, zoom, and roll
- Exposed methods for playback control, camera reset, and screenshots
- Utility exports for validating and loading VRM / VRMA assets outside the component
