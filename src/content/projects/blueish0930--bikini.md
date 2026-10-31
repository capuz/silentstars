---
repo: "blueish0930/BIKINI"
name: "BIKINI"
description: "A custom blender build focus on geometry nodes and UI stuffs. Download the daily build from the release"
readmeQualityOk: true
url: "https://github.com/blueish0930/BIKINI"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 91
recentReleases: 1
createdAt: "2026-09-30T08:53:31Z"
lastCommitAt: "2026-10-31T09:53:09Z"
lastReleaseAt: "2026-10-05T03:51:28Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 48
maintainers: ["blueish0930", "ideasman42", "HansGoudey"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e76e6a7a9a282526f8ecd2b99d33ad33524b96d9e8b9cb73ea4efeeb0f7611/blueish0930/BIKINI"
---

# BIKINI

BIKINI is a Blender branch for people who build things with nodes. It tracks Blender's daily builds
and adds two new editors, one for textures and one for objects, plus a much wider set of geometry
nodes. Feature notes, node documentation and the VEX Wrangle reference live on the documentation
site; this repository is the source you can compile.

- Documentation: <https://blueish0930.github.io/BIKINI/>
- Source repository: <https://github.com/blueish0930/BIKINI>
- Source tree layout, third-party libraries to fetch and build steps: [BUILDING.txt](https://github.com/blueish0930/BIKINI/blob/HEAD/BUILDING.txt)
- Third-party license notes: [COPYING.md](https://github.com/blueish0930/BIKINI/blob/HEAD/COPYING.md)
- Upstream Blender build handbook: <https://developer.blender.org/docs/handbook/building_blender/>

## What BIKINI adds

**A texture editor that runs on the GPU.** The GPU Texture Editor is a node editor for images.
You build a texture as a graph — paint, SDF shapes, fractals, gradients, fluid, geometry
rasterisation, baking, FFT — and the graph is evaluated on the GPU, so a large map such as an 8K
set stays interactive while you change it in the editor.

**An object…
