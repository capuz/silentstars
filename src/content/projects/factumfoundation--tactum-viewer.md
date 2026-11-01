---
repo: "FactumFoundation/tactum-viewer"
name: "tactum-viewer"
description: "Web-based 3D multi-resolution viewer with dynamic tiling for 2.5D surface data"
readmeQualityOk: true
url: "https://github.com/FactumFoundation/tactum-viewer"
homepage: "https://factumfoundation.xyz/tactum-viewer/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [65, 27]
stars: 7
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-05T22:14:47Z"
lastCommitAt: "2026-11-01T22:58:38Z"
lastReleaseAt: "2026-07-29T13:39:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 7
maintainers: ["jcanofuentes", "FactumFoundation"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ceefa8377c81a0a785c78a5ebb785374cc228d46e00b090c47c6c7edac5b943/FactumFoundation/tactum-viewer"
---

# Tactum Viewer

Tactum is a web viewer for high resolution surface scans. It streams
albedo and height tiles and renders them as a 3D relief that you can
relight, measure and inspect in the browser. It is built with three.js and
a quadtree LOD streamer, and it works inside the IIIF ecosystem.

**[Live demo](https://factumfoundation.xyz/tactum-viewer/demo/)** · **[User manual](https://github.com/FactumFoundation/tactum-viewer/blob/HEAD/docs/manual/index.md)** · [](https://doi.org/10.5281/zenodo.21614286)

## Features

- Quadtree tile streaming (TMS pyramid) with screen space error LOD
- Works from real scan data. The input is a floating point depthmap in
  metres (32 or 64 bit TIFF) plus a colour image. The tools convert them
  into compact 16 bit tiles for the GPU.
- Switchable height channels, for example filtered relief and full surface
- Interactive relighting and shadows
- Measurement tools: distances, height differences, elevation profiles
- IIIF: Presentation 3 manifest generator, static Image API level-0
  packager, and the viewer can boot straight from a IIIF manifest

## Quickstart

Requirements: Node 20+, [uv](https://docs.astral.sh/uv/).

```bash
git clone…
