---
repo: "NovaShang/sldeditor"
name: "sldeditor"
description: "Lightweight in-browser editor for electrical single-line diagrams (SLD). React component."
readmeQualityOk: true
url: "https://github.com/NovaShang/sldeditor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 20
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-07T20:36:42Z"
lastCommitAt: "2026-10-25T02:48:02Z"
lastReleaseAt: "2026-06-26T22:28:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["NovaShang", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/608530a8a04d3be7102e4e295c88b9037060cf7c5589261eb13922f1038cd265/NovaShang/sldeditor"
---

# sldeditor

In-browser editor component for **electrical single-line diagrams (SLD / 一次系统图)**. Pure-frontend, no backend, no cloud. Designed to be dropped into a React app or used standalone.

> The local source directory is named `oneline-editor` (legacy); the npm package is `sldeditor`.

## What's in the box

- **47 built-in symbols** — breaker, disconnector, transformer (2W/3W), busbar, CT/PT, generator, motor, PV, inverter, EV charger, battery, meter, arrester, fuse, recloser, VFD, and more. Symbol set lives in `src/element-library/*.json` and is hot-loaded into a typed registry.
- **Terminal-level wiring** — connect to pins, not bounding boxes. Auto-snap + orthogonal routing.
- **Busbar as a first-class element** — stretchable, multi-tap, handles arbitrary device attachments.
- **Explicit topology model** — connectivity nodes computed from terminal coincidence, separate from rendering geometry. Exposed via the `compile()` function so you can run your own analyses on top.
- **Undo/redo, multi-select, copy/paste, alignment, snap, grid, zoom/pan**.
- **Local-first persistence** — JSON file open/save, plus SVG / PNG / DXF export. State is also cached in `localStorage` so refresh…
