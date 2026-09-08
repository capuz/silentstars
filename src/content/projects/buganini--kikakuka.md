---
repo: "buganini/Kikakuka"
name: "Kikakuka"
description: "KiCad Workspace / Panelizer / Build Variants / Differ / FreeCAD Bridge"
readmeQualityOk: true
url: "https://github.com/buganini/Kikakuka"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 72
forks: 4
openIssues: 4
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-07-11T16:09:13Z"
lastCommitAt: "2026-09-08T08:16:46Z"
lastReleaseAt: "2025-06-09T06:25:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 49
maintainers: ["buganini"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dc500ade6cf97f964c3fd4acc5d092c16486ec66998e8c0d015042c107388ad/buganini/Kikakuka"
---

# KiCad Workspace / Panelizer / Build Variants / Differ

Kikakuka (企画課, きかくか, Planning Section) (formerly Kikit-UI) is mainly built on top of [KiKit](https://github.com/yaqwsx/KiKit), [Shapely](https://github.com/shapely/shapely), modified [pcb-tools](https://github.com/curtacircuitos/pcb-tools), [OpenCV](https://github.com/opencv/opencv-python), [pypdfium2](https://github.com/pypdfium2-team/pypdfium2) and [PUI](https://github.com/buganini/PUI).

It creates a few more dimensions for KiCad:
* Workspaces / Projects
* Revisions
* Build Variants
* Panelization
* FreeCAD integration

# Features
* Workspace Manager
    * Easily navigate between projects
        * Automatically open multiple KiCad instances on macOS
    * Recall windows of previously opened files (macOS and Windows only)
* Differ
    * Highlight changed areas
    * [Schematic diff viewer](#schematics-differ)
    * [PCB diff viewer](#pcb-differ)
    * Git support
* Fabrication Planner
    * Panelizer
        * Interactive arrangement with real-time preview
        * Freeform placement not limited to M×N grid configurations
        * Support for multiple different PCBs in a single panel
        * [Automatic](#auto-tab) or…
