---
repo: "SamG-Coder/ThreeBrowserStudio"
name: "ThreeBrowserStudio"
description: "LLM-first Three.js WebGPU scene and animation authoring with a persistent native viewport and typed MCP editing"
readmeQualityOk: true
url: "https://github.com/SamG-Coder/ThreeBrowserStudio"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["animation", "blender", "chatgpt", "codex", "mcp-server", "model-context-protocol", "procedural-generation", "scene-editor", "shader-graph", "threejs"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-28T12:37:24Z"
lastCommitAt: "2026-08-30T00:43:52Z"
lastReleaseAt: "2026-08-29T20:29:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["SamG-Coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/929dc63f22ac67fec908e5cb83a9b226e5eba17271bb63a182cbe16d2d81fba1/SamG-Coder/ThreeBrowserStudio"
---

# ThreeBrowser Studio

ThreeBrowser Studio is a persistent Three.js WebGPU authoring runtime for
Codex and ChatGPT. MCP is the editor. The native window is a live viewport
where a user can watch a project being created and review the same visual
evidence as the model. Play evaluates deterministic Action/keyframe animation
and timeline-driven Ocean displacement; game behaviour execution is a later
capability.

The project is intentionally standalone. It uses an installed ThreeBrowser
Runtime as its renderer/host instead of copying runtime, RTX, game, or sample
code into this repository.

A browser WebGPU preview is on
[GitHub Pages](https://samg-coder.github.io/ThreeBrowserStudio/). It shares the
viewport code with the desktop host and only starts the Node/MCP kernel when
ThreeRuntime is attached. See [`docs/users/github-pages.md`](https://github.com/SamG-Coder/ThreeBrowserStudio/blob/HEAD/docs/users/github-pages.md).

The target architecture and phased authoring-pipeline contract are in
[`DESIGN.md`](https://github.com/SamG-Coder/ThreeBrowserStudio/blob/HEAD/DESIGN.md). User guides and AI MCP patterns are in…
