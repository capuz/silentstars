---
repo: "HakanSeven12/OpenCADStudio"
name: "OpenCADStudio"
description: "A CAD application built with Rust — 2D/3D drawing, DWG/DXF support, and GPU-accelerated rendering"
url: "https://github.com/HakanSeven12/OpenCADStudio"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["2d-cad", "3d-cad", "cad", "dwg", "dxf", "engineering", "gpu-rendering", "iced", "rust", "wgpu"]
stars: 130
forks: 19
openIssues: 11
closedIssues: 153
watchers: 6
contributors: 8
recentReleases: 9
createdAt: "2026-03-22T11:53:50Z"
lastCommitAt: "2026-06-26T06:47:29Z"
lastReleaseAt: "2026-05-01T12:56:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["HakanSeven12", "schoeller", "KevinGriffin-new"]
openGraphImageUrl: "https://opengraph.githubassets.com/db45ea9fe548e9b619216c4839385baed7e294e8900f571b447158b9664563b7/HakanSeven12/OpenCADStudio"
fundingLinks: ["PATREON:https://patreon.com/HakanSeven12"]
discussionCount: 0
---

# Open CAD Studio

OCS is a CAD application for 2D drafting and 3D modeling, built with Rust. Reads and writes DWG and DXF files natively. Also has a web version now!

## OCS Web try it in the browser: https://hakanseven12.github.io/OpenCADStudio/

## Features

### File Formats
- **DWG** read/write (R13 through R2018)
- **DXF** read/write (R13 through R2018)
- **STL** export (`STLOUT` / `EXPORTSTL`)
- **STEP AP203** export (`STEPOUT`)
- **OBJ** import (`IMPORTOBJ`)
- **PDF** export (plot layouts to PDF)
- **WBLOCK** — write selected entities or a block to an external file
- **XREF** — attach, reload, and auto-resolve external references

### 2D Drafting
| Command | Description |
|---------|-------------|
| `LINE`, `PLINE`, `RECTANG`, `POLYGON` | Basic geometry |
| `CIRCLE`, `ARC`, `ELLIPSE`, `SPLINE` | Curves |
| `HATCH`, `HATCHEDIT` | Hatch fills with pattern, scale, angle editing |
| `OFFSET`, `TRIM`, `EXTEND`, `FILLET` | Modify geometry (supports lines, arcs, ellipses, polylines, splines) |
| `BREAK`, `STRETCH`, `LENGTHEN` | Shape editing |
| `ARRAY`, `MIRROR`, `MOVE`, `COPY`, `ROTATE`, `SCALE` | Transformations |
| `EXPLODE` | Explode blocks, dimensions, polylines, mlines |
|…
