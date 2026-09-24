---
repo: "ChristopherVR/emf-converter"
name: "emf-converter"
description: "A zero-dependency TypeScript library that converts EMF (Enhanced Metafile) and WMF (Windows Metafile) binary buffers into PNG data URLs by parsing their record streams and replaying drawing commands onto an HTML Canvas."
readmeQualityOk: true
url: "https://github.com/ChristopherVR/emf-converter"
homepage: "https://christophervr.github.io/emf-converter/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-06-18T03:45:15Z"
lastCommitAt: "2026-09-24T08:42:10Z"
lastReleaseAt: "2026-09-16T11:33:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 70
maintainers: ["ChristopherVR", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7047f77fc5e6a2e72b03a566aff0b9648ab9d22be22578db1616828521442e49/ChristopherVR/emf-converter"
---

# emf-converter

A zero-dependency TypeScript library that converts **EMF** (Enhanced Metafile) and **WMF** (Windows Metafile) binary buffers into **PNG data URLs** by parsing their record streams and replaying the drawing commands onto an HTML Canvas.

Windows Metafiles store a sequence of GDI drawing commands and are commonly embedded inside Office documents (Word, PowerPoint) and Windows clipboard data. This converter reads the raw binary, interprets each record, and replays the drawing operations onto a Canvas to produce a rasterised PNG. It handles three formats:

| Format   | Description                    | Coordinate system       |
| -------- | ------------------------------ | ----------------------- |
| **WMF**  | Windows Metafile (16-bit)      | Window/viewport mapping |
| **EMF**  | Enhanced Metafile (32-bit GDI) | Bounds-based scaling    |
| **EMF+** | GDI+ extension embedded in EMF | World transform matrix  |

<samp>**[▶️ Live demo](https://christophervr.github.io/emf-converter/)** · **[📦 npm](https://www.npmjs.com/package/emf-converter)**</samp>

---

## Breaking change: `convertEmfToDataUrl` / `convertWmfToDataUrl` removed

Versions before 3.0.0 exported two…
