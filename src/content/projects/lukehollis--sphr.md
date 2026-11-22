---
repo: "lukehollis/sphr"
name: "sphr"
description: "Open, hackable 3d digital twin builder that supports 3d gaussian splatting, 360 images, and vfx"
readmeQualityOk: true
url: "https://github.com/lukehollis/sphr"
homepage: "https://spacery.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 26]
topics: ["360-photo", "3d-gaussian-splat", "3d-gaussian-splatting", "digital-twin", "threejs", "vfx", "virtual-reality", "virtual-tour"]
stars: 69
forks: 21
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-11-27T21:31:48Z"
lastCommitAt: "2026-11-22T11:51:28Z"
lastReleaseAt: "2026-07-06T03:54:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["lukehollis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7e46a2b46e88dbe980f70a01e0e02111fed5aafaf9bf4e3eb957447325f25e6/lukehollis/sphr"
---

# SPHR

SPHR is an open source 3D space viewer you can host yourself. It is built for lidar scans, 3D Gaussian Splatting (3DGS) captures, and 360 image or video tours, and it runs entirely in the browser. Clone it, point it at your own scans, and serve tours from your own domain.

Self-host SPHR with this repository, or use paid hosting at [spacery.dev](https://spacery.dev/).

- **[LIVE DEMO (E57)](https://app.spacery.dev/s/bc8d61ff42cf/loomis-michael-telescope-observatory)**: a campus observatory converted from a Matterport E57 export.
- **[LIVE DEMO (3DGS)](https://app.spacery.dev/?demo=garden)**: a garden captured as 3D Gaussian splats.
- **[Get started with your agent](https://spacery.dev/#start)** (optional): add the Spacery MCP server to Claude, Codex, Grok, Antigravity or Meta Muse and your agent uploads a capture from your computer and publishes it as a space. Setup for agents is at [spacery.dev/agents.md](https://spacery.dev/agents.md).

This branch is the Next.js + Three.js migration. It removes the old separate backend requirement and ships as a client-rendered viewer that can load a default demo, a remote JSON config, or embedded bootstrap data from a host page.
