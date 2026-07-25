---
repo: "lxsolutions/studio-foundation"
name: "studio-foundation"
description: "AI-native, open-source game-dev toolkit: official Godot 4.7.1 + a checksum-locked WebGPU browser backend that renders 3D in-browser (verified on real GPU hardware), with MCP servers and agent workflows."
readmeQualityOk: true
url: "https://github.com/lxsolutions/studio-foundation"
homepage: "https://lxsolutions.github.io/studio-foundation/"
language: "Python"
languages: ["Python", "GDScript"]
languagePcts: [49, 36]
topics: ["agents", "ai", "ai-native", "browser-games", "game-engine", "gamedev", "godot", "godot-engine", "mcp", "open-source"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-07-21T07:49:39Z"
lastCommitAt: "2026-07-25T06:02:10Z"
lastReleaseAt: "2026-07-24T21:40:51Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["lxsolutions", "kwms01"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cdd69c75f00506cc1f85812c47a7f03a885e4aec280fab10e794b1d80fd4e34/lxsolutions/studio-foundation"
---

# Studio Foundation

**An AI-native, open-source game-dev toolkit — with a Godot 4.7.1 WebGPU browser
backend that actually renders 3D.**

Official [Godot](https://github.com/godotengine/godot) is the base and stays the
upstream. On top of it sits a WebGPU export path maintained as an ordered,
SHA-256-locked patch series, plus the MCP server, agent workflows, and asset
pipeline that make the whole thing drivable by AI assistants. WebGL 2 remains the
supported fallback.

### ▶ [Play it live — a Godot game running on WebGPU, in your browser](https://lxsolutions.github.io/studio-foundation/)

No install, no plugin. Needs a WebGPU-capable browser (Chrome/Edge 113+, Safari 26+,
Firefox on Windows); the page tells you if yours qualifies before you click. First load
takes roughly 15–30 seconds depending on your connection — most of it downloading the
~46 MB engine, not compiling shaders (pipelines build in about 2 seconds). It is
cached afterwards. Details: [webgpu-performance.md](https://github.com/lxsolutions/studio-foundation/blob/HEAD/docs/architecture/webgpu-performance.md).

***The Chariot Club*** *— a real game, not a test scene: a Roman colosseum with
crowded stands, chariot…
