---
repo: "xeokit/sdk"
name: "sdk"
description: "Next-generation alpha-status xeokit viewer in development"
url: "https://github.com/xeokit/sdk"
homepage: "https://xeokit.github.io/sdk/docs/api"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [53, 36]
topics: ["aec", "bim", "ifc", "javascript", "webgl", "webgpu"]
stars: 25
forks: 12
openIssues: 9
closedIssues: 8
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2021-09-08T08:00:13Z"
lastCommitAt: "2026-07-03T12:43:39Z"
lastReleaseAt: "2026-01-28T15:32:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 62
maintainers: ["xeolabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f4ff2e1f7817d6fa0ac8876cd2b0fbf831341a93f61c29397805087eff9db2/xeokit/sdk"
discussionCount: 6
---

# @xeokit SDK (V3)

> **High‑performance AECO visualization for the web and Node.js**

Welcome to **xeokit**, a flexible, production‑grade SDK for creating fast, interactive visualizations of AECO (Architecture, Engineering, Construction & Operations) models directly in the browser or in Node.js.

Built with **TypeScript**, xeokit is designed for **extreme performance**: it streams, loads, and renders very large models with minimal memory and CPU usage. The SDK cleanly separates **data**, **scene representation**, and **rendering**, making it suitable for everything from lightweight viewers to complex BIM pipelines.

---

## Key Features

* **Lightning‑fast rendering** of massive AECO models via batched draw calls, data textures, and a renderer designed for IFC-scale scenes.
* **Browser & Node.js support** for viewing, conversion, and preprocessing.
* **Scene graph + data graph** architecture, decoupled so semantics and geometry can be authored independently.
* **Multi‑canvas, multi‑view viewers** with floating-panel and tiled layouts.
* **Full precision (64‑bit) coordinate system**, so georeferenced and city-scale models render without jitter.
* **Pluggable renderer backends**…
